import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex,
    mapLyricAnnotationIndex,
} from '../../redux/lyric/selector'
import { mapArtupSlideIndex } from '../../redux/marketing/selector'
import { mapIsMarketingShown } from '../../redux/toggle/selector'
import {
    navigateToAlbumPage,
    navigateToArtupPage,
} from '../../helpers/navigate'

const UrlManager = () => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isMarketingShown = useSelector(mapIsMarketingShown),
        artupSlideIndex = useSelector(mapArtupSlideIndex)

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
            navigateToAlbumPage(
                lyricSongIndex,
                lyricVerseIndex,
                lyricAnnotationIndex,
            )
        }
    }, [
        lyricSongIndex,
        lyricVerseIndex,
        lyricAnnotationIndex,
        isMarketingShown,
    ])

    useEffect(() => {
        // TODO: Do for promo, onesheet, and artup.
        if (isMarketingShown) {
            navigateToArtupPage(artupSlideIndex)
        }
    }, [isMarketingShown, artupSlideIndex])

    return null
}

export default UrlManager
