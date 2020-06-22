// eslint-disable-next-line object-curly-newline
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import { updateLyricStore } from '../../redux/lyric/action'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex
} from '../../redux/selected/selector'

const SongChangeListener = () => {
    const
        dispatch = useDispatch(),
        timeoutRef = useRef(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        [songSelectTimeoutId, setSongSelectTimeoutId] = useState(-1)

    timeoutRef.current = { songSelectTimeoutId }

    const completeSongSelect = () => {
        dispatch(updateEntranceStore({ isSongSelectionComplete: true }))
    }

    useEffect(() => {
        // Clear previous timeout.
        clearTimeout(timeoutRef.current.songSelectTimeoutId)

        // Wait for song selection to finish.
        setSongSelectTimeoutId(setTimeout(
            completeSongSelect, 200
        ))
    }, [selectedSongIndex])

    useEffect(() => {
        if (isSongChangeDone) {
            dispatch(updateLyricStore({
                lyricSongIndex: selectedSongIndex,
                lyricVerseIndex: selectedVerseIndex,
                lyricAnnotationIndex: selectedAnnotationIndex
            }))
        }
    }, [isSongChangeDone])

    return null
}

export default SongChangeListener
