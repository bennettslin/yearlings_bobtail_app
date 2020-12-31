// Popup container for individual annotation section.
import React, { useEffect, useRef, useState, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../DidMountHoc'
import AnnotationDispatcher from '../../../handlers/Annotation/Dispatcher'
import Annotation from '../../Annotation'
import Popup from '../../Popup'
import './style'
import {
    mapIsOverlayingAnnotation,
    getMapIsPopupAnnotationShown,
} from '../../../redux/annotationPopup/selector'
import { mapLyricAnnotationIndex } from '../../../redux/lyric/selector'

const AnnotationPopup = ({ didMount, inMain }) => {
    const
        dispatchAnnotation = useRef(),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isOverlayingAnnotation = useSelector(mapIsOverlayingAnnotation),
        isPopupAnnotationShown = useSelector(
            getMapIsPopupAnnotationShown(inMain)
        ),
        [annotationIndex, setAnnotationIndex] = useState(lyricAnnotationIndex)

    const handlePreviousClick = () => {
        dispatchAnnotation.current.direction(-1)
    }

    const handleNextClick = () => {
        dispatchAnnotation.current.direction(1)
    }

    const onExited = () => {
        // Only clear annotation index when animation is complete.
        setAnnotationIndex(0)
    }

    useEffect(() => {
        if (isPopupAnnotationShown && lyricAnnotationIndex) {
            // This will persist the popup annotation as it animates out.
            setAnnotationIndex(lyricAnnotationIndex)
        }
    }, [isPopupAnnotationShown, lyricAnnotationIndex])

    return didMount && (
        <Popup
            appear
            mountOnEnter
            unmountOnExit
            showArrows
            bounceAnimate
            noBoxShadow
            {...{
                popupName: 'AnnotationPopup',
                isVisible: isPopupAnnotationShown,
                noAbsoluteFull: inMain,
                displaysInOverlay: isOverlayingAnnotation,
                handlePreviousClick,
                handleNextClick,
                onExited,
            }}
        >
            <Annotation
                isAccessed
                isSelected
                {...{ annotationIndex }}
            />
            <AnnotationDispatcher {...{ ref: dispatchAnnotation }} />
        </Popup>
    )
}

AnnotationPopup.propTypes = {
    didMount: PropTypes.bool.isRequired,
    inMain: PropTypes.bool,
}

export default memo(getDidMountHoc(AnnotationPopup))
