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

const AudioPlayerElement = forwardRef(({ songIndex }, ref) => {
    const
        { setSelectedPlayerTime } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        audioPlayerElement = useRef(),
        dispatchSong = useRef(),
        dispatchVerse = useRef(),
        playerCanPlayThrough = useSelector(
            getMapPlayerCanPlayThrough(songIndex),
        )

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

    const setCurrentVerse = verseIndex => {
        audioPlayerElement.current.verseIndex = verseIndex
        logPlayer(`Player ${songIndex} set to verse ${verseIndex}.`)

        /**
         * If player is already playing, set current time here and now.
         * Otherwise, wait for player to load first.
         */
        if (!getIsPaused()) {
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
            <SongDispatcher {...{ ref: dispatchSong }} />
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </>
    )
})

AudioPlayerElement.propTypes = {
    songIndex: PropTypes.number.isRequired,
}

export default AudioPlayerElement

// const handleSongEnd = () => {
//     const nextSongIndex = getNextSongIndex(
//         selectedSongIndex,
//         audioOptionIndex,
//     )

//     // If repeating the song, just reset time and verse.
//     if (nextSongIndex === selectedSongIndex) {
//         dispatchVerse.current({ fromPlayer: true })
//         return true

//     } else {
//         dispatchSong.current({
//             selectedSongIndex: nextSongIndex,
//         })
//         return false
//     }
// }

// const updateCurrentTime = currentTime => {
//     const {
//         isTimeInSelectedVerse,
//         isTimeInNextVerse,
//         nextVerseIndex,
//         isEndOfSong,
//     } = getTimeInVerseStatus({
//         currentTime,
//         selectedSongIndex,
//         selectedVerseIndex,
//     })

//     if (isTimeInSelectedVerse || isTimeInNextVerse) {
//         // Update time if in selected verse or next verse.
//         setSelectedPlayerTime(currentTime)

//         // If in next verse, also select next verse.
//         if (isTimeInNextVerse) {
//             dispatchVerse.current({
//                 verseIndex: nextVerseIndex,
//                 fromPlayer: true,
//             })
//         }

//     } else {
//         /**
//          * If time is after current verse but there is no next verse, then
//          * this should mean we have reached the end of the song. If this is
//          * not reflected by the time in verse status, then something weird
//          * has happened. This should never get called, so fix the code if
//          * it does!
//          */
//         if (!isEndOfSong) {
//             logError(
//                 `Time ${currentTime} and verse index ${selectedVerseIndex} are out of sync!`,
//                 {
//                     action: 'sync',
//                     label: `song: ${selectedSongIndex}, verse: ${selectedVerseIndex}, time: ${currentTime}`,
//                 },
//             )
//         }

//         return {
//             songEnded: true,
//             doRepeat: handleSongEnd(),
//         }
//     }

//     return false
// }
