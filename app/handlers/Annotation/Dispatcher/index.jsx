import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { updateSelectedStore } from '../../../redux/selected/action'
import {
    intersects,
    getDotKeysFromBitNumber
} from '../../../helpers/dot'
import { getDotKeysForAnnotation } from '../../../album/api/annotations'
import { getAnnotationIndexForDirection } from '../../../helpers/annotation'
import { mapDotsBitNumber } from '../../../redux/dots/selectors'
import { mapIsEarShown } from '../../../redux/transient/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex,
    mapEarColumnIndex
} from '../../../redux/selected/selectors'

const AnnotationDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dotsBitNumber = useSelector(mapDotsBitNumber),
        isEarShown = useSelector(mapIsEarShown),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        earColumnIndex = useSelector(mapEarColumnIndex),
        selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber)

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
        // If selecting an annotation, make sure that its dots intersect.
        if (annotationIndex) {
            const annotationDotKeys = getDotKeysForAnnotation(
                selectedSongIndex,
                annotationIndex
            )

            if (!intersects(annotationDotKeys, selectedDotKeys)) {
                return false
            }
        }

        _dispatchAndLog(annotationIndex)

        if (annotationIndex) {
            // If selecting from carousel, scroll lyric.
            if (fromCarousel) {
                dispatch(updateScrollLyricStore({
                    queuedScrollLyricLog:
                        `Carousel select annotation ${
                            annotationIndex
                        }.`,
                    queuedScrollLyricIndex: annotationIndex
                }))

            // If selecting from lyric, scroll carousel.
            } else {
                dispatch(updateScrollCarouselStore({
                    queuedScrollCarouselLog: 'Lyric selected carousel annotation.',
                    queuedScrollCarouselIndex: annotationIndex
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
            selectedDotKeys,
            currentAnnotationIndex: selectedAnnotationIndex,
            earColumnIndex,
            direction
        })

        _dispatchAndLog(nextAnnotationIndex)

        if (nextAnnotationIndex) {
            dispatch(updateScrollLyricStore({
                queuedScrollLyricLog:
                    `Direction select annotation ${nextAnnotationIndex}.`,
                queuedScrollLyricIndex: nextAnnotationIndex
            }))
            dispatch(updateScrollCarouselStore({
                queuedScrollCarouselLog: 'Select accessed carousel annotation.',
                queuedScrollCarouselIndex: nextAnnotationIndex
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
