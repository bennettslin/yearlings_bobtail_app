import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePlayerStore } from 'flux/player/action'
import { updateSessionStore } from 'flux/session/action'

import SongDispatcher from '../../../handlers/SongHandler/Dispatcher'

import {
    CONTINUE,
    PAUSE_AT_END,
    AUDIO_OPTIONS
} from 'constants/options'

class AudioManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        queuedTogglePlay: PropTypes.bool.isRequired,
        canPlayThroughs: PropTypes.number.isRequired,
        selectedAudioOptionIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updatePlayerStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired,
        toggleSelectedPlayer: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.parentThis.handleSongEnd = this.handleSongEnd
    }

    componentDidUpdate(prevProps) {
        this._checkTogglePlay(prevProps)
    }

    _checkTogglePlay(prevProps) {
        const
            { queuedTogglePlay } = this.props,
            { queuedTogglePlay: prevTogglePlay } = prevProps

        if (queuedTogglePlay && !prevTogglePlay) {
            this._togglePlay()

            this.props.updatePlayerStore({ queuedTogglePlay: false })
        }
    }

    _togglePlay() {
        const {
                isPlaying: wasPlaying,
                isSelectedLogue
            } = this.props,

            isPlaying = !wasPlaying,
            isPlayingFromLogue = isSelectedLogue && isPlaying

        // Player manager will decide whether to set isPlaying in store.
        this.props.toggleSelectedPlayer({
            isPlaying,

            // Tell player to play the first song if from logue.
            ...isPlayingFromLogue && {
                selectedSongIndex: 1
            }
        })

        return true
    }

    handleSongEnd = () => {
        /**
         * When selecting next song through audio player, reset annotation and
         * verse, and scroll element into view, but do not access nav section.
         */
        const {
                selectedSongIndex,
                selectedAudioOptionIndex
            } = this.props,

            selectedAudioOption = AUDIO_OPTIONS[selectedAudioOptionIndex]

        // If option is to pause at end, stop play.
        if (selectedAudioOption === PAUSE_AT_END) {
            this._togglePlay()

            // Just select first verse of current song.
            this.dispatchSong({
                selectedSongIndex,
                selectedVerseIndex: 0
            })

        } else {

            /**
             * If option is to continue, advance to next song. Otherwise, stay
             * on same song, and start at beginning. (True evaluates to 1, false 0.)
             */
            const nextSongIndex = selectedSongIndex
                + (selectedAudioOption === CONTINUE)

            this.dispatchSong({
                selectedSongIndex: nextSongIndex
            })
        }
    }

    render() {
        return (
            <SongDispatcher {...{ parentThis: this }} />
        )
    }
}

const mapStateToProps = ({
    audioStore: { canPlayThroughs },
    playerStore: {
        isPlaying,
        queuedTogglePlay
    },
    sessionStore: { selectedAudioOptionIndex },
    songStore: {
        selectedSongIndex,
        isSelectedLogue
    }
}) => ({
    isPlaying,
    queuedTogglePlay,
    canPlayThroughs,
    selectedAudioOptionIndex,
    selectedSongIndex,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updatePlayerStore,
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AudioManager)
