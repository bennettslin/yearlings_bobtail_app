import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAudioStore } from '../../../redux/audio/action'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import {
    mapIsPlaying,
    mapQueuedTogglePlay
} from '../../../redux/audio/selectors'
import SongDispatcher from '../../../handlers/Song/Dispatcher'
import {
    CONTINUE,
    AUDIO_OPTIONS
} from '../../../constants/options'
import { mapSelectedSongIndex } from '../../../redux/selected/selectors'
import { mapAudioOptionIndex } from '../../../redux/session/selectors'

const mapStateToProps = state => {
    const
        isPlaying = mapIsPlaying(state),
        queuedTogglePlay = mapQueuedTogglePlay(state),
        selectedSongIndex = mapSelectedSongIndex(state),
        audioOptionIndex = mapAudioOptionIndex(state)

    return {
        isPlaying,
        queuedTogglePlay,
        audioOptionIndex,
        selectedSongIndex
    }
}

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
        getHandleSongEnd: PropTypes.func.isRequired,
        toggleSelectedPlayer: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getHandleSongEnd(this.handleSongEnd)
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

    getDispatchSong = dispatch => {
        this.dispatchSong = dispatch
    }

    render() {
        return (
            <SongDispatcher {...{ ref: this.getDispatchSong }} />
        )
    }
}

export default connect(
    mapStateToProps,
    {
        updateAudioStore,
        updateScrollLyricStore
    }
)(AudioManager)
