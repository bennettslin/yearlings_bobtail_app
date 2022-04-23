import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import { updateLyricSong } from '../../redux/lyric/action'
import { scrollCarouselForSongSelect } from '../../redux/scrollCarousel/action'
import { scrollLyricForSongSelect } from '../../redux/scrollLyric/action'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import { mapCanStageReset } from '../../redux/scene/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex,
} from '../../redux/selected/selector'
import {
    SONG_SELECT_COMPLETE_DURATION,
    STAGE_RESET_AFTER_STAGE_COULD_RESET_DURATION,
} from '../../constants/entrance'

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
                    isSceneScrollComplete: true,
                })), SONG_SELECT_COMPLETE_DURATION),
            )

        } else {
            setDidMount(true)
        }
    }, [selectedSongIndex])

    useEffect(() => {
        if (didMount) {
            if (canStageReset) {
                setTimeout(() => dispatch(updateEntranceStore({
                    didStageReset: true,
                })), STAGE_RESET_AFTER_STAGE_COULD_RESET_DURATION)
            }
        } else {
            setDidMount(true)
        }
    }, [canStageReset])

    useEffect(() => {
        if (didMount) {
            if (isSongChangeDone) {
                dispatch(updateLyricSong({
                    lyricSongIndex: selectedSongIndex,
                    lyricVerseIndex: selectedVerseIndex,
                    lyricAnnotationIndex: selectedAnnotationIndex,
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

export default SongChangeManager
