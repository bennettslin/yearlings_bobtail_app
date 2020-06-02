// Popup container for individual annotation section.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import AnnotationDispatcher from '../../../handlers/Annotation/Dispatcher'
import Annotation from '../../Annotation'
import Popup from '../../Popup'
import './style'
import {
    mapIsOverlayingAnnotation,
    mapIsPopupAnnotationVisible,
    mapPopupAnnotationIndex
} from '../../../redux/transient/selectors'

const AnnotationPopup = ({ inMain }) => {
    const
        dispatchAnnotation = useRef(),
        isOverlayingAnnotation = useSelector(mapIsOverlayingAnnotation),
        isPopupAnnotationVisible = useSelector(mapIsPopupAnnotationVisible),
        popupAnnotationIndex = useSelector(mapPopupAnnotationIndex)

    const handlePreviousClick = () => {
        dispatchAnnotation.current.dispatchAnnotationDirection(-1)
    }

    const handleNextClick = () => {
        dispatchAnnotation.current.dispatchAnnotationDirection(1)
    }

    return (
        <Popup
            doMountonEnter
            doUnmountOnExit
            showArrows
            bounceAnimate
            noBoxShadow
            {...{
                popupName: 'AnnotationPopup',
                isVisible:
                    /**
                     * Annotation popup is in main, unless lyric column is
                     * expanded or heightless.
                     */
                    Boolean(inMain) !== isOverlayingAnnotation &&
                    isPopupAnnotationVisible,
                noAbsoluteFull: inMain,
                displaysInOverlay: isOverlayingAnnotation,
                handlePreviousClick,
                handleNextClick
            }}
        >
            <Annotation
                isAccessed
                isSelected
                {...{ annotationIndex: popupAnnotationIndex }}
            />
            <AnnotationDispatcher {...{ ref: dispatchAnnotation }} />
        </Popup>
    )
}

AnnotationPopup.propTypes = {
    inMain: PropTypes.bool
}

export default memo(AnnotationPopup)
