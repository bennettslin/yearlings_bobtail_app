// Manager for individual audio player.
import React, {
    forwardRef, useEffect, useImperativeHandle, useRef, useState,
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
    logPlayPromiseSuccess,
    logPlayPromiseFailure,
    getShouldDispatchAfterPlayPromise,
} from './helper'
import AudioPlayerElement from '../Element'
import { updateIsPlaying } from '../../../redux/audio/action'
import { getMapIsSongLyric } from '../../../redux/lyric/selector'
import { getMapIsSongSelected } from '../../../redux/selected/selector'
import { updateCanPlayThroughForSong } from '../../../redux/players/action'
import { updateErrorMessage } from '../../../redux/error/action'
import { getMapPlayerCanPlayThrough } from '../../../redux/players/selector'

const PlayerManager = forwardRef(({
    songIndex,
    // handleSongEnd,
    // updateCurrentTime,

}, ref) => {
    const
        dispatch = useDispatch(),
        audioPlayer = useRef(),
        playerCanPlayThrough = useSelector(
            getMapPlayerCanPlayThrough(songIndex),
        ),
        isSongLyric = useSelector(getMapIsSongLyric(songIndex)),
        isSongSelected = useSelector(getMapIsSongSelected(songIndex)),
        [isLoadedToPromise, setIsLoadedToPromise] = useState(false),
        [isPromisingToPlay, setIsPromisingToPlay] = useState(false),
        [playFromTime, setPlayFromTime] = useState(0)

    const _dispatchIsPlayingAfterPromise = didPromiseSucceed => {
        if (getShouldDispatchAfterPlayPromise({
            didPromiseSucceed,
            isSongSelected,
        })) {
            // TODO: Temp log.
            logPlayer(`AudioPlayer ${songIndex} updated isPlaying to ${didPromiseSucceed ? 'true' : 'false'}.`)
            dispatch(updateIsPlaying(didPromiseSucceed))
        }
    }

    const promiseToPlay = () => {
        const
            playPromise = audioPlayer.current.play(),
            timePromisedToPlay = Date.now()

        /**
         * If no promise is returned, then the browser does not support the
         * return of a promise, and is already playing the audio element.
         */
        if (playPromise === undefined) {
            _dispatchIsPlayingAfterPromise(true)

        } else {
            setIsPromisingToPlay(true)

            playPromise
                .then(() => {
                    logPlayPromiseSuccess({
                        songIndex,
                        timePromisedToPlay,
                    })
                    _dispatchIsPlayingAfterPromise(true)
                })
                .catch(error => {
                    const errorMessage = `${error.name}: ${error.message}`
                    logPlayPromiseFailure({
                        songIndex,
                        errorMessage,
                        timePromisedToPlay,
                    })
                    dispatch(updateErrorMessage(errorMessage))
                    _dispatchIsPlayingAfterPromise(false)
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

    // Player only plays through direct user interaction.
    const askToPlay = time => {
        // If we're already preparing to play, just return.
        if (isLoadedToPromise || isPromisingToPlay) {
            logPlayer(`Ignoring subsequent ask to play ${songIndex}.`)
            return
        }

        /**
         * Set this in state for now, because current time of player will reset
         * after load.
         */
        setPlayFromTime(time)

        // Only play if currently paused.
        if (audioPlayer.current.getIsPaused()) {
            /**
             * This registers the user gesture token. This is needed by Safari,
             * and possibly other browsers in the future, for their measures to
             * prevent autoplay.
             */
            audioPlayer.current.load()
            setIsLoadedToPromise(true)

        // If currently playing, just set new time.
        } else {
            audioPlayer.current.setCurrentTime(time, true)
        }
    }

    const askToPause = ({ nextIsPaused } = {}) => {
        audioPlayer.current.pause()
        if (nextIsPaused) {
            dispatch(updateIsPlaying(false))
        }
    }

    const onLoadedMetadata = () => {
        // This is being called upon load before promise to play.
        if (playerCanPlayThrough) {
            // Set current time of player to time passed by audio manager.
            audioPlayer.current.setCurrentTime(playFromTime)

        // This is being called upon initial load.
        } else {
            dispatch(updateCanPlayThroughForSong(songIndex))
        }
    }

    useEffect(() => {
        // Ensure that player only plays once it's the lyric song.
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
                onLoadedMetadata,
            }}
        />
    )
})

PlayerManager.propTypes = {
    songIndex: PropTypes.number.isRequired,
    // handleSongEnd: PropTypes.func.isRequired,
    // updateCurrentTime: PropTypes.func.isRequired,
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
