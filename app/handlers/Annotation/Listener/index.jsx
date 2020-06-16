import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetAnnotationQueue } from '../../../redux/annotation/action'
import AnnotationDispatcher from '../Dispatcher'
import ActivatedVerseDispatcher from '../../../dispatchers/Activated/Verse'
import { getShowAnnotationForColumn } from '../../../helpers/annotation'
import { getVerseIndexForAnnotation } from '../../../api/album/annotations'
import {
    mapQueuedAnnotationIndex,
    mapQueuedAnnotationFromCarousel,
    mapQueuedAnnotationFromLyricVerse
} from '../../../redux/annotation/selector'
import { mapIsEarShown } from '../../../redux/ear/selector'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex,
    mapEarColumnIndex
} from '../../../redux/selected/selector'

const AnnotationListener = () => {
    const
        dispatch = useDispatch(),
        dispatchAnnotation = useRef(),
        activateVerse = useRef(),
        queuedAnnotationIndex = useSelector(mapQueuedAnnotationIndex),
        queuedAnnotationFromCarousel = useSelector(mapQueuedAnnotationFromCarousel),
        queuedAnnotationFromLyricVerse = useSelector(mapQueuedAnnotationFromLyricVerse),
        isEarShown = useSelector(mapIsEarShown),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        earColumnIndex = useSelector(mapEarColumnIndex)

    useEffect(() => {
        // Dispatch the queued annotation index if possible.
        if (queuedAnnotationIndex) {

            const canDispatchAnnotation = dispatchAnnotation.current.index({
                annotationIndex: queuedAnnotationIndex,
                fromCarousel: queuedAnnotationFromCarousel
            })

            /**
             * If annotation in lyric verse was clicked, and annotation is not
             * selectable, activate underlying verse, but only if it is
             * interactable.
             */
            if (queuedAnnotationFromLyricVerse && !canDispatchAnnotation) {
                const annotationVerseIndex = getVerseIndexForAnnotation(
                    selectedSongIndex,
                    queuedAnnotationIndex
                )

                if (Number.isFinite(annotationVerseIndex)) {
                    activateVerse.current.index(annotationVerseIndex)
                }
            }

            dispatch(resetAnnotationQueue())
        }
    }, [queuedAnnotationIndex])

    useEffect(() => {
        // Selected annotation may need to be deselected.
        if (selectedAnnotationIndex) {
            const showAnnotationForColumn = getShowAnnotationForColumn({
                selectedSongIndex,
                selectedAnnotationIndex,
                earColumnIndex,
                isEarShown
            })

            if (!showAnnotationForColumn) {
                dispatchAnnotation.current.index()
            }
        }

    // TODO: Make this a selector. Or better yet, have ear column index and is ear shown in the same store, and put this logic in the selected reducer.
    }, [earColumnIndex, isEarShown])

    return (
        <>
            <AnnotationDispatcher {...{ ref: dispatchAnnotation }} />
            <ActivatedVerseDispatcher {...{ ref: activateVerse }} />
        </>
    )
}

export default AnnotationListener
