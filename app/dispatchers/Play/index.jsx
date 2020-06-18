// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SongDispatcher from '../../handlers/Song/Song'
import { updateAudioStore } from '../../redux/audio/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import { mapIsPlaying } from '../../redux/audio/selector'
import { mapPlayerCanPlayThrough } from '../../redux/players/selector'
import { mapIsSelectedLogue } from '../../redux/selected/selector'

const PlayDispatcher = forwardRef((props, ref) => {
    const
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

        const isPlayFromLogue = isSelectedLogue && nextIsPlaying

        /**
         * Select first song if play button in logue is toggled on. In order
         * to keep player and song in sync, only dispatch song, and let song
         * handler send queued event to toggle play.
         */
        if (isPlayFromLogue) {
            dispatchSong.current({
                isPlayFromLogue: true,
                selectedSongIndex: 1
            })

        } else {
            dispatch(updateAudioStore({ queuedTogglePlay: true }))

            if (nextIsPlaying) {
                dispatch(updateScrollLyricStore({
                    scrollLyricLog: 'Playing on.',
                    scrollLyricByVerse: true,
                    scrollLyricAlways: true
                }))
            }
        }

        return true
    }

    useImperativeHandle(ref, () => dispatchPlay)
    return (
        <SongDispatcher {...{ ref: dispatchSong }} />
    )
})

export default PlayDispatcher
