import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scrollCarouselToAnnotation } from '../../../redux/scrollCarousel/action'
import { scrollLyricToAnchor } from '../../../redux/scrollLyric/action'
import { updateSelectedStore } from '../../../redux/selected/action'
import { getHasSelectedDot } from '../../../helpers/dot'
import { getDotsBitForAnnotation } from '../../../api/album/annotations'
import { getAnnotationIndexForDirection } from '../../../helpers/annotation'
import { mapSelectedDotsBit } from '../../../redux/dots/selector'
import { mapIsEarShown } from '../../../redux/ear/selector'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex
} from '../../../redux/selected/selector'
import { mapEarColumnIndex } from '../../../redux/session/selector'

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
                dispatch(scrollLyricToAnchor(
                    'Carousel selected',
                    annotationIndex
                ))

            // If selecting from lyric, scroll carousel.
            } else {
                dispatch(scrollCarouselToAnnotation(
                    'Lyric selected',
                    annotationIndex
                ))
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
            dispatch(scrollLyricToAnchor(
                'Direction selected',
                nextAnnotationIndex
            ))
            dispatch(scrollCarouselToAnnotation(
                'Direction selected',
                nextAnnotationIndex
            ))
        }

        return nextAnnotationIndex
    }

    useImperativeHandle(ref, () => ({
        index: dispatchAnnotationIndex,
        direction: dispatchAnnotationDirection
    }))
    return null
})

export default AnnotationDispatcher
