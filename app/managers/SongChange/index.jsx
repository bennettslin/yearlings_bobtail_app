import { useEffect, useRef, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import { updateLyricStore } from '../../redux/lyric/action'
import { scrollCarouselForSongSelect } from '../../redux/scrollCarousel/action'
import { scrollLyricForSongSelect } from '../../redux/scrollLyric/action'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import { mapCanStageReset } from '../../redux/scene/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex
} from '../../redux/selected/selector'

const SongChangeManager = () => {
    const
        dispatch = useDispatch(),
        timeoutRef = useRef(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        canStageReset = useSelector(mapCanStageReset),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        [songSelectTimeoutId, setSongSelectTimeoutId] = useState(-1),
        [didMount, setDidMount] = useState(false)

    timeoutRef.current = { songSelectTimeoutId }

    useEffect(() => {
        if (didMount) {
            // Clear previous timeout.
            clearTimeout(timeoutRef.current.songSelectTimeoutId)

            // Wait for song selection to finish.
            setSongSelectTimeoutId(
                setTimeout(() => dispatch(updateEntranceStore({
                    isSongSelectComplete: true,

                    /**
                     * There is no scene scroll upon song select, so just set
                     * this to true here and now.
                     */
                    isSceneScrollComplete: true
                })), 200)
            )

        } else {
            setDidMount(true)
        }
    }, [selectedSongIndex])

    useEffect(() => {
        if (didMount) {
            if (canStageReset) {
                setTimeout(() => dispatch(updateEntranceStore({
                    didStageReset: true

                // This seems to be the time needed for presences to unmount.
                })), 150)
            }
        } else {
            setDidMount(true)
        }
    }, [canStageReset])

    useEffect(() => {
        if (didMount) {
            if (isSongChangeDone) {
                dispatch(updateLyricStore({
                    lyricSongIndex: selectedSongIndex,
                    lyricVerseIndex: selectedVerseIndex,
                    lyricAnnotationIndex: selectedAnnotationIndex
                }))

                // Scroll upon completion of subsequent song changes.
                dispatch(scrollCarouselForSongSelect())
                dispatch(scrollLyricForSongSelect())
            }
        } else {
            setDidMount(true)
        }
    }, [isSongChangeDone])

    return null
}

export default memo(SongChangeManager)
