// Hidden component to wrap an audio DOM element.
import React, {
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
    logPromisePlay,
    logIgnoreSubsequentPromise,
    logPlayPromiseSuccess,
    logPlayPromiseFailure,
    logEndByPlayer,
    logEndByFinalVerse
} from './helper'
import {
    updateAudioStore,
    resetAudioQueue
} from '../../../redux/audio/action'
import {
    mapIsPlaying,
    mapQueuedTogglePlay,
    mapQueuedPlayFromLogue,
    mapCanPromisePlay
} from '../../../redux/audio/selector'
import { getMapPlayerPausedTime } from '../../../redux/players/selector'
import { getMapIsSongSelected } from '../../../redux/selected/selector'
import { getMp3ForSong } from '../../../api/mp3'
import { updateCanPlayThroughForSong } from '../../../redux/players/action'

const Player = ({
    songIndex,
    handleSongEnd,
    updateCurrentTime

}) => {
    const
        dispatch = useDispatch(),
        audioPlayerElement = useRef(),
        didMount = useRef(),
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
        if (isPromisingToPlay) {
            logIgnoreSubsequentPromise(songIndex)
            return
        }

        setCurrentTime(time)
        logPromisePlay(songIndex)
        const playPromise = audioPlayerElement.current.play()

        /**
         * Browser supports the return of a promise:
         https://developers.google.com/web/updates/2016/03/play-returns-promise
         */
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    logPlayPromiseSuccess(songIndex)
                    dispatchIsPlayingIfSelected(true)
                })
                .catch(error => {
                    logPlayPromiseFailure(songIndex, error)
                })
                .finally(() => {
                    setIsPromisingToPlay(false)
                })

        } else {
            dispatchIsPlayingIfSelected(true)
        }

        setIsPromisingToPlay(true)
    }

    const onCanPlayThrough = () => {
        /**
         * TODO: Confirm that this works for iOS, because in the old code, this
         * was attached to the suspend event, because iOS doesn't recognise
         * canPlayThrough.
         */
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
                doRepeat
            } = updateCurrentTime({
                currentTime,
                fromListen: true
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
        if (didMount.current) {
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
            didMount.current = true
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
                onCanPlayThrough,
                onListen,
                onEnded,
                src: getMp3ForSong(songIndex)
            }}
        />
    )
}

Player.propTypes = {
    songIndex: PropTypes.number.isRequired,
    handleSongEnd: PropTypes.func.isRequired,
    updateCurrentTime: PropTypes.func.isRequired
}

export default memo(Player)
