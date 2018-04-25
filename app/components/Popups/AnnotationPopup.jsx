// Popup container for individual annotation section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Annotation from '../Annotation/Annotation'
import Popup from '../Popup/Popup'
import { getIsOverlayingAnnotation,
         getIsPhone } from '../../helpers/responsiveHelper'

const mapStateToProps = ({
    deviceIndex,
    isLyricExpanded,
    isHeavyRenderReady,
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => ({
    deviceIndex,
    isLyricExpanded,
    isHeavyRenderReady,
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
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
    selectedCarouselNavIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number.isRequired,

    // From parent.
    inMain: PropTypes.bool,
    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
},

AnnotationPopup = ({

    deviceIndex,
    isLyricExpanded,
    isHeavyRenderReady,
    inMain,

    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex,

    handleAnnotationPrevious,
    handleAnnotationNext,
    handlePopupContainerClick,

...other }) => {

    const isOverlayingAnnotation = getIsOverlayingAnnotation({
            deviceIndex,
            isLyricExpanded,
            selectedCarouselNavIndex
        }),
        isPhone = getIsPhone(deviceIndex)

    /**
     * Annotation popup is told whether it is in overlay. It then checks
     * data helper to decide whether to render itself.
     */
    if (Boolean(inMain) === isOverlayingAnnotation) {
        return null

    } else {
        const isVisible =
                isHeavyRenderReady &&
                !!selectedAnnotationIndex &&

                /**
                 * If an annotation is selected, always show in popupif it's a
                 * phone or lyric is expanded.
                 */
                (!selectedCarouselNavIndex || isPhone || isLyricExpanded) &&

                !selectedScoreIndex &&
                !selectedTitleIndex &&
                !selectedWikiIndex

        /**
         * Pass annotation object from state so that it persists while popup is
         * fading out.
         */
        return (
            <Popup
                showArrows
                bounceAnimate
                hasWidePadding
                popupName="Annotation"
                className={cx(
                    inMain && 'AnnotationPopup__inMain'
                )}
                isVisible={isVisible}
                displaysInOverlay={isOverlayingAnnotation}
                noAbsoluteFull={inMain}
                handleNextClick={handleAnnotationNext}
                handlePreviousClick={handleAnnotationPrevious}
                handlePopupContainerClick={handlePopupContainerClick}
            >
                <Annotation {...other}
                    isSelected
                />
            </Popup>
        )
    }
}

AnnotationPopup.propTypes = annotationPopupPropTypes

export default connect(mapStateToProps)(AnnotationPopup)
