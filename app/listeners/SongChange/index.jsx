// eslint-disable-next-line object-curly-newline
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateLyricCarouselEntrance,
    updateLyricStore
} from '../../redux/lyric/action'
import { mapCanLyricCarouselEnter } from '../../redux/lyric/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex
} from '../../redux/selected/selector'

const SongChangeListener = () => {
    const
        dispatch = useDispatch(),
        timeoutRef = useRef(),
        canLyricCarouselEnter = useSelector(mapCanLyricCarouselEnter),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        [songChangeTimeoutId, setSongChangeTimeoutId] = useState(-1)

    timeoutRef.current = { songChangeTimeoutId }

    const beginSongSelect = () => {
        dispatch(updateLyricCarouselEntrance(true))
    }

    useEffect(() => {
        // Begin song change transition.
        dispatch(updateLyricCarouselEntrance(false))

        // Clear previous timeout.
        clearTimeout(timeoutRef.current.songChangeTimeoutId)

        // Wait for song selection to finish.
        setSongChangeTimeoutId(setTimeout(
            beginSongSelect, 200
        ))
    }, [selectedSongIndex])

    useEffect(() => {
        // Finish song change transition.
        if (canLyricCarouselEnter) {
            dispatch(updateLyricStore({
                lyricSongIndex: selectedSongIndex,
                lyricVerseIndex: selectedVerseIndex,
                lyricAnnotationIndex: selectedAnnotationIndex
            }))
        }
    }, [canLyricCarouselEnter])

    return null
}

export default SongChangeListener
