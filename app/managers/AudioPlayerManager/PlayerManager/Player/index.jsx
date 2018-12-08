// Hidden component to wrap an audio DOM element.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player'

class Player extends Component {

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

    shouldComponentUpdate(nextProps) {
        // Player only ever updates when it changes selected status.
        return nextProps.isSelected !== this.props.isSelected
    }

    componentDidUpdate() {
        // Tell recently unselected player to stop playing.
        if (!this.props.isSelected) {
            logger.info(`Player ${this.props.songIndex} was unselected.`)
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
        logger.info(`Player for ${this.props.songIndex} ended itself.`)
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
                logger.info(`Promise to play ${songIndex} succeeded.`)
                this.props.setSelectedPlayerIsPlaying(true)

            }).catch(error => {
                logger.error(`Promise to play ${songIndex} failed: ${error}`)
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
            logger.info(`Player ${this.props.songIndex} ended playing.`)

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
                logger.error('ended', this.props.songIndex)
            })
            this.audioPlayer.addEventListener('pause', () => {
                logger.error('pause', this.props.songIndex)
            })
            this.audioPlayer.addEventListener('play', () => {
                logger.error('play', this.props.songIndex)
            })
            this.audioPlayer.addEventListener('playing', () => {
                logger.error('playing', this.props.songIndex)
            })
            // Determine which times ranges have been buffered.
            this.audioPlayer.addEventListener('progress', () => {
                logger.error('progress', this.props.songIndex)
            })
            // Seek operation has completed.
            this.audioPlayer.addEventListener('seeked', () => {
                logger.error('seeked', this.props.songIndex)
            })
            // Seek operation has begun.
            this.audioPlayer.addEventListener('seeking', () => {
                logger.error('seeking', this.props.songIndex)
            })
            // Data is not forthcoming.
            this.audioPlayer.addEventListener('stalled', () => {
                logger.error('stalled', this.props.songIndex)
            })
            // Download has completed.
            this.audioPlayer.addEventListener('suspend', () => {
                logger.error('suspend', this.props.songIndex)
            })
            // Enough data is available that the media can be played for now.
            this.audioPlayer.addEventListener('canplay', () => {
                logger.error('canplay', this.props.songIndex)
            })
            this.audioPlayer.addEventListener('canplaythrough', () => {
                logger.error('canplaythrough', this.props.songIndex)
            })
            this.audioPlayer.addEventListener('waiting', () => {
                logger.error('waiting', this.props.songIndex)
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
