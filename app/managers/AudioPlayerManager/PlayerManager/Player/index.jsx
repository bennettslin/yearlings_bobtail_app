// Hidden component to wrap an audio DOM element.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player'

class Player extends PureComponent {

    static propTypes = {
        // From parent.
        mp3: PropTypes.string.isRequired,
        songIndex: PropTypes.number.isRequired,
        isSelected: PropTypes.bool.isRequired,
        updateCurrentTime: PropTypes.func.isRequired,
        updateEnded: PropTypes.func.isRequired,
        setPlayerRef: PropTypes.func.isRequired,
        setPlayerCanPlayThrough: PropTypes.func.isRequired,
        setSelectedPlayerIsPlaying: PropTypes.func.isRequired
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

        // Tell app the current player time.
        this.audioPlayer.addEventListener(
            'timeupdate',
            this._handleTimeUpdateEvent
        )

        // Tell app the player has ended.
        this.audioPlayer.addEventListener(
            'ended',
            this._handleEndedEvent
        )
    }

    componentDidUpdate() {
        // Tell recently unselected player to stop playing.
        if (!this.props.isSelected) {
            this.handleEndPlaying()
        }
    }

    _handleSuspendEvent = () => {
        this.props.setPlayerCanPlayThrough(this.props.songIndex)
    }

    _handleTimeUpdateEvent = () => {
        const {
            currentTime,
            paused
        } = this.audioPlayer

        if (!paused) {
            const { songIndex } = this.props

            this.props.updateCurrentTime({
                currentTime,
                currentSongIndex: songIndex
            })
        }
    }

    _handleEndedEvent = () => {
        logPlayer(`Player for ${this.props.songIndex} ended itself.`)
        this.props.updateEnded()
    }

    setCurrentTime(currentTime = 0) {
        // Can be called by player manager.
        this.audioPlayer.currentTime = currentTime
    }

    handleBeginPlaying() {
        // Only called by player manager.
        const { songIndex } = this.props,
            playPromise = this.audioPlayer.play()

        /**
         * Browser supports the return of a promise:
         https://developers.google.com/web/updates/2016/03/play-returns-promise
         */
        if (typeof playPromise !== 'undefined') {

            playPromise.then(() => {
                logPlayer(`Promise to play ${songIndex} succeeded.`)
                this.props.setSelectedPlayerIsPlaying(true)

            }).catch(error => {
                logError(`Promise to play ${songIndex} failed: ${error}`)
                this.props.setSelectedPlayerIsPlaying(false)
            })

        } else {
            this.props.setSelectedPlayerIsPlaying(true)
        }
    }

    handleEndPlaying(currentTime) {
        // Can be called by player manager.

        /**
         * This gets called when the player is unselected, even if it was never
         * selected to begin with because the timeout was cleared too soon. So
         * make sure the player is actually playing before pausing it.
         */
        if (!this.audioPlayer.paused) {
            logPlayer(`Player ${this.props.songIndex} ended playing.`)

            this.audioPlayer.pause()

            /**
             * If still selected, reset time to selected verse. Otherwise, reset
             * time to start of song.
             */
            this.setCurrentTime(currentTime)
        }
    }

    _listenForDebugStatements(onlyIfSelected) {

        const showDebugStatements =
            this.props.isSelected || !onlyIfSelected

        if (showDebugStatements) {
            this.audioPlayer.addEventListener('ended', () => {
                logPlayer('ended')
            })
            this.audioPlayer.addEventListener('pause', () => {
                logPlayer('pause')
            })
            this.audioPlayer.addEventListener('play', () => {
                logPlayer('play')
            })
            this.audioPlayer.addEventListener('playing', () => {
                logPlayer('playing')
            })
            // Determine which times ranges have been buffered.
            this.audioPlayer.addEventListener('progress', () => {
                logPlayer('progress')
            })
            // Seek operation has completed.
            this.audioPlayer.addEventListener('seeked', () => {
                logPlayer('seeked')
            })
            // Seek operation has begun.
            this.audioPlayer.addEventListener('seeking', () => {
                logPlayer('seeking')
            })
            // Data is not forthcoming.
            this.audioPlayer.addEventListener('stalled', () => {
                logPlayer('stalled')
            })
            // Download has completed.
            this.audioPlayer.addEventListener('suspend', () => {
                logPlayer('suspend')
            })
            // Enough data is available that the media can be played for now.
            this.audioPlayer.addEventListener('canplay', () => {
                logPlayer('canplay')
            })
            this.audioPlayer.addEventListener('canplaythrough', () => {
                logPlayer('canplaythrough')
            })
            this.audioPlayer.addEventListener('waiting', () => {
                logPlayer('waiting')
            })
        }
    }

    _setAudioPlayerRef = (node) => {
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
