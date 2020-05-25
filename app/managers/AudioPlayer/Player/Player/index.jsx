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

    state = { isPromisingToPlay: false }

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
            this.askToPause()
        }
    }

    setCurrentTime(currentTime = 0) {
        // Can be called by player manager.
        this.audioPlayer.currentTime = currentTime
    }

    askToPause({ currentTime } = {}) {
        // Can be called by player manager.
        const { songIndex } = this.props

        /**
         * There's a promise to play still out there, so we'll pause it when
         * the promise is returned, not here.
         */
        if (this.state.isPromisingToPlay) {
            logPlayer({
                log: `Ignoring subsequent request to pause ${songIndex}.`,
                action: 'ignoreSubsequentPause',
                label: songIndex
            })
            return
        }

        /**
         * This gets called when the player is unselected, even if it was never
         * selected to begin with because the timeout was cleared too soon. So
         * make sure the player is actually playing before pausing it.
         */
        if (!this.audioPlayer.paused) {
            logPlayer({
                log: `Player ${songIndex} paused.`,
                action: 'pause',
                label: songIndex
            })

            this.audioPlayer.pause()

            /**
             * If still selected, reset time to selected verse. Otherwise, reset
             * time to start of song.
             */
            this.setCurrentTime(currentTime)
        }
    }

    promiseToPlay() {
        // Only called by player manager.
        const { songIndex } = this.props

        /**
         * There's a promise to play still out there, so do nothing.
         */
        if (this.state.isPromisingToPlay) {
            logPlayer({
                log: `Ignoring subsequent promise to play ${songIndex}.`,
                action: 'ignoreSubsequentPromise',
                label: songIndex
            })
            return
        }

        const playPromise = this.audioPlayer.play()

        logPlayer({
            log: `Promising to play ${this.props.songIndex}\u2026`,
            action: 'promisePlay',
            label: songIndex
        })

        /**
         * Browser supports the return of a promise:
         https://developers.google.com/web/updates/2016/03/play-returns-promise
         */
        if (playPromise !== undefined) {
            playPromise
                .then(this._handlePlayPromiseSuccess)
                .catch(this._handlePlayPromiseFailure)

        } else {
            this.props.setSelectedPlayerIsPlaying({
                isPlaying: true,
                songIndex
            })
        }

        this.setState({ isPromisingToPlay: true })
    }

    _handlePlayPromiseSuccess = () => {
        const { songIndex } = this.props
        logPlayer({
            log: `Promise to play ${songIndex} succeeded.`,
            action: 'play',
            label: songIndex,
            success: true
        })

        this.props.setSelectedPlayerIsPlaying({
            isPlaying: true,
            songIndex
        })

        this.setState({ isPromisingToPlay: false })
    }

    _handlePlayPromiseFailure = (error) => {
        const { songIndex } = this.props
        logError({
            log: `Promise to play ${songIndex} failed: ${error}`,
            action: 'promisePlay',
            label: `song: ${songIndex}, error: ${error}`
        })

        this.props.setSelectedPlayerIsPlaying({
            isPlaying: false,
            songIndex
        })

        this.setState({ isPromisingToPlay: false })
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
        const { songIndex } = this.props

        logPlayer({
            log: `Player for ${songIndex} ended itself.`,
            action: 'endByPlayer',
            label: songIndex
        })
        this.props.updateEnded()
    }

    _setAudioPlayerRef = node => {
        this.audioPlayer = node.audioEl.current
    }

    render() {
        return (
            <ReactAudioPlayer
                {...{
                    ref: this._setAudioPlayerRef,
                    src: this.props.mp3
                }}
            />
        )
    }
}

export default Player
