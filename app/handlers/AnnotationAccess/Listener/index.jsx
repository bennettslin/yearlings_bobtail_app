import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import AnnotationAccessDispatcher from '../Dispatcher'
import {
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue,
} from '../../../redux/selected/selector'
import { mapEarColumnIndex } from '../../../redux/session/selector'

const AnnotationAccessListener = () => {
    const
        dispatchAccessedAnnotation = useRef(),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        earColumnIndex = useSelector(mapEarColumnIndex),
        [didMount, setDidMount] = useState(false)

    useEffect(() => {
        // This is dispatched upon mount.
        if (!isSelectedLogue) {
            dispatchAccessedAnnotation.current({
                annotationIndex: selectedAnnotationIndex,
            })
        }
    }, [selectedAnnotationIndex])

    useEffect(() => {
        if (didMount) {
            // Access the default annotation.
            if (!isSelectedLogue) {
                dispatchAccessedAnnotation.current()
            }
        } else {
            setDidMount(true)
        }
    }, [earColumnIndex])

    useEffect(() => {
        if (didMount) {
            // Access annotation of selected verse.
            if (!isSelectedLogue) {
                dispatchAccessedAnnotation.current({
                    verseIndex: selectedVerseIndex,
                })
            }
        } else {
            setDidMount(true)
        }
    }, [selectedVerseIndex])

    return (
        <AnnotationAccessDispatcher {...{ ref: dispatchAccessedAnnotation }} />
    )
}

export default AnnotationAccessListener
