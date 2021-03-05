// Component for individual audio element.
import React, {
    forwardRef, useContext, useImperativeHandle, useRef, useState,
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player'
import AudioPlayerContext from '../../../contexts/AudioPlayer'
import SongDispatcher from '../../../dispatchers/Song'
import VerseDispatcher from '../../../dispatchers/Verse'
import { getMp3 } from '../../../api/mp3'
import {
    getPlayerTimeForVerse,
    getAudioTimeForCurrentTime,
} from '../../../api/album/time'
import { getFormattedTime } from '../../../helpers/format'
import { updateCanPlayThrough } from '../../../redux/players/action'
import { mapCanPlayThrough } from '../../../redux/players/selector'
import { mapAudioOptionIndex } from '../../../redux/session/selector'
import { getCurrentIndicesForTime, logLoaded } from './helper'
import { AUDIO_OPTIONS, CONTINUE } from '../../../constants/options'

const AudioPlayerElement = forwardRef(({
    onPlayerLoaded,
    onPlayerError,
}, ref) => {
    const
        { setAudioTime } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        audioPlayerElement = useRef(),
        dispatchSong = useRef(),
        dispatchVerse = useRef(),
        canPlayThrough = useSelector(mapCanPlayThrough),
        audioOptionIndex = useSelector(mapAudioOptionIndex),
        [loadStartTime, setLoadStartTime] = useState(null)

    const getIsPaused = () => audioPlayerElement.current.paused
    const getCurrentSong = () => audioPlayerElement.current.songIndex
    const getCurrentVerse = () => audioPlayerElement.current.verseIndex

    const load = (currentSongIndex, currentVerseIndex) => {
        setCurrentIndices(currentSongIndex, currentVerseIndex, true)

        // Only load if needed.
        if (getIsPaused()) {
            setLoadStartTime(Date.now())
            logPlayer(`Player loading\u2026`)
            audioPlayerElement.current.load()
        }
    }

    const play = () => {
        logPlayer(`Player promising to play\u2026`)
        return audioPlayerElement.current.play()
    }

    const pause = () => {
        if (!getIsPaused()) {
            logPlayer(`Player paused.`)
            audioPlayerElement.current.pause()
        }
    }

    const setCurrentIndices = (
        currentSongIndex,
        currentVerseIndex,
        shouldUpdateCurrentTime,
    ) => {
        audioPlayerElement.current.songIndex = currentSongIndex
        audioPlayerElement.current.verseIndex = currentVerseIndex

        if (shouldUpdateCurrentTime) {
            setCurrentTime()
        }
    }

    const setCurrentTime = () => {
        const
            currentTime = getPlayerTimeForVerse(
                getCurrentSong(),
                getCurrentVerse(),
            ),
            audioTime = getAudioTimeForCurrentTime(
                getCurrentSong(),
                currentTime,
            )
        logPlayer(`Player set to audio time ${getFormattedTime(audioTime)}, current time ${getFormattedTime(currentTime)}.`)
        audioPlayerElement.current.currentTime = currentTime
    }

    const onLoadedMetadata = () => {
        // This is being called upon load before promise to play.
        if (canPlayThrough) {
            logLoaded(loadStartTime)
            setLoadStartTime(null)

            // Set current time of player, since it was reset by load.

            setCurrentTime()

            // Tell player manager it can now promise to play.
            onPlayerLoaded()

        // This is being called upon initial load.
        } else {
            /**
             * This was originally dispatched from onCanPlayThrough, but
             * Firefox and Safari don't support it.
             */
            dispatch(updateCanPlayThrough(true))
        }
    }

    const onListen = currentTime => {
        const {
            currentSongIndex,
            currentVerseIndex,
            shouldUpdateCurrentTime,
        } = getCurrentIndicesForTime({
            songIndex: getCurrentSong(),
            verseIndex: getCurrentVerse(),
            time: currentTime,
            audioOptionIndex,
        }) || {}

        // Player is out of sync, so pause and tell player manager.
        if (isNaN(currentSongIndex) && isNaN(currentVerseIndex)) {
            pause()
            onPlayerError()
            return
        }

        // Tell app the new current time.
        setAudioTime(getAudioTimeForCurrentTime(currentSongIndex, currentTime))

        if (
            // We've changed verses.
            currentSongIndex !== getCurrentSong() ||
            currentVerseIndex !== getCurrentVerse()
        ) {
            /**
             * We're in a different verse of the same song. It doesn't make a
             * difference whether we're advancing to the next verse, or we're
             * repeating the song by returning to the first verse.
             */
            if (currentSongIndex === getCurrentSong()) {
                dispatchVerse.current({
                    verseIndex: currentVerseIndex,
                    fromPlayerListen: true,
                })

            // We're advancing to the next song.
            } else {
                dispatchSong.current({
                    selectedSongIndex: currentSongIndex,
                    fromPlayerContinue: true,
                })
            }

            // Update the player's current song and verse, and time if needed.
            setCurrentIndices(
                currentSongIndex,
                currentVerseIndex,
                shouldUpdateCurrentTime,
            )
        }
    }

    const onEnded = () => {
        logPlayer(`Player ended itself.`)

        // Advance to epilogue.
        if (AUDIO_OPTIONS[audioOptionIndex] === CONTINUE) {
            dispatchSong.current({
                selectedSongIndex: getCurrentSong() + 1,
                fromPlayerEnd: true,
            })

        // Treat as a song repeat.
        } else {
            dispatchVerse.current({
                fromPlayerEnd: true,
            })
        }
    }

    const setRef = node => {
        audioPlayerElement.current = node?.audioEl?.current
    }

    useImperativeHandle(ref, () => ({
        load,
        play,
        pause,
    }))

    return (
        <>
            <ReactAudioPlayer
                {...{
                    ref: setRef,
                    listenInterval: 50,
                    onLoadedMetadata,
                    onListen,
                    onEnded,
                    src: getMp3(),
                }}
            />
            <SongDispatcher {...{ ref: dispatchSong }} />
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </>
    )
})

AudioPlayerElement.propTypes = {
    onPlayerLoaded: PropTypes.func.isRequired,
    onPlayerError: PropTypes.func.isRequired,
}

export default AudioPlayerElement
