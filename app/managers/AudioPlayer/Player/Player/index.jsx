// Hidden component to wrap an audio DOM element.
import React, {
    forwardRef,
    useImperativeHandle,
    useEffect,
    useRef,
    useState
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player'
import {
    logPause,
    logIgnoreSubsequentPause,
    logPlayPromise,
    logIgnoreSubsequentPromise,
    logPlayPromiseSuccess,
    logPlayPromiseFailure,
    logEndByPlayer
} from './helpers/log'
import { updatePlayersStore } from '../../../../redux/players/action'
import { getMapPlayerPausedTime } from '../../../../redux/players/selectors'

const Player = forwardRef(({
    // TODO: Get these from selector.
    mp3,
    songIndex,
    isSelected,

    updateCurrentTime,
    updateEnded,
    dispatchPlayerCanPlayThrough,
    setSelectedPlayerIsPlaying

}, ref) => {
    const
        // TODO: This is just for debugging, for now.
        dispatch = useDispatch(),
        audioPlayerElement = useRef(),
        playerPausedTime = useSelector(getMapPlayerPausedTime(songIndex)),
        [isPromisingToPlay, setIsPromisingToPlay] = useState(false)

    const setCurrentTime = () => {
        audioPlayerElement.current.currentTime = playerPausedTime

        // TODO: This is just for debugging, for now.
        dispatch(updatePlayersStore({
            [`player${songIndex}`]: playerPausedTime
        }))

    }

    const askToPause = () => {
        // Can be called by player manager.
        /**
         * There's a promise to play still out there, so we'll pause it when
         * the promise is returned, not here.
         */
        if (isPromisingToPlay) {
            logIgnoreSubsequentPause(songIndex)
            return
        }

        /**
         * This gets called when the player is unselected, even if it was never
         * selected to begin with because the timeout was cleared too soon. So
         * make sure the player is actually playing before pausing it.
         */
        if (!audioPlayerElement.current.paused) {
            logPause(songIndex)
            audioPlayerElement.current.pause()

            /**
             * If still selected, reset time to selected verse. Otherwise, reset
             * time to start of song.
             */
            setCurrentTime()
        }
    }

    const _handlePlayPromise = isPlaying => {
        setSelectedPlayerIsPlaying({
            isPlaying,
            songIndex
        })
        setIsPromisingToPlay(false)
    }

    const _handlePlayPromiseSuccess = () => {
        logPlayPromiseSuccess(songIndex)
        _handlePlayPromise(true)
    }

    const _handlePlayPromiseFailure = error => {
        logPlayPromiseFailure(songIndex, error)
        _handlePlayPromise(false)
    }

    const promiseToPlay = () => {
        // Only called by player manager.
        /**
         * There's a promise to play still out there, so do nothing.
         */
        if (isPromisingToPlay) {
            logIgnoreSubsequentPromise(songIndex)
            return
        }

        setCurrentTime()
        const playPromise = audioPlayerElement.current.play()

        logPlayPromise(songIndex)

        /**
         * Browser supports the return of a promise:
         https://developers.google.com/web/updates/2016/03/play-returns-promise
         */
        if (playPromise !== undefined) {
            playPromise
                .then(_handlePlayPromiseSuccess)
                .catch(_handlePlayPromiseFailure)

        } else {
            setSelectedPlayerIsPlaying({
                isPlaying: true,
                songIndex
            })
        }

        setIsPromisingToPlay(true)
    }

    const _handleSuspendEvent = () => {
        dispatchPlayerCanPlayThrough(songIndex)
    }

    const _handleTimeUpdateEvent = () => {
        const {
            currentTime,
            paused
        } = audioPlayerElement.current

        if (!paused) {
            updateCurrentTime({
                currentTime,
                currentSongIndex: songIndex
            })
        }
    }

    const _handleEndedEvent = () => {
        logEndByPlayer(songIndex)
        updateEnded()
    }

    const setRef = node => {
        if (node) {
            audioPlayerElement.current = node.audioEl.current
        }
    }

    useEffect(() => {
        // Tell app that player can now be played without interruption.
        audioPlayerElement.current.addEventListener(
            /**
             * This is effectively the same as canplaythrough. iOS doesn't fire
             * canplaythrough.
             */
            'suspend',
            _handleSuspendEvent
        )

        // Tell app the current player time.
        audioPlayerElement.current.addEventListener(
            'timeupdate',
            _handleTimeUpdateEvent
        )

        // Tell app the player has ended.
        audioPlayerElement.current.addEventListener(
            'ended',
            _handleEndedEvent
        )
    }, [])

    useEffect(() => {
        // Tell recently unselected player to stop playing.
        if (!isSelected) {
            askToPause()
        }
    }, [isSelected])

    useImperativeHandle(ref, () => ({
        promiseToPlay,
        askToPause,
        songIndex
    }))
    return (
        <ReactAudioPlayer
            {...{
                ref: setRef,
                src: mp3
            }}
        />
    )
})

Player.propTypes = {
    mp3: PropTypes.string.isRequired,
    songIndex: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    updateCurrentTime: PropTypes.func.isRequired,
    updateEnded: PropTypes.func.isRequired,
    dispatchPlayerCanPlayThrough: PropTypes.func.isRequired,
    setSelectedPlayerIsPlaying: PropTypes.func.isRequired
}

export default Player
