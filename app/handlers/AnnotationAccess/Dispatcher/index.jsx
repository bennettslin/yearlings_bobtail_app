import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../../redux/access/action'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { getAnnotationIndexForDirection } from '../../../helpers/annotation'
import { getAnnotationIndexForVerseIndex } from './helper'
import { mapSelectedDotsBit } from '../../../redux/dots/selectors'
import { mapIsEarShown } from '../../../redux/transient/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapEarColumnIndex
} from '../../../redux/selected/selectors'

const AnnotationAccessDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedDotsBit = useSelector(mapSelectedDotsBit),
        isEarShown = useSelector(mapIsEarShown),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        earColumnIndex = useSelector(mapEarColumnIndex)

    const dispatchAccessedAnnotation = ({
        verseIndex = selectedVerseIndex,
        annotationIndex,
        direction
    } = {}) => {
        const
            accessedAnnotationIndex =
                    annotationIndex ?

                        // If given an annotation index, start from there.
                        getAnnotationIndexForDirection({
                            currentAnnotationIndex: annotationIndex,
                            selectedSongIndex,
                            selectedDotsBit,
                            earColumnIndex,
                            isEarShown,
                            direction

                        /**
                         * Otherwise, start from the selected verse, and grab
                         * the first valid annotation index if going left, or
                         * the last if going right.
                         */
                        }) : getAnnotationIndexForVerseIndex({
                            verseIndex,
                            selectedSongIndex,
                            selectedDotsBit,
                            earColumnIndex,
                            isEarShown,
                            direction
                        })

        dispatch(updateAccessStore({ accessedAnnotationIndex }))

        // Only scroll if accessed with a direction.
        if (direction && accessedAnnotationIndex > 0) {
            dispatch(updateScrollLyricStore({
                scrollLyricLog:
                        `Direction access annotation ${accessedAnnotationIndex}.`,
                scrollLyricIndex: accessedAnnotationIndex
            }))
            dispatch(updateScrollCarouselStore({
                scrollCarouselLog: 'Access carousel annotation.',
                scrollCarouselIndex: accessedAnnotationIndex
            }))
        }

        return accessedAnnotationIndex
    }

    useImperativeHandle(ref, () => dispatchAccessedAnnotation)
    return null
})

export default AnnotationAccessDispatcher
