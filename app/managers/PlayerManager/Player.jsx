// Hidden component to wrap an audio DOM element.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player'

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

// https://www.npmjs.com/package/react-audio-player

const LISTEN_INTERVAL = 150

class Player extends Component {

    static propTypes = {
        // From parent.
        mp3: PropTypes.string.isRequired,
        songIndex: PropTypes.number.isRequired,
        totalTime: PropTypes.number.isRequired,
        selectTime: PropTypes.func.isRequired,
        advanceToNextSong: PropTypes.func.isRequired,
        setPlayerCanPlayThrough: PropTypes.func.isRequired,
        setPlayerRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            // Unique identifier for clearing setInterval.
            intervalId: ''
        }

        this._handleSuspendEvent = this._handleSuspendEvent.bind(this)
        this._handleEndedEvent = this._handleEndedEvent.bind(this)
        this._tellAppCurrentTime = this._tellAppCurrentTime.bind(this)
        this._setAudioPlayerRef = this._setAudioPlayerRef.bind(this)
    }

    shouldComponentUpdate() {
        return false
    }

    componentDidMount() {
        this.props.setPlayerRef(this, this.props.songIndex)

        // Tell app that player can now be played without interruption.
        this.audioPlayer.addEventListener(

            /**
             * This is effectively the same as canplaythrough. iOS doesn't fire
             * canplaythrough.
             */
            'suspend',
            this._handleSuspendEvent
        )

        this.audioPlayer.addEventListener(
            'ended',
            this._handleEndedEvent
        )
    }

    _clearInterval() {
        clearInterval(this.state.intervalId)
        this.setState({
            intervalId: ''
        })
    }

    setCurrentTime(currentTime = 0) {
        // Can be called by player manager.

        this.audioPlayer.currentTime = currentTime
    }

    handleBeginPlaying() {
        // Only called by player manager.

        this.audioPlayer.play()

        // Begin listening.
        const
            intervalId = setInterval(
                this._tellAppCurrentTime,
                LISTEN_INTERVAL
            )

        this.setState({
            intervalId
        })
    }

    handleEndPlaying(currentTime) {
        // Only called by player manager.

        this.audioPlayer.pause()
        this._clearInterval()

        // If still selected, reset time to selected verse.
        this.setCurrentTime(currentTime)
    }

    _tellAppCurrentTime() {
        const { currentTime } = this.audioPlayer,
            { totalTime } = this.props

        // If there's time remaining, tell app the current time.
        if (currentTime < totalTime) {

            this.props.selectTime(currentTime)

            // Otherwise, tell app to select next song.
        } else {
            this._handleEndedEvent()
        }
    }

    _handleSuspendEvent() {
        const {
            songIndex
        } = this.props

        this.props.setPlayerCanPlayThrough(songIndex)
    }

    _handleEndedEvent() {
        const { intervalId } = this.state

        /**
         * Ensure that this only gets called once, either by the current time
         * exceeding the total time, or by the audio element firing an event.
         */
        if (intervalId) {
            this.props.advanceToNextSong()

            this._clearInterval()
        }
    }

    _listenForDebugStatements(onlyIfSelected) {

        const showDebugStatements =
            this.props.isSelected || !onlyIfSelected

        if (showDebugStatements) {

            this.audioPlayer.addEventListener('ended', () => {
                logger.error('ended', this.props.songIndex);
            })
            this.audioPlayer.addEventListener('pause', () => {
                logger.error('pause', this.props.songIndex);
            })
            this.audioPlayer.addEventListener('play', () => {
                logger.error('play', this.props.songIndex);
            })
            this.audioPlayer.addEventListener('playing', () => {
                logger.error('playing', this.props.songIndex);
            })
            this.audioPlayer.addEventListener('timeupdate', () => {
                logger.error('timeupdate', this.props.songIndex);
            })

            // Determine which times ranges have been buffered.
            this.audioPlayer.addEventListener('progress', () => {
                logger.error('progress', this.props.songIndex);
            })

            // Seek operation has completed.
            this.audioPlayer.addEventListener('seeked', () => {
                logger.error('seeked', this.props.songIndex);
            })

            // Seek operation has begun.
            this.audioPlayer.addEventListener('seeking', () => {
                logger.error('seeking', this.props.songIndex);
            })

            // Data is not forthcoming.
            this.audioPlayer.addEventListener('stalled', () => {
                logger.error('stalled', this.props.songIndex);
            })

            // Download has completed.
            this.audioPlayer.addEventListener('suspend', () => {
                logger.error('suspend', this.props.songIndex);
            })

            // Enough data is available that the media can be played for now.
            this.audioPlayer.addEventListener('canplay', () => {
                logger.error('canplay', this.props.songIndex);
            })

            this.audioPlayer.addEventListener('canplaythrough', () => {
                logger.error('canplaythrough', this.props.songIndex);
            })

            this.audioPlayer.addEventListener('waiting', () => {
                logger.error('waiting', this.props.songIndex);
            })
        }
    }

    _setAudioPlayerRef(node) {
        this.audioPlayer = node.audioEl
    }

    render() {
        return (
            <ReactAudioPlayer
                ref={this._setAudioPlayerRef}
                src={this.props.mp3}
            />
        )
    }
}

export default Player
