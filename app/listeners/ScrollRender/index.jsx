import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import { updateScrollCarouselStore } from '../../redux/scrollCarousel/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import {
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../redux/selected/selector'

const ScrollRenderListener = () => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    useEffect(() => {
        if (!isSelectedLogue && isSongChangeDone) {
            dispatch(updateScrollCarouselStore({
                scrollCarouselLog: 'Carousel entered.',
                scrollCarouselIndex: selectedAnnotationIndex,
                scrollCarouselNoDuration: true
            }))
        }
    }, [isSongChangeDone])

    useEffect(() => {
        if (!isSelectedLogue && isSongChangeDone) {
            dispatch(updateScrollLyricStore({
                scrollLyricLog: 'Lyric entered.',
                scrollLyricByVerse: true,
                scrollLyricNoDuration: true,
                scrollLyricAlways: true,
                queuedSceneChangeExitScrollCallback: true
            }))
        }
    }, [isSongChangeDone])

    return null
}

export default ScrollRenderListener
