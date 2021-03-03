// Component for individual audio element.
import React, {
    forwardRef, useContext, useImperativeHandle, useRef,
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
import { getVerseForTimeFromListen } from './helper'
import { AUDIO_OPTIONS, CONTINUE } from '../../../constants/options'

const AudioPlayerElement = forwardRef(({
    songIndex,
    onSyncError,
}, ref) => {
    const
        { setSelectedPlayerTime } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        audioPlayerElement = useRef(),
        dispatchSong = useRef(),
        dispatchVerse = useRef(),
        playerCanPlayThrough = useSelector(
            getMapPlayerCanPlayThrough(songIndex),
        ),
        audioOptionIndex = useSelector(mapAudioOptionIndex)

    const getCurrentVerse = () => audioPlayerElement.current.verseIndex

    const getIsPaused = () => audioPlayerElement.current.paused

    const load = () => audioPlayerElement.current.load()

    const play = () => {
        logPlayer(`Promising to play ${songIndex}\u2026`)
        return audioPlayerElement.current.play()
    }

    const pause = () => {
        if (!getIsPaused()) {
            audioPlayerElement.current.pause()
            logPlayer(`Player ${songIndex} paused.`)
        }
    }

    const setCurrentTime = uponLoad => {
        audioPlayerElement.current.currentTime = getStartTimeForVerse(songIndex, audioPlayerElement.current.verseIndex)
        logPlayer(`Player ${songIndex} ${uponLoad ? 'loaded at' : 'updated to'} ${getFormattedTime(audioPlayerElement.current.currentTime)}.`)
    }

    const setCurrentVerse = (verseIndex, fromListen) => {
        audioPlayerElement.current.verseIndex = verseIndex

        logPlayer(`Player ${songIndex} set to verse ${verseIndex} ${fromListen ? 'from listen' : 'upon load'}.`)

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
            // Set current time of player, since it was reset by load.
            setCurrentTime(true)

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
        setSelectedPlayerTime(currentTime)

        const nextVerseIndex = getVerseForTimeFromListen({
            currentTime,
            songIndex,
            verseIndex: getCurrentVerse(),
        })

        // Player is out of sync, so pause and tell player manager.
        if (nextVerseIndex === null) {
            pause()
            onSyncError()

        // It's now the next verse.
        } else if (nextVerseIndex > getCurrentVerse()) {
            // Update the player's current verse.
            setCurrentVerse(nextVerseIndex, true)

            // Dispatch the next verse.
            dispatchVerse.current({
                verseIndex: nextVerseIndex,
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
        getIsPaused,
        load,
        play,
        pause,
        setCurrentVerse,
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
    onSyncError: PropTypes.func.isRequired,
}

export default AudioPlayerElement
