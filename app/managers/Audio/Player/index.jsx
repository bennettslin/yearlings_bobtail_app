// Manager for individual audio player.
import React, {
    forwardRef, useEffect, useImperativeHandle, useRef, useState,
} from 'react'
import { useDispatch } from 'react-redux'
import {
    logPlayPromiseSuccess,
    logPlayPromiseFailure,
} from './helper'
import AudioPlayerElement from '../Element'
import { updateIsPlaying } from '../../../redux/audio/action'
import { updateErrorMessage } from '../../../redux/error/action'

const PlayerManager = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        audioPlayer = useRef(),
        [isLoadedToPromise, setIsLoadedToPromise] = useState(false),
        [isPromisingToPlay, setIsPromisingToPlay] = useState(false)

    const promiseToPlay = () => {
        const
            playPromise = audioPlayer.current.play(),
            promiseStartTime = Date.now()

        /**
         * If no promise is returned, then the browser does not support the
         * return of a promise, and is already playing the audio element.
         */
        if (playPromise === undefined) {
            dispatch(updateIsPlaying(true))

        } else {
            setIsPromisingToPlay(true)

            playPromise
                .then(() => {
                    logPlayPromiseSuccess(promiseStartTime)
                    dispatch(updateIsPlaying(true))
                })
                .catch(error => {
                    const errorMessage = `${error.name}: ${error.message}`
                    logPlayPromiseFailure(promiseStartTime, errorMessage)
                    dispatch(updateErrorMessage(errorMessage))
                    dispatch(updateIsPlaying(false))
                })
                .finally(() => {
                    setIsPromisingToPlay(false)
                })
        }

        /**
         * Until we're actually playing, the player status is always either
         * loaded or promising. So we will set loaded to false only after
         * setting promising to true.
         */
        setIsLoadedToPromise(false)
    }

    const askToPlay = (currentSongIndex, currentVerseIndex) => {
        // If we're already preparing to play, just return.
        if (isLoadedToPromise || isPromisingToPlay) {
            logPlayer(`Ignoring subsequent ask to play.`)
            return
        }

        /**
         * This registers the user gesture token. This is needed by Safari,
         * and possibly other browsers in the future, for their measures to
         * prevent autoplay.
         */
        audioPlayer.current.load(currentSongIndex, currentVerseIndex)
    }

    const askToPause = currentIsPaused => {
        audioPlayer.current.pause()
        if (currentIsPaused) {
            dispatch(updateIsPlaying(false))
        }
    }

    const onPlayerLoaded = () => setIsLoadedToPromise(true)

    const onPlayerError = () => dispatch(updateIsPlaying(false))

    useEffect(() => {
        // Ensure that player only promises to play once it's loaded.
        if (isLoadedToPromise) {
            promiseToPlay()
        }
    }, [isLoadedToPromise])

    useImperativeHandle(ref, () => ({
        askToPause,
        askToPlay,
    }))

    return (
        <AudioPlayerElement
            {...{
                ref: audioPlayer,
                onPlayerLoaded,
                onPlayerError,
            }}
        />
    )
})

export default PlayerManager
