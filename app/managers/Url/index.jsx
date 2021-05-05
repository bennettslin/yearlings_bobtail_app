import { useEffect } from 'react'
import { navigate } from 'gatsby'
import { useSelector } from 'react-redux'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex,
    mapLyricAnnotationIndex,
} from '../../redux/lyric/selector'
import { mapPitchSegmentIndex } from '../../redux/pitch/selector'
import { mapIsMarketingShown } from '../../redux/toggle/selector'
import {
    getPathForIndices,
    getPathForPitchPage,
} from '../../helpers/url'

const UrlManager = () => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isMarketingShown = useSelector(mapIsMarketingShown),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    useEffect(() => {
        logSelect({
            action: 'load',
            song: lyricSongIndex,
            verse: lyricVerseIndex,
            annotation: lyricAnnotationIndex,
        })
    }, [])

    useEffect(() => {
        if (!isMarketingShown) {
            navigate(
                getPathForIndices(
                    lyricSongIndex,
                    lyricVerseIndex,
                    lyricAnnotationIndex,
                ),
                // Replace, not push, in history.
                { replace: true },
            )
        }
    }, [lyricSongIndex, lyricVerseIndex, lyricAnnotationIndex, isMarketingShown])

    useEffect(() => {
        if (isMarketingShown) {
            navigate(
                getPathForPitchPage(pitchSegmentIndex),
                { replace: true },
            )
        }
    }, [isMarketingShown, pitchSegmentIndex])

    return null
}

export default UrlManager
