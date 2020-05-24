import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAudioStore } from '../../../redux/audio/action'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'

import SongDispatcher from '../../../handlers/Song/Dispatcher'
import { populateRefs } from '../../../helpers/ref'

import {
    CONTINUE,
    AUDIO_OPTIONS
} from '../../../constants/options'

class AudioManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        queuedTogglePlay: PropTypes.bool.isRequired,
        audioOptionIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateAudioStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired,
        toggleSelectedPlayer: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            handleSongEnd: this.handleSongEnd
        })
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

            this.props.updateAudioStore({ queuedTogglePlay: false })
        }
    }

    _togglePlay() {
        const isPlaying = !this.props.isPlaying

        // Player manager will decide whether to set isPlaying in store.
        this.props.toggleSelectedPlayer({ isPlaying })

        if (isPlaying) {
            this.props.updateScrollLyricStore({
                queuedScrollLyricLog: 'Playing on.',
                queuedScrollLyricByVerse: true,
                queuedScrollLyricAlways: true
            })
        }
    }

    handleSongEnd = () => {
        /**
         * When selecting next song through audio player, reset annotation and
         * verse, and scroll element into view, but do not access nav section.
         */
        const {
                selectedSongIndex,
                audioOptionIndex
            } = this.props,

            selectedAudioOption = AUDIO_OPTIONS[audioOptionIndex]

        /**
         * If option is to continue, advance to next song. Otherwise, stay on
         * same song, and start at beginning. (True evaluates to 1, false 0.)
         */
        const nextSongIndex = selectedSongIndex
            + (selectedAudioOption === CONTINUE)

        this.dispatchSong({
            selectedSongIndex: nextSongIndex
        })
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <SongDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

const mapStateToProps = ({
    audioStore: {
        isPlaying,
        queuedTogglePlay
    },
    sessionStore: { audioOptionIndex },
    selectedStore: { selectedSongIndex }
}) => ({
    isPlaying,
    queuedTogglePlay,
    audioOptionIndex,
    selectedSongIndex
})

export default connect(
    mapStateToProps,
    {
        updateAudioStore,
        updateScrollLyricStore
    }
)(AudioManager)
