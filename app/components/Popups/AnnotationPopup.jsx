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
    canCarouselRender,
    deviceIndex,
    isLyricExpanded,
    isHeightlessLyricColumn,
    renderableAnnotationIndex,
    selectedCarouselNavIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => ({
    canCarouselRender,
    deviceIndex,
    isLyricExpanded,
    isHeightlessLyricColumn,
    renderableAnnotationIndex,
    selectedCarouselNavIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
})

const annotationPopupPropTypes = {
    // Through Redux.
    canCarouselRender: PropTypes.bool.isRequired,
    deviceIndex: PropTypes.number.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,
    isHeightlessLyricColumn: PropTypes.bool.isRequired,

    renderableAnnotationIndex: PropTypes.number.isRequired,
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

    canCarouselRender,
    deviceIndex,
    isLyricExpanded,
    isHeightlessLyricColumn,
    inMain,

    renderableAnnotationIndex,
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
            isHeightlessLyricColumn,
            selectedCarouselNavIndex
        }),
        isPhone = getIsPhone(deviceIndex)

    /**
     * Annotation popup is in main, unless lyric column is expanded or
     * heightless.
     */
    if (Boolean(inMain) === isOverlayingAnnotation) {

        return null

    } else {
        const isVisible =
                canCarouselRender &&
                !!renderableAnnotationIndex &&

                /**
                 * If an annotation is selected, always show in popup if it's a
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
