// Manager for audio players.
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { updateSelectedStore } from '../../../redux/selected/action'
import PlayerDispatcher from './Dispatcher'
import PlayerListener from './Listener'
import TimeVerseDispatcher from '../../../dispatchers/TimeVerse'
import Player from './Player'
import { getSongNotLogueIndices } from '../../../api/album/songs'
import { getTimeInVerseStatus } from './helper'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex
} from '../../../redux/selected/selectors'

const PlayerManager = ({ handleSongEnd }) => {
    const
        dispatch = useDispatch(),
        playerChildren = useRef(),
        dispatchTimeVerse = useRef(),
        _dispatchPlayerCanPlayThrough = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex)

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
            playerChildren.current[selectedSongIndex].askToPause()
        }
    }

    const dispatchPlayerCanPlayThrough = songIndex => {
        _dispatchPlayerCanPlayThrough.current(songIndex)
    }

    const setRef = node => {
        if (node) {
            const {
                askToPause,
                songIndex
            } = node
            playerChildren.current = playerChildren.current || {}
            playerChildren.current[songIndex] = {
                askToPause
            }
        }
    }

    return (
        <div className={cx(
            'Players',
            'dNC'
        )}>
            <PlayerListener />
            {getSongNotLogueIndices().map(songIndex => (
                <Player
                    {...{
                        key: songIndex,
                        ref: setRef,
                        songIndex,
                        updateCurrentTime,
                        handleSongEnd,
                        dispatchPlayerCanPlayThrough
                    }}
                />
            ))}
            <PlayerDispatcher {...{ ref: _dispatchPlayerCanPlayThrough }} />
            <TimeVerseDispatcher {...{ ref: dispatchTimeVerse }} />
        </div>
    )
}

PlayerManager.propTypes = {
    handleSongEnd: PropTypes.func.isRequired
}

export default PlayerManager
