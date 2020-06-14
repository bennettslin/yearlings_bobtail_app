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
    logPromisePlay,
    logIgnoreSubsequentPromise,
    logPlayPromiseSuccess,
    logPlayPromiseFailure,
    logEndByPlayer
} from './helpers/log'
import { updateAudioStore } from '../../../../redux/audio/action'
import {
    mapIsPlaying,
    mapQueuedTogglePlay
} from '../../../../redux/audio/selectors'
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
        dispatch = useDispatch(),
        audioPlayerElement = useRef(),
        isSelected = useSelector(getMapIsSongSelected(songIndex)),
        playerPausedTime = useSelector(getMapPlayerPausedTime(songIndex)),
        isPlaying = useSelector(mapIsPlaying),
        queuedTogglePlay = useSelector(mapQueuedTogglePlay),
        [isPromisingToPlay, setIsPromisingToPlay] = useState(false)

    const setCurrentTime = () => {
        audioPlayerElement.current.currentTime = playerPausedTime
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

        logPromisePlay(songIndex)

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

    const onCanPlayThrough = () => {
        /**
         * TODO: Confirm that this works for iOS, because in the old code, this
         * was attached to the suspend event, because iOS doesn't recognise
         * canPlayThrough.
         */
        dispatchPlayerCanPlayThrough(songIndex)
    }

    const onListen = currentTime => {
        if (isSelected) {
            updateCurrentTime(currentTime)
        }
    }

    const onEnded = () => {
        logEndByPlayer(songIndex)
        handleSongEnd()
    }

    const setRef = node => {
        if (node) {
            audioPlayerElement.current = node.audioEl.current
        }
    }

    useEffect(() => {
        if (isPlaying) {
            // If now selected, play. If now deselected, pause.
            if (isSelected) {
                promiseToPlay()
            } else {
                askToPause()
            }
        }
    }, [isSelected])

    useEffect(() => {
        if (isSelected && queuedTogglePlay) {
            // If now paused, play. If now playing, pause.
            if (!isPlaying) {
                promiseToPlay()
            } else {
                askToPause()
            }
            dispatch(updateAudioStore({ queuedTogglePlay: false }))
        }
    }, [queuedTogglePlay])

    useImperativeHandle(ref, () => ({
        promiseToPlay,
        askToPause,
        songIndex
    }))
    return (
        <ReactAudioPlayer
            {...{
                ref: setRef,
                listenInterval: 50,
                onCanPlayThrough,
                onListen,
                onEnded,
                src: getMp3ForSong(songIndex)
            }}
        />
    )
})

Player.propTypes = {
    songIndex: PropTypes.number.isRequired,
    updateCurrentTime: PropTypes.func.isRequired,
    handleSongEnd: PropTypes.func.isRequired,
    dispatchPlayerCanPlayThrough: PropTypes.func.isRequired
}

export default memo(Player)
