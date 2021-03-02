// Hidden component to wrap an audio DOM element.
import React, {
    forwardRef, useImperativeHandle, useEffect, useRef, useState,
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player'
import {
    logPlayPromiseSuccess,
    logPlayPromiseFailure,
} from './helper'
import { updateIsPlaying } from '../../../redux/audio/action'
import { mapIsPlaying } from '../../../redux/audio/selector'
import { getMapIsSongSelected } from '../../../redux/selected/selector'
import { getMp3ForSong } from '../../../api/mp3'
import { updateCanPlayThroughForSong } from '../../../redux/players/action'
import { updateErrorMessage } from '../../../redux/error/action'

const Player = forwardRef(({
    songIndex,
    handleSongEnd,
    updateCurrentTime,

}, ref) => {
    const
        dispatch = useDispatch(),
        audioPlayerElement = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        isSongSelected = useSelector(getMapIsSongSelected(songIndex)),
        [isPromisingToPlay, setIsPromisingToPlay] = useState(false)

    const _dispatchIsPlayingIfSelected = nextIsPlaying => {
        if (
            nextIsPlaying ||
            (
                /**
                 * Triggered by player pause or failure, so only dispatch if
                 * player is selected.
                 */
                !nextIsPlaying && isSongSelected
            )
        ) {
            logPlayer(`Player ${songIndex} updated isPlaying to ${nextIsPlaying ? 'true' : 'false'}.`)
            dispatch(updateIsPlaying(nextIsPlaying))
        }
    }

    const _pause = () => {
        if (audioPlayerElement.current.paused) {
            return
        }

        audioPlayerElement.current.pause()
        logPlayer(`Player ${songIndex} paused.`)
        _dispatchIsPlayingIfSelected(false)
    }

    // Player only plays through direct user interaction.
    const playFromTime = time => {
        // If there's already a promise to play, just return.
        if (isPromisingToPlay) {
            logPlayer(`Ignoring subsequent promise to play ${songIndex}.`)
            return
        }

        audioPlayerElement.current.currentTime = time

        // If already playing, just set current time and return.
        if (!audioPlayerElement.current.paused) {
            logPlayer(`Already playing ${songIndex}.`)
            return
        }

        logPlayer(`Promising to play ${songIndex}\u2026`)
        const
            playPromise = audioPlayerElement.current.play(),
            timePromisedToPlay = Date.now()

        /**
         * If no promise is returned, then the browser does not support the
         * return of a promise, and is already playing the audio element.
         */
        if (playPromise === undefined) {
            _dispatchIsPlayingIfSelected(true)

        } else {
            setIsPromisingToPlay(true)

            playPromise
                .then(() => {
                    logPlayPromiseSuccess({
                        songIndex,
                        timePromisedToPlay,
                    })
                    _dispatchIsPlayingIfSelected(true)
                })
                .catch(error => {
                    const errorMessage = `${error.name}: ${error.message}`
                    logPlayPromiseFailure({
                        songIndex,
                        errorMessage,
                        timePromisedToPlay,
                    })
                    dispatch(updateErrorMessage(errorMessage))
                    _dispatchIsPlayingIfSelected(false)
                })
                .finally(() => {
                    setIsPromisingToPlay(false)
                })
        }
    }

    const onCanPlayThrough = () => {
        dispatch(updateCanPlayThroughForSong(songIndex))
    }

    const onListen = currentTime => {
        if (isSongSelected) {
            // If this returns true, repeat song.
            const {
                songEnded,
                doRepeat,
            } = updateCurrentTime(currentTime)

            if (songEnded) {
                logPlayer(`Player for ${songIndex} reached end of final verse.`)
            }

            if (doRepeat) {
                playFromTime(0)
            }
        }
    }

    const onEnded = () => {
        logPlayer(`Player for ${songIndex} ended itself.`)
        // If this returns true, repeat song.
        if (handleSongEnd()) {
            playFromTime(0)
        }
    }

    const setRef = node => {
        if (node) {
            audioPlayerElement.current = node.audioEl.current
        }
    }

    useEffect(() => {
        // Pause if audio is no longer playing.
        if (!isSongSelected) {
            _pause()
        }
    }, [isSongSelected])

    useEffect(() => {
        // Pause if song is no longer selected.
        if (!isPlaying) {
            _pause()
        }
    }, [isPlaying])

    useImperativeHandle(ref, () => ({
        playFromTime,
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
                onLoadedMetadata: onCanPlayThrough,
                onListen,
                onEnded,
                src: getMp3ForSong(songIndex),
            }}
        />
    )
})

Player.propTypes = {
    songIndex: PropTypes.number.isRequired,
    handleSongEnd: PropTypes.func.isRequired,
    updateCurrentTime: PropTypes.func.isRequired,
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
