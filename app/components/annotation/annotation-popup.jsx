// Popup container for individual annotation section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationSection from './annotation-section'
import Popup from '../popup/popup'
import { getIsOverlayingAnnotation } from '../../helpers/responsive-helper'

const mapStateToProps = ({
    deviceIndex,
    isLyricExpanded,
    isHeavyRenderReady,
    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => ({
    deviceIndex,
    isLyricExpanded,
    isHeavyRenderReady,
    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
})

const annotationPopupPropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,

    isHeavyRenderReady: PropTypes.bool.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedCarouselIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number.isRequired,

    // From parent.
    isOverlayAnnotation: PropTypes.bool.isRequired,
    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
},

AnnotationPopup = ({

    deviceIndex,
    isLyricExpanded,
    isHeavyRenderReady,
    isOverlayAnnotation,

    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex,

    handleAnnotationPrevious,
    handleAnnotationNext,
    handlePopupContainerClick,

...other }) => {

    const isOverlayingAnnotation = getIsOverlayingAnnotation({
            deviceIndex,
            isLyricExpanded
        })

    /**
     * Annotation popup is told whether it is in overlay. It then checks
     * data helper to decide whether to render itself.
     */
    if (isOverlayAnnotation !== isOverlayingAnnotation) {
        return null

    } else {
        const isVisible = isHeavyRenderReady &&
                          !!selectedAnnotationIndex &&
                          !selectedCarouselIndex &&
                          !selectedScoreIndex &&
                          !selectedTitleIndex &&
                          !selectedWikiIndex,

            /**
             * Pass annotation object from state so that it persists while
             * popup is fading out.
             */
            myChild = (
                <AnnotationSection {...other} />
            )

        return (
            <Popup
                isVisible={isVisible}
                popupClassName="annotation"
                showArrows={true}
                handlePreviousClick={handleAnnotationPrevious}
                handleNextClick={handleAnnotationNext}
                handlePopupContainerClick={handlePopupContainerClick}
                myChild={myChild}
            />
        )
    }
}

AnnotationPopup.propTypes = annotationPopupPropTypes

export default connect(mapStateToProps)(AnnotationPopup)
