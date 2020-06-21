import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateLyricStore } from '../../../redux/lyric/action'
import { mapIsSongSelectComplete } from '../../../redux/lyric/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex
} from '../../../redux/selected/selector'

const SongChangeUpdateListener = () => {
    const
        dispatch = useDispatch(),
        isSongSelectComplete = useSelector(mapIsSongSelectComplete),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex)

    useEffect(() => {
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

export default SongChangeUpdateListener
