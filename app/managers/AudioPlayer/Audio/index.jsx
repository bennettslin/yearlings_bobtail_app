import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import {
    mapIsPlaying,
    mapQueuedTogglePlay
} from '../../../redux/audio/selectors'
import SongDispatcher from '../../../handlers/Song/Dispatcher'

const AudioManager = () => {
    const
        dispatch = useDispatch(),
        dispatchSong = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        queuedTogglePlay = useSelector(mapQueuedTogglePlay)

    useEffect(() => {
        if (queuedTogglePlay) {
            const nextIsPlaying = !isPlaying

            if (nextIsPlaying) {
                dispatch(updateScrollLyricStore({
                    scrollLyricLog: 'Playing on.',
                    scrollLyricByVerse: true,
                    scrollLyricAlways: true
                }))
            }
        }
    }, [queuedTogglePlay])

    return (
        <SongDispatcher {...{ ref: dispatchSong }} />
    )
}

export default AudioManager
