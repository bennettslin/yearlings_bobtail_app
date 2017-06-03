// Popup container for individual annotation section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationSection from './annotation-section'
import Popup from '../popup/popup'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class AnnotationPopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
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
        const { selectedAnnotationIndex,
                selectedCarouselIndex,
                selectedScoreIndex,
                selectedTitleIndex,
                selectedWikiIndex,

                handleAnnotationPrevious,
                handleAnnotationNext,
                handlePopupContainerClick,

                ...other } = this.props,

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
                <AnnotationSection {...other} />
            )

        return (
            <Popup
                isVisible={isVisible}
                popupClassName="annotation selected-annotation"
                showArrows={true}
                handlePreviousClick={handleAnnotationPrevious}
                handleNextClick={handleAnnotationNext}
                handlePopupContainerClick={handlePopupContainerClick}
                myChild={myChild}
            />
        )
    }
}

AnnotationPopup.propTypes = {
    // Through Redux.
    annotationObject: PropTypes.object,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedCarouselIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number.isRequired,

    // From parent.
    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default connect(({
    annotationObject,
    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => ({
    annotationObject,
    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}))(AnnotationPopup)
