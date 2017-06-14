// Popup container for individual annotation section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationSection from './annotation-section'
import Popup from '../popup/popup'
import { getComponentShouldUpdate } from '../../helpers/general-helper'
import { getIsOverlayingAnnotation } from '../../helpers/responsive-helper'

class AnnotationPopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'deviceIndex',
                    'isLyricExpanded',
                    'selectedAnnotationIndex',
                    'selectedCarouselIndex',
                    'selectedScoreIndex',
                    'selectedTitleIndex',
                    'selectedWikiIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {

        const { deviceIndex,
                isLyricExpanded,
                isOverlayAnnotation,
                ...other } = this.props,

            isOverlayingAnnotation = getIsOverlayingAnnotation({
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
            const { selectedAnnotationIndex,
                    selectedCarouselIndex,
                    selectedScoreIndex,
                    selectedTitleIndex,
                    selectedWikiIndex,

                    handleAnnotationPrevious,
                    handleAnnotationNext,
                    handlePopupContainerClick,

                    ...childOther } = other,

                isVisible = !!selectedAnnotationIndex &&
                            !selectedCarouselIndex &&
                            !selectedScoreIndex &&
                            !selectedTitleIndex &&
                            !selectedWikiIndex,

                /**
                 * Pass annotation object from state so that it persists while
                 * popup is fading out.
                 */
                myChild = (
                    <AnnotationSection {...childOther} />
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
}

AnnotationPopup.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,

    annotationObject: PropTypes.object,
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
}

export default connect(({
    deviceIndex,
    isLyricExpanded,
    annotationObject,
    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => ({
    deviceIndex,
    isLyricExpanded,
    annotationObject,
    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}))(AnnotationPopup)
