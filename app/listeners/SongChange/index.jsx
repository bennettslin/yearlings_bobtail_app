// eslint-disable-next-line object-curly-newline
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsSongChangeDone } from '../../redux/entrance/action'
import { updateLyricStore } from '../../redux/lyric/action'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex
} from '../../redux/selected/selector'

const SongChangeListener = () => {
    const
        dispatch = useDispatch(),
        timeoutRef = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        [songChangeTimeoutId, setSongChangeTimeoutId] = useState(-1)

    timeoutRef.current = { songChangeTimeoutId }

    const completeSongSelect = () => {
        dispatch(updateLyricStore({
            lyricSongIndex: selectedSongIndex,
            lyricVerseIndex: selectedVerseIndex,
            lyricAnnotationIndex: selectedAnnotationIndex
        }))
        dispatch(updateIsSongChangeDone(true))
    }

    useEffect(() => {
        // If song changed, begin song transition.

        // Clear previous timeout.
        clearTimeout(timeoutRef.current.songChangeTimeoutId)

        // Wait for song selection to finish.
        setSongChangeTimeoutId(setTimeout(
            completeSongSelect, 200
        ))
    }, [selectedSongIndex])

    return null
}

export default SongChangeListener
