import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationSection from './annotation-section'
import Popup from '../popup/popup'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

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
            myChild = (
                <AnnotationSection {...other} />
            )

        return (
            <Popup
                popupClassName="annotation selected-annotation"
                isVisible={isVisible}
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
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedCarouselIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number.isRequired,
    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default connect(({
    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => ({
    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}))(AnnotationPopup)
