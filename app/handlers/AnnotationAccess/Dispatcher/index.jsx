import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../../redux/access/action'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { getAnnotationIndexForDirection } from '../../../helpers/annotation'
import { getDotKeysFromBitNumber } from '../../../helpers/dot'
import { getAnnotationIndexForVerseIndex } from './helper'
import { mapDotsBitNumber } from '../../../redux/dots/selectors'
import { IS_EAR_SHOWN_SELECTOR } from '../../../redux/transient/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapEarColumnIndex
} from '../../../redux/selected/selectors'

const AnnotationAccessDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dotsBitNumber = useSelector(mapDotsBitNumber),
        isEarShown = useSelector(IS_EAR_SHOWN_SELECTOR),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        earColumnIndex = useSelector(mapEarColumnIndex),
        dispatchAccessedAnnotation = ({
            verseIndex = selectedVerseIndex,
            annotationIndex,
            direction
        } = {}) => {
            const
                selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),
                accessedAnnotationIndex =
                    annotationIndex ?

                        // If given an annotation index, start from there.
                        getAnnotationIndexForDirection({
                            currentAnnotationIndex: annotationIndex,
                            selectedSongIndex,
                            selectedDotKeys,
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
                            selectedDotKeys,
                            earColumnIndex,
                            isEarShown,
                            direction
                        })

            dispatch(updateAccessStore({ accessedAnnotationIndex }))

            // Only scroll if accessed with a direction.
            if (direction && accessedAnnotationIndex > 0) {
                dispatch(updateScrollLyricStore({
                    queuedScrollLyricLog:
                        `Direction access annotation ${accessedAnnotationIndex}.`,
                    queuedScrollLyricIndex: accessedAnnotationIndex
                }))
                dispatch(updateScrollCarouselStore({
                    queuedScrollCarouselLog: 'Access carousel annotation.',
                    queuedScrollCarouselIndex: accessedAnnotationIndex
                }))
            }

            return accessedAnnotationIndex
        }

    useImperativeHandle(ref, () => dispatchAccessedAnnotation)
    return null
})

export default AnnotationAccessDispatcher
