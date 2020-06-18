// Manager for audio players.
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import { updateSelectedStore } from '../../redux/selected/action'
import SongDispatcher from '../../dispatchers/Song'
import TimeVerseDispatcher from '../../dispatchers/TimeVerse'
import Player from './Player'
import { getSongNotLogueIndices } from '../../api/album/songs'
import {
    getNextSongIndex,
    getTimeInVerseStatus
} from './helper'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex
} from '../../redux/selected/selector'
import { mapAudioOptionIndex } from '../../redux/session/selector'

const PlayerManager = () => {
    const
        dispatch = useDispatch(),
        dispatchSong = useRef(),
        dispatchTimeVerse = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        audioOptionIndex = useSelector(mapAudioOptionIndex)

    const handleSongEnd = () => {
        const nextSongIndex = getNextSongIndex(
            selectedSongIndex,
            audioOptionIndex
        )

        // If repeating the song, just reset time and verse.
        if (nextSongIndex === selectedSongIndex) {
            dispatchTimeVerse.current()
            return true

        } else {
            dispatchSong.current({
                selectedSongIndex: nextSongIndex
            })
            return false
        }
    }

    const updateCurrentTime = currentTime => {
        const {
            isTimeInSelectedVerse,
            isTimeInNextVerse,
            nextVerseIndex,
            isEndOfSong
        } = getTimeInVerseStatus({
            currentTime,
            selectedSongIndex,
            selectedVerseIndex
        })

        // If current time is in selected verse, just update time.
        if (isTimeInSelectedVerse) {
            dispatch(updateSelectedStore({ selectedTime: currentTime }))

        // If it's in the next verse, update time and verse.
        } else if (isTimeInNextVerse) {
            dispatchTimeVerse.current({
                currentTime,
                nextVerseIndex
            })

        } else {
            /**
             * If time is after current verse but there is no next verse, then
             * this should mean we have reached the end of the song. If this is
             * not reflected by the time in verse status, then something weird
             * has happened. This should never get called, so fix the code if
             * it does!
             */
            if (!isEndOfSong) {
                logError({
                    log: `Time ${currentTime} and verse index ${selectedVerseIndex} are out of sync!`,
                    action: 'syncTimeAndVerse',
                    label: `song: ${selectedSongIndex}, verse: ${selectedVerseIndex}, time: ${currentTime}`
                })
            }

            return {
                songEnded: true,
                doRepeat: handleSongEnd()
            }
        }

        return false
    }

    return (
        <div className={cx(
            'AudioPlayerManager',
            'dNC'
        )}>
            {getSongNotLogueIndices().map(songIndex => (
                <Player
                    {...{
                        key: songIndex,
                        songIndex,
                        handleSongEnd,
                        updateCurrentTime
                    }}
                />
            ))}
            <SongDispatcher {...{ ref: dispatchSong }} />
            <TimeVerseDispatcher {...{ ref: dispatchTimeVerse }} />
        </div>
    )
}

export default PlayerManager
