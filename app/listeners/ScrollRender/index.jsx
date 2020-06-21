import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mapIsSongSelectComplete } from '../../redux/lyric/selector'
import { updateScrollCarouselStore } from '../../redux/scrollCarousel/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import {
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../redux/selected/selector'

const ScrollRenderListener = () => {
    const
        dispatch = useDispatch(),
        isSongSelectComplete = useSelector(mapIsSongSelectComplete),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    useEffect(() => {
        if (!isSelectedLogue && isSongSelectComplete) {
            dispatch(updateScrollCarouselStore({
                scrollCarouselLog: 'Carousel entered.',
                scrollCarouselIndex: selectedAnnotationIndex,
                scrollCarouselNoDuration: true
            }))
        }
    }, [isSongSelectComplete])

    useEffect(() => {
        if (!isSelectedLogue && isSongSelectComplete) {
            dispatch(updateScrollLyricStore({
                scrollLyricLog: 'Lyric entered.',
                scrollLyricByVerse: true,
                scrollLyricNoDuration: true,
                scrollLyricAlways: true,
                queuedSceneChangeExitScrollCallback: true
            }))
        }
    }, [isSongSelectComplete])

    return null
}

export default ScrollRenderListener
