import React from 'react'
import PropTypes from 'prop-types'
import AnnotationSection from './annotation-section'
import TransitionPopup from '../popup/transition-popup'

/*************
 * CONTAINER *
 *************/

const AnnotationTransitionPopup = ({

    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedScoreIndex,
    selectedWikiIndex,
    handleAnnotationPrevious,
    handleAnnotationNext,
    handlePopupContainerClick,

...other }) => {

    const isVisible = !!selectedAnnotationIndex &&
                      !selectedCarouselIndex &&
                      !selectedScoreIndex &&
                      !selectedWikiIndex,
        myChild = (
            <AnnotationSection {...other} />
        )

    return (
        <TransitionPopup
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

AnnotationTransitionPopup.propTypes = {
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedCarouselIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number.isRequired,
    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default AnnotationTransitionPopup
