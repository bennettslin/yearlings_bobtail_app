// Manager for audio players.
// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
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
import { mapIsPlaying } from '../../../redux/audio/selectors'
import {
    // getMapPlayerShouldRender
} from '../../../redux/players/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedTime
} from '../../../redux/selected/selectors'

// Kind of silly, but easiest approach for now.
const LOGUE_DUMMY_PLAYER = {
    promiseToPlay() {},
    askToPause() {}
}

const PlayerManager = forwardRef(({ handleSongEnd }, ref) => {
    const
        dispatch = useDispatch(),
        playerChildren = useRef(),
        dispatchPlayerCanPlayThrough = useRef(),
        dispatchTimeVerse = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        // playerShouldRender = useSelector(getMapPlayerShouldRender(songIndex)),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedTime = useSelector(mapSelectedTime)

    const toggleSelectedPlayer = nextIsPlaying => {
        /**
         * If play is being toggled on, ensure that selected player was able
         * to successfully play before storing play status in state.
         */

        // Pausing.
        if (!nextIsPlaying && isPlaying) {
            playerChildren.current[selectedSongIndex].askToPause()

        // Playing.
        } else if (nextIsPlaying && !isPlaying) {
            /**
             * Play is being toggled on, so don't set in store right away.
             * Pass callback and wait for successful return.
             */
            playerChildren.current[selectedSongIndex].promiseToPlay()
        }
    }

    const handleSelectPlayer = ({
        isPlayFromLogue,
        nextSongIndex

    }) => {
        // If playing from logue, begin playing only once player is selected.
        if (isPlaying || isPlayFromLogue) {
            /**
             * If already playing, begin playing newly selected player.
             */
            playerChildren.current[nextSongIndex].promiseToPlay()
        }
    }

    const updateCurrentTime = ({
        currentTime,
        currentSongIndex

    }) => {
        const {
            isTimeInSelectedVerse,
            isTimeInNextVerse,
            nextVerseIndex,
            isEndOfSong
        } = getTimeInVerseStatus({
            currentTime,
            currentSongIndex,
            selectedSongIndex,
            selectedVerseIndex,
            selectedTime
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
                handleSongEnd.current()

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

    const setRef = node => {
        if (node) {
            const {
                promiseToPlay,
                askToPause,
                songIndex
            } = node
            playerChildren.current = playerChildren.current || {}
            playerChildren.current[songIndex] = {
                promiseToPlay,
                askToPause
            }
        }
    }

    useImperativeHandle(ref, () => toggleSelectedPlayer)
    return (
        <div className={cx(
            'Players',
            'dNC'
        )}>
            <PlayerListener {...{ handleSelectPlayer }} />
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
            <PlayerDispatcher {...{ ref: dispatchPlayerCanPlayThrough }} />
            <TimeVerseDispatcher {...{ ref: dispatchTimeVerse }} />
        </div>
    )
})

PlayerManager.propTypes = {
    handleSongEnd: PropTypes.func.isRequired
}

export default PlayerManager
