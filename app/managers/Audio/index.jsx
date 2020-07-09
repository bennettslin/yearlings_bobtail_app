// Manager for audio players.
import React, { memo, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import SongDispatcher from '../../dispatchers/Song'
import VerseDispatcher from '../../dispatchers/Verse'
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

const AudioManager = ({ setPlayerTime }) => {
    const
        dispatchSong = useRef(),
        dispatchVerse = useRef(),
        [didMount, setDidMount] = useState(false),
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
            dispatchVerse.current({ fromPlayer: true })
            return true

        } else {
            dispatchSong.current({
                selectedSongIndex: nextSongIndex
            })
            return false
        }
    }

    const updateCurrentTime = ({
        currentTime,
        fromListen

    }) => {
        if (!fromListen) {
            // If not from listen, just set player time and return.
            setPlayerTime(currentTime)
            return
        }

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

        if (isTimeInSelectedVerse || isTimeInNextVerse) {
            // Update time if in selected verse or next verse.
            setPlayerTime(currentTime)

            // If in next verse, also select next verse.
            if (isTimeInNextVerse) {
                dispatchVerse.current({
                    verseIndex: nextVerseIndex,
                    fromPlayer: true
                })
            }

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

    useEffect(() => {
        setDidMount(true)
    }, [])

    return didMount && (
        <div className={cx(
            'AudioManager',
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
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </div>
    )
}

AudioManager.propTypes = {
    setPlayerTime: PropTypes.func.isRequired
}

export default memo(AudioManager)
