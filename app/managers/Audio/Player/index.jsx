// Hidden component to wrap an audio DOM element.
import React, {
    forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState,
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player'
import {
    logPlayPromiseSuccess,
    logPlayPromiseFailure,
} from './helper'
import AudioPlayerContext from '../../../contexts/AudioPlayer'
import { getFormattedTime } from '../../../helpers/format'
import { updateIsPlaying } from '../../../redux/audio/action'
import { getMapIsSongLyric } from '../../../redux/lyric/selector'
import { getMapIsSongSelected } from '../../../redux/selected/selector'
import { getMp3ForSong } from '../../../api/mp3'
import { updateCanPlayThroughForSong } from '../../../redux/players/action'
import { updateErrorMessage } from '../../../redux/error/action'
import { getMapPlayerCanPlayThrough } from '../../../redux/players/selector'

const Player = forwardRef(({
    songIndex,
    // handleSongEnd,
    // updateCurrentTime,

}, ref) => {
    const
        { setSelectedPlayerTime } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        audioPlayerElement = useRef(),
        playerCanPlayThrough = useSelector(
            getMapPlayerCanPlayThrough(songIndex),
        ),
        isSongLyric = useSelector(getMapIsSongLyric(songIndex)),
        isSongSelected = useSelector(getMapIsSongSelected(songIndex)),
        [isLoadedToPromise, setIsLoadedToPromise] = useState(false),
        [isPromisingToPlay, setIsPromisingToPlay] = useState(false),
        [playFromTime, setPlayFromTime] = useState(0)

    const _dispatchIsPlayingAfterPromise = nextIsPlaying => {
        if (
            nextIsPlaying ||
            (
                /**
                 * Triggered by player failure, so only dispatch if player is
                 * the one selected.
                 */
                !nextIsPlaying && isSongSelected
            )
        ) {
            // TODO: Temp log.
            logPlayer(`Player ${songIndex} updated isPlaying to ${nextIsPlaying ? 'true' : 'false'}.`)
            dispatch(updateIsPlaying(nextIsPlaying))
        }
    }

    const promiseToPlay = () => {
        logPlayer(`Promising to play ${songIndex}\u2026`)

        const
            playPromise = audioPlayerElement.current.play(),
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
        if (audioPlayerElement.current.paused) {
            /**
             * This registers the user gesture token. This is needed by Safari,
             * and possibly other browsers in the future, for their measures to
             * prevent autoplay.
             */
            audioPlayerElement.current.load()
            setIsLoadedToPromise(true)

        // If currently playing, just set new time.
        } else {
            logPlayer(`Player ${songIndex} updated to ${getFormattedTime(time)}.`)
            audioPlayerElement.current.currentTime = time
        }
    }

    const askToPause = () => {
        if (audioPlayerElement.current.paused) {
            return
        }

        audioPlayerElement.current.pause()
        logPlayer(`Player ${songIndex} paused.`)
    }

    const onLoadedMetadata = () => {
        // This is being called upon load before promise to play.
        if (playerCanPlayThrough) {
            // Set current time of player to time passed by audio manager.
            audioPlayerElement.current.currentTime = playFromTime
            logPlayer(`Player ${songIndex} loaded at ${getFormattedTime(audioPlayerElement.current.currentTime)}.`)

        // This is being called upon initial load.
        } else {
            dispatch(updateCanPlayThroughForSong(songIndex))
        }
    }

    const onListen = time => {
        // Update selected player time displayed in song banner.
        setSelectedPlayerTime(time)

        // if (isSongSelected) {
        //     // If this returns true, repeat song.
        //     const {
        //         songEnded,
        //         doRepeat,
        //     } = updateCurrentTime(time)

        //     if (songEnded) {
        //         logPlayer(`Player ${songIndex} reached end of final verse.`)
        //     }

        //     if (doRepeat) {
        //         askToPlay(0)
        //     }
        // }
    }

    const onEnded = () => {
        logPlayer(`Player for ${songIndex} ended itself.`)
        // If this returns true, repeat song.
        // if (handleSongEnd()) {
        //     askToPlay(0)
        // }
    }

    const setRef = node => {
        if (node) {
            audioPlayerElement.current = node.audioEl.current
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
        <ReactAudioPlayer
            {...{
                ref: setRef,
                listenInterval: 50,

                /**
                 * This was originally onCanPlayThrough, but Firefox and Safari
                 * don't support it.
                 */
                onLoadedMetadata,
                onListen,
                onEnded,
                src: getMp3ForSong(songIndex),
            }}
        />
    )
})

Player.propTypes = {
    songIndex: PropTypes.number.isRequired,
    // handleSongEnd: PropTypes.func.isRequired,
    // updateCurrentTime: PropTypes.func.isRequired,
}

const PlayerContainer = forwardRef((props, ref) => {
    const setRef = node => {
        ref.current = ref.current || {}
        ref.current[props.songIndex] = node
    }

    return (
        <Player
            {...{
                ref: setRef,
                ...props,
            }}
        />
    )
})

PlayerContainer.propTypes = {
    songIndex: PropTypes.number.isRequired,
}

export default PlayerContainer
