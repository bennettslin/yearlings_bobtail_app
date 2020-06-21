// eslint-disable-next-line object-curly-newline
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateIsSongSelectComplete,
    updateLyricStore
} from '../../redux/lyric/action'
import { mapIsSongSelectComplete } from '../../redux/lyric/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex
} from '../../redux/selected/selector'

const SongChangeExitListener = () => {
    const
        dispatch = useDispatch(),
        timeoutRef = useRef(),
        isSongSelectComplete = useSelector(mapIsSongSelectComplete),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        [songChangeTimeoutId, setSongChangeTimeoutId] = useState(-1)

    timeoutRef.current = { songChangeTimeoutId }

    const beginSongSelect = () => {
        dispatch(updateIsSongSelectComplete(true))
    }

    useEffect(() => {
        // Begin song change transition.
        dispatch(updateIsSongSelectComplete(false))

        // Clear previous timeout.
        clearTimeout(timeoutRef.current.songChangeTimeoutId)

        // Wait for song selection to finish.
        setSongChangeTimeoutId(setTimeout(
            beginSongSelect, 200
        ))
    }, [selectedSongIndex])

    useEffect(() => {
        // Finish song change transition.
        if (isSongSelectComplete) {
            dispatch(updateLyricStore({
                lyricSongIndex: selectedSongIndex,
                lyricVerseIndex: selectedVerseIndex,
                lyricAnnotationIndex: selectedAnnotationIndex
            }))
        }
    }, [isSongSelectComplete])

    return null
}

export default SongChangeExitListener
