import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { updateSelectedStore } from '../../../redux/selected/action'
import { getHasSelectedDot } from '../../../helpers/dot'
import { getDotsBitForAnnotation } from '../../../api/album/annotations'
import { getAnnotationIndexForDirection } from '../../../helpers/annotation'
import { mapSelectedDotsBit } from '../../../redux/dots/selectors'
import { mapIsEarShown } from '../../../redux/transient/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex,
    mapEarColumnIndex
} from '../../../redux/selected/selectors'

const AnnotationDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedDotsBit = useSelector(mapSelectedDotsBit),
        isEarShown = useSelector(mapIsEarShown),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        earColumnIndex = useSelector(mapEarColumnIndex)

    const _dispatchAndLog = annotationIndex => {
        dispatch(updateSelectedStore({
            selectedAnnotationIndex: annotationIndex
        }))

        logSelect({
            action: 'annotation',
            song: selectedSongIndex,
            annotation: annotationIndex
        })
    }

    const dispatchAnnotationIndex = ({
        annotationIndex = 0,
        fromCarousel

    } = {}) => {
        if (annotationIndex) {
            // If selecting an annotation, make sure that its dots intersect.
            const dotsBit = getDotsBitForAnnotation(
                selectedSongIndex,
                annotationIndex
            )

            if (!getHasSelectedDot(dotsBit, selectedDotsBit)) {
                return false
            }
        }

        _dispatchAndLog(annotationIndex)

        if (annotationIndex) {
            // If selecting from carousel, scroll lyric.
            if (fromCarousel) {
                dispatch(updateScrollLyricStore({
                    scrollLyricLog:
                        `Carousel select annotation ${
                            annotationIndex
                        }.`,
                    scrollLyricIndex: annotationIndex
                }))

            // If selecting from lyric, scroll carousel.
            } else {
                dispatch(updateScrollCarouselStore({
                    scrollCarouselLog: 'Lyric selected carousel annotation.',
                    scrollCarouselIndex: annotationIndex
                }))
            }
        }

        // Tell text lyric anchor to stop propagation if successfully selected.
        return Boolean(annotationIndex)
    }

    const dispatchAnnotationDirection = (direction) => {
        // Called from arrow buttons in popup.
        const nextAnnotationIndex = getAnnotationIndexForDirection({
            isEarShown,
            selectedSongIndex,
            selectedDotsBit,
            currentAnnotationIndex: selectedAnnotationIndex,
            earColumnIndex,
            direction
        })

        _dispatchAndLog(nextAnnotationIndex)

        if (nextAnnotationIndex) {
            dispatch(updateScrollLyricStore({
                scrollLyricLog:
                    `Direction select annotation ${nextAnnotationIndex}.`,
                scrollLyricIndex: nextAnnotationIndex
            }))
            dispatch(updateScrollCarouselStore({
                scrollCarouselLog: 'Select accessed carousel annotation.',
                scrollCarouselIndex: nextAnnotationIndex
            }))
        }

        return nextAnnotationIndex
    }

    useImperativeHandle(ref, () => ({
        dispatchAnnotationIndex,
        dispatchAnnotationDirection
    }))
    return null
})

export default AnnotationDispatcher
