import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import AnnotationAccessDispatcher from '../Dispatcher'
import {
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex,
    mapEarColumnIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selector'

const AnnotationAccessListener = () => {
    const
        dispatchAccessedAnnotation = useRef(),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        earColumnIndex = useSelector(mapEarColumnIndex)

    useEffect(() => {
        // Access the default annotation.
        if (!isSelectedLogue) {
            dispatchAccessedAnnotation.current()
        }
    }, [earColumnIndex])

    useEffect(() => {
        // Access the selected annotation.
        if (!isSelectedLogue) {
            dispatchAccessedAnnotation.current({
                annotationIndex: selectedAnnotationIndex
            })
        }
    }, [selectedAnnotationIndex])

    useEffect(() => {
        // Access annotation of selected verse.
        if (!isSelectedLogue) {
            dispatchAccessedAnnotation.current({
                verseIndex: selectedVerseIndex
            })
        }
    }, [selectedVerseIndex])

    return (
        <AnnotationAccessDispatcher {...{ ref: dispatchAccessedAnnotation }} />
    )
}

export default AnnotationAccessListener
