import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import AnnotationAccessDispatcher from '../Dispatcher'
import {
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex,
    mapEarColumnIndex
} from '../../../redux/selected/selector'

const AnnotationAccessListener = () => {
    const
        dispatchAccessedAnnotation = useRef(),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        earColumnIndex = useSelector(mapEarColumnIndex)

    useEffect(() => {
        // Access the default annotation.
        dispatchAccessedAnnotation.current()
    }, [earColumnIndex])

    useEffect(() => {
        // Access the selected annotation.
        dispatchAccessedAnnotation.current({
            annotationIndex: selectedAnnotationIndex
        })
    }, [selectedAnnotationIndex])

    useEffect(() => {
        // Access annotation of selected verse.
        dispatchAccessedAnnotation.current({
            verseIndex: selectedVerseIndex
        })
    }, [selectedVerseIndex])

    return (
        <AnnotationAccessDispatcher {...{ ref: dispatchAccessedAnnotation }} />
    )
}

export default AnnotationAccessListener
