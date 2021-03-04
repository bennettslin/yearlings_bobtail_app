// Manager for all audio players.
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import getDidMountHoc from '../../components/DidMountHoc'
import AudioPlayer from './Player'
import { mapIsPlaying } from '../../redux/audio/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
} from '../../redux/selected/selector'

const AudioManager = forwardRef(({ didMount }, ref) => {
    const
        audioPlayer = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex)

    const getAudioPlayer = () => (
        audioPlayer.current ||
        {
            // Ensure these calls don't break for logues.
            askToPause() {},
            askToPlay() {},
        }
    )

    const callAudioManager = ({
        isPlaying: currentIsPlaying = isPlaying,
        songIndex: currentSongIndex = selectedSongIndex,
        verseIndex: currentVerseIndex = selectedVerseIndex,

    } = {}) => {
        // If being called to play...
        if (currentIsPlaying) {
            /**
             * If playing a new song, pause the previously selected player
             * here and now. This ensures that only the player meant to be
             * played is ever playing.
             */
            // if (currentSongIndex !== selectedSongIndex) {
            //     getAudioPlayer().askToPause()
            // }

            /**
             * Play the current player. If already playing, it will just set
             * the new song and verse.
             */
            getAudioPlayer().askToPlay(currentSongIndex, currentVerseIndex)

        // If being called to pause...
        } else {
            // Pause the current player.
            getAudioPlayer().askToPause(true)
        }
    }

    useImperativeHandle(ref, () => ({ callAudioManager }))

    return didMount && (
        <div className={cx(
            'AudioManager',
            'dNC',
        )}>
            <AudioPlayer {...{ ref: audioPlayer }} />
        </div>
    )
})

AudioManager.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(AudioManager)
