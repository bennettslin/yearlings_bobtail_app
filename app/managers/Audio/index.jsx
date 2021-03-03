// Manager for all audio players.
import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import getDidMountHoc from '../../components/DidMountHoc'
import AudioPlayer from './Player'
import { getSongNotLogueIndices } from '../../api/album/songs'
import { mapIsPlaying } from '../../redux/audio/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
} from '../../redux/selected/selector'

const AudioManager = forwardRef(({ didMount }, ref) => {
    const
        playerManagers = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex)

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
            /**
             * If playing a new song, pause the previously selected player
             * here and now. This ensures that only the player meant to be
             * played is ever playing.
             */
            if (selectedSongIndex !== songIndex) {
                getPlayerManager(selectedSongIndex).askToPause()
            }

            /**
             * Play the current player. If already playing, it will just set
             * the new verse.
             */
            getPlayerManager(songIndex).askToPlay({ verseIndex })

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
        </div>
    )
})

AudioManager.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(AudioManager)
