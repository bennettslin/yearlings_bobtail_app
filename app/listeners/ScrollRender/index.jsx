import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mapCanLyricCarouselEnter } from '../../redux/lyric/selector'
import { updateScrollCarouselStore } from '../../redux/scrollCarousel/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import {
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../redux/selected/selector'

const ScrollRenderListener = () => {
    const
        dispatch = useDispatch(),
        canLyricCarouselEnter = useSelector(mapCanLyricCarouselEnter),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    useEffect(() => {
        if (!isSelectedLogue && canLyricCarouselEnter) {
            dispatch(updateScrollCarouselStore({
                scrollCarouselLog: 'Carousel entered.',
                scrollCarouselIndex: selectedAnnotationIndex,
                scrollCarouselNoDuration: true
            }))
        }
    }, [canLyricCarouselEnter])

    useEffect(() => {
        if (!isSelectedLogue && canLyricCarouselEnter) {
            dispatch(updateScrollLyricStore({
                scrollLyricLog: 'Lyric entered.',
                scrollLyricByVerse: true,
                scrollLyricNoDuration: true,
                scrollLyricAlways: true,
                queuedSceneChangeExitScrollCallback: true
            }))
        }
    }, [canLyricCarouselEnter])

    return null
}

export default ScrollRenderListener
