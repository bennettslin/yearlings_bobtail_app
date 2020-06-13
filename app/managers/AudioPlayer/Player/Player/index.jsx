// Hidden component to wrap an audio DOM element.
import React, {
    forwardRef,
    useImperativeHandle,
    useEffect,
    useRef,
    useState,
    memo
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
import { updateAudioStore } from '../../../../redux/audio/action'
import { updatePlayersStore } from '../../../../redux/players/action'
import { getMapPlayerPausedTime } from '../../../../redux/players/selectors'
import { getMapIsSongSelected } from '../../../../redux/selected/selectors'
import { getMp3ForSong } from '../../../../api/mp3'

const Player = forwardRef(({
    songIndex,
    updateCurrentTime,
    handleSongEnd,
    dispatchPlayerCanPlayThrough

}, ref) => {
    const
        // TODO: This is just for debugging, for now.
        dispatch = useDispatch(),
        audioPlayerElement = useRef(),
        isSelected = useSelector(getMapIsSongSelected(songIndex)),
        playerPausedTime = useSelector(getMapPlayerPausedTime(songIndex)),
        [isPromisingToPlay, setIsPromisingToPlay] = useState(false)

    const setCurrentTime = () => {
        audioPlayerElement.current.currentTime = playerPausedTime

        // TODO: This is just for debugging, for now.
        dispatch(updatePlayersStore({
            [`player${songIndex}`]: playerPausedTime
        }))
    }

    const dispatchIsPlaying = isPlaying => {
        /**
         * If currently selected player is being toggled on, set in store that
         * it was able to play. If selected song was changed, set in store
         * whether newly selected player is able to play.
         */
        if (isSelected) {
            dispatch(updateAudioStore({ isPlaying }))
        }
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
            dispatchIsPlaying(false)
        }
    }

    const _handlePlayPromise = isPlaying => {
        dispatchIsPlaying(isPlaying)
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
            dispatchIsPlaying(true)
        }

        setIsPromisingToPlay(true)
    }

    const _handleSuspendEvent = () => {
        dispatchPlayerCanPlayThrough.current(songIndex)
    }

    const _handleTimeUpdateEvent = () => {
        const { currentTime, paused } = audioPlayerElement.current
        if (!paused) {
            updateCurrentTime({
                currentTime,
                currentSongIndex: songIndex
            })
        }
    }

    const _handleEndedEvent = () => {
        logEndByPlayer(songIndex)
        handleSongEnd.current()
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
                src: getMp3ForSong(songIndex)
            }}
        />
    )
})

Player.propTypes = {
    songIndex: PropTypes.number.isRequired,
    updateCurrentTime: PropTypes.func.isRequired,
    handleSongEnd: PropTypes.func.isRequired,
    dispatchPlayerCanPlayThrough: PropTypes.object.isRequired
}

export default memo(Player)
