import React from 'react'
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

    const isVisible = selectedAnnotationIndex &&
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

export default AnnotationTransitionPopup
