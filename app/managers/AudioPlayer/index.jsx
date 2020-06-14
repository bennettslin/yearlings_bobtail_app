// Manager for audio players.
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import { updateSelectedStore } from '../../redux/selected/action'
import SongDispatcher from '../../handlers/Song/Dispatcher'
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
} from '../../redux/selected/selectors'
import { mapAudioOptionIndex } from '../../redux/session/selectors'

const PlayerManager = () => {
    const
        dispatch = useDispatch(),
        dispatchSong = useRef(),
        dispatchTimeVerse = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        audioOptionIndex = useSelector(mapAudioOptionIndex)

    const handleSongEnd = () => {
        dispatchSong.current({
            selectedSongIndex: getNextSongIndex(
                selectedSongIndex,
                audioOptionIndex
            )
        })
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

        // If current time is in selected verse, just update selected time.
        if (isTimeInSelectedVerse) {
            dispatch(updateSelectedStore({ selectedTime: currentTime }))

        // Otherwise, update verse and time.
        } else if (isTimeInNextVerse) {
            dispatchTimeVerse.current({
                currentTime,
                nextVerseIndex
            })

        } else {
            /**
             * If time is after current verse but there is no next verse, then
             * we have reached the end of the song.
             */
            if (isEndOfSong) {
                logPlayer({
                    log: 'Updated time will end player.',
                    action: 'endByUpdatedTime',
                    label: selectedSongIndex
                })
                handleSongEnd()

            /**
             * Something weird has happened, so we'll reset the player. This
             * should never get called, so fix the code if it does!
             */
            } else {
                logError({
                    log: `Time ${currentTime} and verse index ${selectedVerseIndex} are out of sync!`,
                    action: 'syncTimeAndVerse',
                    label: `song: ${selectedSongIndex}, verse: ${selectedVerseIndex}, time: ${currentTime}`
                })
            }

            /**
             * Tell the player to end either way. If it ended because the song
             * ended, we will still call this even though it will be called
             * again later, to ensure that the player will not end itself in
             * the interim.
             */
            return true
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
