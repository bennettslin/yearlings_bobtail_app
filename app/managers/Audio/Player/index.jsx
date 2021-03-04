// Manager for individual audio player.
import React, {
    forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState,
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
    logPlayPromiseSuccess,
    logPlayPromiseFailure,
    getShouldDispatchIsPlaying,
} from './helper'
import AudioPlayerContext from '../../../contexts/AudioPlayer'
import AudioPlayerElement from '../Element'
import { getAudioTimeFromCurrentTime } from '../../../api/album/time'
import { updateIsPlaying } from '../../../redux/audio/action'
import { getMapIsSongLyric } from '../../../redux/lyric/selector'
import { getMapIsSongSelected } from '../../../redux/selected/selector'
import { updateErrorMessage } from '../../../redux/error/action'

const PlayerManager = forwardRef(({ songIndex }, ref) => {
    const
        { setAudioTime } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        audioPlayer = useRef(),
        isSongLyric = useSelector(getMapIsSongLyric(songIndex)),
        isSongSelected = useSelector(getMapIsSongSelected(songIndex)),
        [isLoadedToPromise, setIsLoadedToPromise] = useState(false),
        [isPromisingToPlay, setIsPromisingToPlay] = useState(false)

    const dispatchIsPlayingAfterPromise = (currentIsPlaying = false) => {
        if (getShouldDispatchIsPlaying({
            currentIsPlaying,
            isSongSelected,
        })) {
            dispatch(updateIsPlaying(currentIsPlaying))
        }
    }

    const promiseToPlay = () => {
        const
            playPromise = audioPlayer.current.play(),
            promiseStartTime = Date.now()

        /**
         * If no promise is returned, then the browser does not support the
         * return of a promise, and is already playing the audio element.
         */
        if (playPromise === undefined) {
            dispatchIsPlayingAfterPromise(true)

        } else {
            setIsPromisingToPlay(true)

            playPromise
                .then(() => {
                    logPlayPromiseSuccess({
                        songIndex,
                        promiseStartTime,
                    })
                    dispatchIsPlayingAfterPromise(true)
                })
                .catch(error => {
                    const errorMessage = `${error.name}: ${error.message}`
                    logPlayPromiseFailure({
                        songIndex,
                        errorMessage,
                        promiseStartTime,
                    })
                    dispatch(updateErrorMessage(errorMessage))
                    dispatchIsPlayingAfterPromise()
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

    const askToPlay = currentVerseIndex => {
        // If we're already preparing to play, just return.
        if (isLoadedToPromise || isPromisingToPlay) {
            logPlayer(`Ignoring subsequent ask to play ${songIndex}.`)
            return
        }

        /**
         * This registers the user gesture token. This is needed by Safari,
         * and possibly other browsers in the future, for their measures to
         * prevent autoplay.
         */
        audioPlayer.current.load(currentVerseIndex)
    }

    const askToPause = currentIsPaused => {
        audioPlayer.current.pause()
        if (currentIsPaused) {
            dispatch(updateIsPlaying(false))
        }
    }

    const onPlayerListen = currentTime => {
        const audioTime = getAudioTimeFromCurrentTime(songIndex, currentTime)

        // Verify that audio player is current before setting current time.
        if (isSongSelected && isSongLyric) {
            setAudioTime(audioTime)
            return true
        } else {
            logError(
                `Player ${songIndex} is no longer the current player!`,
                {
                    action: 'playCurrent',
                    label: `song: ${songIndex}, time: ${currentTime}`,
                },
            )
            return false
        }
    }

    const onPlayerLoaded = () => setIsLoadedToPromise(true)

    const onPlayerError = () => dispatchIsPlayingAfterPromise(false)

    useEffect(() => {
        // Ensure that player only promises to play once it's the lyric song.
        if (isSongLyric && isLoadedToPromise) {
            promiseToPlay()
        }
    }, [isSongLyric, isLoadedToPromise])

    useImperativeHandle(ref, () => ({
        askToPause,
        askToPlay,
    }))

    return (
        <AudioPlayerElement
            {...{
                ref: audioPlayer,
                songIndex,
                onPlayerListen,
                onPlayerLoaded,
                onPlayerError,
            }}
        />
    )
})

PlayerManager.propTypes = {
    songIndex: PropTypes.number.isRequired,
}

const PlayerManagerContainer = forwardRef((props, ref) => {
    const setRef = node => {
        ref.current = ref.current || {}
        ref.current[props.songIndex] = node
    }

    return (
        <PlayerManager
            {...{
                ref: setRef,
                ...props,
            }}
        />
    )
})

PlayerManagerContainer.propTypes = {
    songIndex: PropTypes.number.isRequired,
}

export default PlayerManagerContainer
