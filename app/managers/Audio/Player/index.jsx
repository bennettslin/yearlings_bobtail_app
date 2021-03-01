// Hidden component to wrap an audio DOM element.
import React, { useEffect, useRef, useState, memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player'
import {
    logPause,
    logPromisePlay,
    logIgnoreSubsequentPromise,
    logPlayPromiseSuccess,
    logPlayPromiseFailure,
    logEndByPlayer,
    logEndByFinalVerse,
    getShownErrorMessage,
} from './helper'
import {
    updateAudioStore,
    resetAudioQueue,
} from '../../../redux/audio/action'
import {
    mapIsPlaying,
    mapQueuedTogglePlay,
    mapQueuedPlayFromLogue,
    mapCanPromisePlay,
} from '../../../redux/audio/selector'
import { getMapPlayerPausedTime } from '../../../redux/players/selector'
import { getMapIsSongSelected } from '../../../redux/selected/selector'
import { getMp3ForSong } from '../../../api/mp3'
import { updateCanPlayThroughForSong } from '../../../redux/players/action'
import { updateErrorMessage } from '../../../redux/error/action'

const Player = ({
    songIndex,
    handleSongEnd,
    updateCurrentTime,

}) => {
    const
        dispatch = useDispatch(),
        audioPlayerElement = useRef(),
        didMountRef = useRef(),
        isSelected = useSelector(getMapIsSongSelected(songIndex)),
        playerPausedTime = useSelector(getMapPlayerPausedTime(songIndex)),
        isPlaying = useSelector(mapIsPlaying),
        queuedTogglePlay = useSelector(mapQueuedTogglePlay),
        queuedPlayFromLogue = useSelector(mapQueuedPlayFromLogue),
        canPromisePlay = useSelector(mapCanPromisePlay),
        [isPromisingToPlay, setIsPromisingToPlay] = useState(false)

    const setCurrentTime = (currentTime = playerPausedTime) => {
        audioPlayerElement.current.currentTime = currentTime
        if (isSelected) {
            updateCurrentTime({ currentTime })
        }
    }

    const dispatchIsPlayingIfSelected = isPlaying => {
        if (isSelected) {
            dispatch(updateAudioStore({ isPlaying }))
        }
    }

    const askToPause = time => {
        if (audioPlayerElement.current.paused) {
            return
        }

        setCurrentTime(time)
        logPause(songIndex)
        audioPlayerElement.current.pause()
        dispatchIsPlayingIfSelected(false)
    }

    const promiseToPlay = time => {
        // If there's already a promise to play, just return.
        if (isPromisingToPlay) {
            logIgnoreSubsequentPromise(songIndex)
            return
        }

        setCurrentTime(time)
        logPromisePlay(songIndex)
        const
            playPromise = audioPlayerElement.current.play(),
            timeFromPromiseToPlay = Date.now()

        /**
         * If no promise is returned, then the browser does not support the
         * return of a promise, and is already playing the audio element.
         */
        if (playPromise === undefined) {
            dispatchIsPlayingIfSelected(true)

        } else {
            setIsPromisingToPlay(true)

            playPromise
                .then(() => {
                    logPlayPromiseSuccess({
                        songIndex,
                        timeFromPromiseToPlay,
                    })
                    dispatchIsPlayingIfSelected(true)
                })
                .catch(error => {
                    const errorMessage = getShownErrorMessage(error)
                    logPlayPromiseFailure({
                        songIndex,
                        errorMessage,
                        timeFromPromiseToPlay,
                    })
                    dispatch(updateErrorMessage(errorMessage))
                })
                .finally(() => {
                    setIsPromisingToPlay(false)
                })
        }
    }

    const onLoadedMetadata = () => {
        dispatch(updateCanPlayThroughForSong(songIndex))
    }

    const _prepareToRepeat = () => {
        // Explicitly reset time. (Not necessary to do both, but whatever.)
        askToPause(0)
        promiseToPlay(0)
    }

    const onListen = currentTime => {
        if (isSelected) {
            // If this returns true, repeat song.
            const {
                songEnded,
                doRepeat,
            } = updateCurrentTime({
                currentTime,
                fromListen: true,
            })

            if (songEnded) {
                logEndByFinalVerse(songIndex)
            }

            if (doRepeat) {
                _prepareToRepeat()
            }
        }
    }

    const onEnded = () => {
        logEndByPlayer(songIndex)
        // If this returns true, repeat song.
        if (handleSongEnd()) {
            _prepareToRepeat()
        }
    }

    const setRef = node => {
        if (node) {
            audioPlayerElement.current = node.audioEl.current
        }
    }

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

    useEffect(() => {
        if (didMountRef.current) {
            if (isSelected) {
                if (
                    /**
                     * Wait for song select to finalise, in case the user is
                     * cycling through songs in quick succession.
                     */
                    canPromisePlay && (

                        /**
                         * Play only if audio is already playing, or if play
                         * toggled from logue.
                         */
                        isPlaying ||
                        queuedPlayFromLogue
                    )
                ) {
                    promiseToPlay()
                }

                dispatch(resetAudioQueue())
            }
        } else {
            didMountRef.current = true
        }
    }, [canPromisePlay])

    useEffect(() => {
        // If no longer selected, pause.
        if (!isSelected) {
            askToPause()
        }
    }, [isSelected])

    return (
        <ReactAudioPlayer
            {...{
                ref: setRef,
                listenInterval: 50,

                /**
                 * This was originally onCanPlayThrough, but Firefox and Safari
                 * don't support it, unfortunately.
                 */
                onLoadedMetadata,
                onListen,
                onEnded,
                src: getMp3ForSong(songIndex),
            }}
        />
    )
}

Player.propTypes = {
    songIndex: PropTypes.number.isRequired,
    handleSongEnd: PropTypes.func.isRequired,
    updateCurrentTime: PropTypes.func.isRequired,
}

export default memo(Player)
