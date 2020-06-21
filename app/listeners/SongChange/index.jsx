import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex)

    const completeSongSelect = () => {
        dispatch(updateLyricStore({
            lyricSongIndex: selectedSongIndex,
            lyricVerseIndex: selectedVerseIndex,
            lyricAnnotationIndex: selectedAnnotationIndex
        }))
    }

    useEffect(() => {
        if (isSongChangeDone) {
            completeSongSelect()
        }

    // This is set by stage curtain exit.
    }, [isSongChangeDone])

    return null
}

export default SongChangeListener
