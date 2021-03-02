// Manager for all audio players.
import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import getDidMountHoc from '../../components/DidMountHoc'
import SongDispatcher from '../../dispatchers/Song'
import VerseDispatcher from '../../dispatchers/Verse'
import AudioPlayer from './Player'
import { getSongNotLogueIndices } from '../../api/album/songs'
import { getStartTimeForVerse } from '../../api/album/time'
import { mapIsPlaying } from '../../redux/audio/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
} from '../../redux/selected/selector'
import { logPlayer } from '../../utils/logger'

const AudioManager = forwardRef(({ didMount }, ref) => {
    const
        playerManagers = useRef(),
        dispatchSong = useRef(),
        dispatchVerse = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex)

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

    const getPlayerManager = songIndex => (
        playerManagers.current[songIndex] ||
        {
            // Ensure these calls don't break for logues.
            askToPause() {},
            askToPlay() {},
        }
    )

    const callAudioManager = ({
        isPlaying: nextIsPlaying = isPlaying,
        songIndex = selectedSongIndex,
        verseIndex = selectedVerseIndex,

    } = {}) => {
        // If being called to play...
        if (nextIsPlaying) {
            // TODO: Temp log.
            logPlayer(`Calling with isPlaying: ${nextIsPlaying}, songIndex: ${songIndex}, verseIndex: ${verseIndex}.`)

            /**
             * If playing a new song, pause the previously selected player
             * here. This ensures that only the player meant to be play is ever
             * playing.
             */
            if (selectedSongIndex !== songIndex) {
                getPlayerManager(selectedSongIndex).askToPause()
            }

            // Play the current player.
            getPlayerManager(songIndex).askToPlay(getStartTimeForVerse(
                songIndex,
                verseIndex,
            ))

        // If being called to pause...
        } else {
            // Pause the current player.
            getPlayerManager(songIndex).askToPause({ nextIsPaused: true })
        }
    }

    useImperativeHandle(ref, () => ({
        callAudioManager,
    }))

    return didMount && (
        <div className={cx(
            'AudioManager',
            'dNC',
        )}>
            {getSongNotLogueIndices().map(songIndex => (
                <AudioPlayer
                    {...{
                        key: songIndex,
                        ref: playerManagers,
                        songIndex,
                    }}
                />
            ))}
            <SongDispatcher {...{ ref: dispatchSong }} />
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </div>
    )
})

AudioManager.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(AudioManager)
