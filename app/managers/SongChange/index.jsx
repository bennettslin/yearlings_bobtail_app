import { useEffect, useRef, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateEntranceStore,
    resetSongChange
} from '../../redux/entrance/action'
import { updateLyricStore } from '../../redux/lyric/action'
import { scrollCarouselForSongSelect } from '../../redux/scrollCarousel/action'
import { scrollLyricForSongSelect } from '../../redux/scrollLyric/action'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex
} from '../../redux/selected/selector'

const SongChangeManager = () => {
    const
        dispatch = useDispatch(),
        timeoutRef = useRef(),
        [didMount, setDidMount] = useState(false),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        [songSelectTimeoutId, setSongSelectTimeoutId] = useState(-1)

    timeoutRef.current = { songSelectTimeoutId }

    const completeSongSelect = () => {
        dispatch(updateEntranceStore({
            isSongSelectionComplete: true,

            /**
             * There is no scene scroll upon song select, so just set this to
             * true here and now.
             */
            isSceneScrollComplete: true
        }))
    }

    const scrollForSongSelect = () => {
        dispatch(scrollCarouselForSongSelect())
        dispatch(scrollLyricForSongSelect())
    }

    useEffect(() => {
        if (didMount) {
            // Clear previous timeout.
            clearTimeout(timeoutRef.current.songSelectTimeoutId)

            // Wait for song selection to finish.
            setSongSelectTimeoutId(setTimeout(
                completeSongSelect, 200
            ))

            // Song changed, so begin transition if not already in place.
            if (isSongChangeDone) {
                dispatch(resetSongChange())
            }
        } else {
            setDidMount(true)
        }
    }, [selectedSongIndex])

    useEffect(() => {
        if (didMount) {
            if (isSongChangeDone) {
                dispatch(updateLyricStore({
                    lyricSongIndex: selectedSongIndex,
                    lyricVerseIndex: selectedVerseIndex,
                    lyricAnnotationIndex: selectedAnnotationIndex
                }))

                // Scroll upon completion of subsequent song changes.
                scrollForSongSelect()
            }
        } else {
            setDidMount(true)
        }
    }, [isSongChangeDone])

    return null
}

export default memo(SongChangeManager)
