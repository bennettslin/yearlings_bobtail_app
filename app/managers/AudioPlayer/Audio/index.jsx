// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateAudioStore } from '../../../redux/audio/action'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import {
    mapIsPlaying,
    mapQueuedTogglePlay
} from '../../../redux/audio/selectors'
import SongDispatcher from '../../../handlers/Song/Dispatcher'
import {
    CONTINUE,
    AUDIO_OPTIONS
} from '../../../constants/options'
import { mapSelectedSongIndex } from '../../../redux/selected/selectors'
import { mapAudioOptionIndex } from '../../../redux/session/selectors'

const AudioManager = forwardRef(({ toggleSelectedPlayer }, ref) => {
    const
        dispatch = useDispatch(),
        dispatchSong = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        queuedTogglePlay = useSelector(mapQueuedTogglePlay),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        audioOptionIndex = useSelector(mapAudioOptionIndex)

    const handleSongEnd = () => {
        /**
         * When selecting next song through audio player, reset annotation and
         * verse, and scroll element into view, but do not access nav section.
         */
        const selectedAudioOption = AUDIO_OPTIONS[audioOptionIndex]

        /**
         * If option is to continue, advance to next song. Otherwise, stay on
         * same song, and start at beginning. (True evaluates to 1, false 0.)
         */
        const nextSongIndex = selectedSongIndex
            + (selectedAudioOption === CONTINUE)

        dispatchSong.current({
            selectedSongIndex: nextSongIndex
        })
    }

    useEffect(() => {
        if (queuedTogglePlay) {
            const nextIsPlaying = !isPlaying

            // Player manager will decide whether to set isPlaying in store.
            toggleSelectedPlayer.current(nextIsPlaying)

            if (nextIsPlaying) {
                dispatch(updateScrollLyricStore({
                    scrollLyricLog: 'Playing on.',
                    scrollLyricByVerse: true,
                    scrollLyricAlways: true
                }))
            }
            dispatch(updateAudioStore({ queuedTogglePlay: false }))
        }
    }, [queuedTogglePlay])

    useImperativeHandle(ref, () => handleSongEnd)
    return (
        <SongDispatcher {...{ ref: dispatchSong }} />
    )
})

AudioManager.propTypes = {
    toggleSelectedPlayer: PropTypes.func.isRequired
}

export default AudioManager
