// Hidden component to wrap an audio DOM element.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player'

const LISTEN_INTERVAL = 150

class Player extends Component {

    static propTypes = {
        // From parent.
        mp3: PropTypes.string.isRequired,
        songIndex: PropTypes.number.isRequired,
        isSelected: PropTypes.bool.isRequired,
        updateCurrentTime: PropTypes.func.isRequired,
        updateEnded: PropTypes.func.isRequired,
        setPlayerCanPlayThrough: PropTypes.func.isRequired,
        setPlayerRef: PropTypes.func.isRequired
    }

    state = {
        // Unique identifier for clearing setInterval.
        intervalId: ''
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

    shouldComponentUpdate(nextProps) {
        // Player only ever updates when it changes selected status.
        return nextProps.isSelected !== this.props.isSelected
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

    setCurrentTime(currentTime = 0) {
        // Can be called by player manager.
        this.audioPlayer.currentTime = currentTime
    }

    handleBeginPlaying(handlePlaySelectedPlayer) {
        // Only called by player manager.
        const { songIndex } = this.props,
            playPromise = this.audioPlayer.play()

        /**
         * Browser supports the return of a promise:
         https://developers.google.com/web/updates/2016/03/play-returns-promise
         */
        if (typeof playPromise !== 'undefined') {
            logger.info('Browser returns promise upon play.')

            playPromise.then(() => {
                logger.info(`Promise for ${songIndex} succeeded.`)

                this._setIntervalForTimeUpdate()
                handlePlaySelectedPlayer(true)

              }).catch(error => {
                // Player failed!
                logger.error(`Promise for ${songIndex} failed: ${error}`)
                handlePlaySelectedPlayer(false)
            });

        } else {
            logger.info('Browser does not return promise upon play.')

            this._setIntervalForTimeUpdate()
            handlePlaySelectedPlayer(true)
        }
    }

    handleEndPlaying(currentTime) {
        // Only called by player manager.
        this.audioPlayer.pause()

        /**
         * If still selected, reset time to selected verse. Otherwise, reset
         * time to start of song.
         */
        this.setCurrentTime(currentTime)
    }

    _tellAppCurrentTime = () => {
        const {
                currentTime,
                paused
            } = this.audioPlayer

        console.error(this.props.songIndex, 'is telling app current time!')

        if (paused) {
            // Once the player is paused, prevent further time updates.
            this._clearInterval()

        } else {
            this.props.updateCurrentTime(currentTime)
        }
    }

    _handleEndedEvent = () => {
        logger.error(`Player for ${this.props.songIndex} ended.`)

        this._clearInterval()
        this.props.updateEnded(this.props.songIndex)
    }

    _setIntervalForTimeUpdate() {
        const intervalId = setInterval(
                this._tellAppCurrentTime,
                LISTEN_INTERVAL
            )

        this.setState({
            intervalId
        })
    }

    _clearInterval() {
        clearInterval(this.state.intervalId)

        this.setState({
            intervalId: ''
        })
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
