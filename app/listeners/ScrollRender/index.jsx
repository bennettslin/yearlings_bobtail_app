import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    mapDidCarouselEnter,
    mapDidLyricEnter
} from '../../redux/entrance/selector'
import { updateScrollCarouselStore } from '../../redux/scrollCarousel/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import {
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../redux/selected/selector'

const ScrollRenderListener = () => {
    const
        dispatch = useDispatch(),
        didCarouselEnter = useSelector(mapDidCarouselEnter),
        didLyricEnter = useSelector(mapDidLyricEnter),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    useEffect(() => {
        if (!isSelectedLogue && didCarouselEnter) {
            dispatch(updateScrollCarouselStore({
                scrollCarouselLog: 'Carousel entered.',
                scrollCarouselIndex: selectedAnnotationIndex,
                scrollCarouselNoDuration: true
            }))
        }
    }, [didCarouselEnter])

    useEffect(() => {
        if (!isSelectedLogue && didLyricEnter) {
            dispatch(updateScrollLyricStore({
                scrollLyricLog: 'Lyric entered.',
                scrollLyricByVerse: true,
                scrollLyricNoDuration: true,
                scrollLyricAlways: true,
                queuedSceneChangeExitScrollCallback: true
            }))
        }
    }, [didLyricEnter])

    return null
}

export default ScrollRenderListener
