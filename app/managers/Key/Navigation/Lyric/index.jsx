// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateActivatedStore } from '../../../../redux/activated/action'
import AnnotationDispatcher from '../../../../handlers/Annotation/Dispatcher'
import AnnotationAccessDispatcher from '../../../../handlers/AnnotationAccess/Dispatcher'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ENTER
} from '../../../../constants/access'
import {
    mapIsAccessOn,
    mapAccessedAnnotationIndex
} from '../../../../redux/access/selectors'
import {
    mapIsActivated,
    mapActivatedVerseIndex
} from '../../../../redux/activated/selectors'
import { mapSelectedVerseIndex } from '../../../../redux/selected/selectors'

const LyricNavigation = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchAnnotation = useRef(),
        dispatchAccessedAnnotation = useRef(),
        isAccessOn = useSelector(mapIsAccessOn),
        accessedAnnotationIndex = useSelector(mapAccessedAnnotationIndex),
        isActivated = useSelector(mapIsActivated),
        activatedVerseIndex = useSelector(mapActivatedVerseIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex)

    const navigateLyric = keyName => {
        if (
            keyName !== ARROW_LEFT &&
            keyName !== ARROW_RIGHT &&
            keyName !== ENTER
        ) {
            return false
        }

        let direction

        switch (keyName) {
            case ARROW_LEFT:
                direction = -1
                break
            case ARROW_RIGHT:
                direction = 1
                break
        }

        /**
         * Access is getting turned on, so just choose annotation based on
         * selected verse.
         */
        if (!isAccessOn || isActivated) {
            const verseIndex =
                isActivated ?
                    activatedVerseIndex :
                    selectedVerseIndex

            dispatchAccessedAnnotation.current({
                verseIndex,
                direction
            })

            if (isActivated) {
                dispatch(updateActivatedStore())
            }

        /**
         * Access is already turned on, so select annotation if enter, or
         * continue to access if left or right arrow.
         */
        } else {
            if (keyName === ENTER) {
                return dispatchAnnotation.current.index({
                    annotationIndex: accessedAnnotationIndex
                })

            } else if (Number.isFinite(direction)) {
                dispatchAccessedAnnotation.current({
                    annotationIndex: accessedAnnotationIndex,
                    direction
                })
            }
        }

        return true
    }

    useImperativeHandle(ref, () => navigateLyric)
    return (
        <>
            <AnnotationDispatcher {...{ ref: dispatchAnnotation }} />
            <AnnotationAccessDispatcher {...{
                ref: dispatchAccessedAnnotation
            }} />
        </>
    )
})

export default LyricNavigation
