import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SongDispatcher from '../Song'
import AudioPlayerContext from '../../contexts/AudioPlayer'
import { updateAudioStore } from '../../redux/audio/action'
import { scrollLyricBackToSelectedVerse } from '../../redux/scrollLyric/action'
import { mapIsPlaying } from '../../redux/audio/selector'
import { mapPlayerCanPlayThrough } from '../../redux/players/selector'
import { mapIsSelectedLogue } from '../../redux/selected/selector'

const PlayDispatcher = forwardRef((props, ref) => {
    const
        { callPlayer } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        dispatchSong = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        playerCanPlayThrough = useSelector(mapPlayerCanPlayThrough),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    const dispatchPlay = (nextIsPlaying = !isPlaying) => {
        // Do not toggle play if player is not ready to play through.
        if (!playerCanPlayThrough) {
            return false
        }

        /**
         * Select first song if play button in logue is toggled on. In order
         * to keep player and song in sync, only dispatch song, and let song
         * handler send queued event to toggle play.
         */
        if (nextIsPlaying) {
            dispatch(scrollLyricBackToSelectedVerse('Play toggled'))

            if (isSelectedLogue) {
                // If playing from logue, let song dispatcher call player.
                dispatchSong.current({
                    nextIsPlaying: true,
                    selectedSongIndex: 1,
                })
            } else {
                callPlayer({
                    isPlaying: nextIsPlaying,
                })
            }

        } else {
            dispatch(updateAudioStore({ isPlaying: false }))
        }

        return true
    }

    useImperativeHandle(ref, () => dispatchPlay)
    return (
        <SongDispatcher {...{ ref: dispatchSong }} />
    )
})

export default PlayDispatcher
