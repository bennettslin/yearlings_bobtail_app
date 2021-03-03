// Component for individual audio element.
import React, {
    forwardRef, useContext, useImperativeHandle, useRef, useState,
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player'
import SongDispatcher from '../../../dispatchers/Song'
import VerseDispatcher from '../../../dispatchers/Verse'
import { getMp3ForSong } from '../../../api/mp3'
import { getStartTimeForVerse } from '../../../api/album/time'
import AudioPlayerContext from '../../../contexts/AudioPlayer'
import { getFormattedTime } from '../../../helpers/format'
import { updateCanPlayThroughForSong } from '../../../redux/players/action'
import { getMapPlayerCanPlayThrough } from '../../../redux/players/selector'
import { mapAudioOptionIndex } from '../../../redux/session/selector'
import { getVerseForTimeFromListen, logLoaded } from './helper'
import { AUDIO_OPTIONS, CONTINUE } from '../../../constants/options'

const AudioPlayerElement = forwardRef(({
    songIndex,
    onPlayerLoaded,
    onPlayerError,
}, ref) => {
    const
        { setCurrentPlayerTime } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        audioPlayerElement = useRef(),
        dispatchSong = useRef(),
        dispatchVerse = useRef(),
        playerCanPlayThrough = useSelector(
            getMapPlayerCanPlayThrough(songIndex),
        ),
        audioOptionIndex = useSelector(mapAudioOptionIndex),
        [loadStartTime, setLoadStartTime] = useState(null)

    const getCurrentVerse = () => audioPlayerElement.current.verseIndex

    const getIsPaused = () => audioPlayerElement.current.paused

    const load = currentVerseIndex => {
        setCurrentVerse(currentVerseIndex)

        // Only load if needed.
        if (getIsPaused()) {
            setLoadStartTime(Date.now())
            audioPlayerElement.current.load()
            logPlayer(`Player ${songIndex} loading\u2026`)
        }
    }

    const play = () => {
        logPlayer(`Player ${songIndex} promising to play\u2026`)
        return audioPlayerElement.current.play()
    }

    const pause = () => {
        // Only pause if needed.
        if (!getIsPaused()) {
            audioPlayerElement.current.pause()
            logPlayer(`Player ${songIndex} paused.`)
        }
    }

    const setCurrentTime = uponLoad => {
        audioPlayerElement.current.currentTime = getStartTimeForVerse(songIndex, audioPlayerElement.current.verseIndex)
        logPlayer(`Player ${songIndex} ${uponLoad ? 'set' : 'updated'} to ${getFormattedTime(audioPlayerElement.current.currentTime)}.`)
    }

    const setCurrentVerse = (currentVerseIndex, fromListen) => {
        audioPlayerElement.current.verseIndex = currentVerseIndex
        /**
         * If player is already playing, set current time here and now.
         * Otherwise, wait for player to load first.
         */
        if (!getIsPaused() && !fromListen) {
            setCurrentTime()
        }
    }

    const onLoadedMetadata = () => {
        // This is being called upon load before promise to play.
        if (playerCanPlayThrough) {
            logLoaded({
                songIndex,
                loadStartTime,
            })
            setLoadStartTime(null)

            // Set current time of player, since it was reset by load.
            setCurrentTime(true)

            // Tell player manager it can now promise to play.
            onPlayerLoaded()

        // This is being called upon initial load.
        } else {
            /**
             * This was originally dispatched from onCanPlayThrough, but
             * Firefox and Safari don't support it.
             */
            dispatch(updateCanPlayThroughForSong(songIndex))
        }
    }

    const onListen = currentTime => {
        // Update current player time displayed in song banner.
        setCurrentPlayerTime(currentTime)

        const currentVerseIndex = getVerseForTimeFromListen({
            songIndex,
            currentVerseIndex: getCurrentVerse(),
            currentTime,
        })

        // Player is out of sync, so pause and tell player manager.
        if (currentVerseIndex === null) {
            pause()
            onPlayerError()

        // It's now the next verse.
        } else if (currentVerseIndex > getCurrentVerse()) {
            // Update the player's current verse.
            setCurrentVerse(currentVerseIndex, true)

            // Dispatch the next verse.
            dispatchVerse.current({
                verseIndex: currentVerseIndex,
                fromPlayerListen: true,
            })
        }
    }

    const onEnded = () => {
        logPlayer(`Player for ${songIndex} ended itself.`)

        // Advance to next song.
        if (AUDIO_OPTIONS[audioOptionIndex] === CONTINUE) {
            dispatchSong.current({
                selectedSongIndex: songIndex + 1,
                fromPlayerContinue: true,
            })

        // Repeat current song.
        } else {
            dispatchVerse.current({ fromPlayerRepeat: true })
        }
    }

    const setRef = node => {
        if (node) {
            audioPlayerElement.current = node.audioEl.current
        }
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
                    src: getMp3ForSong(songIndex),
                }}
            />
            <SongDispatcher {...{ ref: dispatchSong }} />
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </>
    )
})

AudioPlayerElement.propTypes = {
    songIndex: PropTypes.number.isRequired,
    onPlayerLoaded: PropTypes.func.isRequired,
    onPlayerError: PropTypes.func.isRequired,
}

export default AudioPlayerElement
