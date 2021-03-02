// Hidden component to wrap an audio DOM element.
import React, {
    forwardRef, useImperativeHandle, useRef, useState,
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player'
import {
    logPlayPromiseSuccess,
    logPlayPromiseFailure,
} from './helper'
import { updateIsPlaying } from '../../../redux/audio/action'
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
        isSongSelected = useSelector(getMapIsSongSelected(songIndex)),
        [isPromisingToPlay, setIsPromisingToPlay] = useState(false)

    const _dispatchIsPlayingAfterPromise = nextIsPlaying => {
        if (
            nextIsPlaying ||
            (
                /**
                 * Triggered by player failure, so only dispatch if player is
                 * selected.
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
    }

    // Player only plays through direct user interaction.
    const askToPlay = time => {
        // If there's already a promise to play, just return.
        if (isPromisingToPlay) {
            logPlayer(`Ignoring subsequent promise to play ${songIndex}.`)
            return
        }

        // Only play if currently paused.
        if (audioPlayerElement.current.paused) {
            /**
             * This registers the user gesture token. This is needed by Safari,
             * and possibly other browsers in the future, for their measures to
             * prevent autoplay.
             */
            audioPlayerElement.current.load()
            promiseToPlay()

        // If currently playing, just set new time.
        } else {
            logPlayer(`Already playing ${songIndex}.`)
        }

        audioPlayerElement.current.currentTime = time
    }

    const askToPause = () => {
        if (audioPlayerElement.current.paused) {
            return
        }

        audioPlayerElement.current.pause()
        logPlayer(`Player ${songIndex} paused.`)
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
                askToPlay(0)
            }
        }
    }

    const onEnded = () => {
        logPlayer(`Player for ${songIndex} ended itself.`)
        // If this returns true, repeat song.
        if (handleSongEnd()) {
            askToPlay(0)
        }
    }

    const setRef = node => {
        if (node) {
            audioPlayerElement.current = node.audioEl.current
        }
    }

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
