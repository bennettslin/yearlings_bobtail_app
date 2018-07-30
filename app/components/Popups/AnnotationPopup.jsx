// Popup container for individual annotation section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Annotation from '../Annotation/Annotation'
import Popup from '../Popup/Popup'
import { getIsOverlayingAnnotation,
         getIsPhone } from '../../helpers/responsiveHelper'

const mapStateToProps = ({
    canCarouselRender,
    deviceStore,
    isLyricExpanded,
    isHeightlessLyricColumn,
    renderableStore,
    selectedCarouselNavIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => ({
    canCarouselRender,
    deviceIndex: deviceStore.deviceIndex,
    isLyricExpanded,
    isHeightlessLyricColumn,
    renderableAnnotationIndex: renderableStore.renderableAnnotationIndex,
    selectedCarouselNavIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
})

class AnnotationPopup extends Component {

    static propTypes = {
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
    }

    constructor(props) {
        super(props)

        this.state = {
            // Ensures that annotation index persists as popup is closing.
            annotationIndex: props.renderableAnnotationIndex
        }
    }

    componentDidUpdate(prevProps) {
        const {
            renderableAnnotationIndex,
            selectedCarouselNavIndex
        } = this.props

        if (
            // If there is a selected annotation...
            renderableAnnotationIndex &&
            (
                // ... and annotation index has changed...
                renderableAnnotationIndex !==
                prevProps.renderableAnnotationIndex
            ) || (
                // ... or toggling from carousel to popup...
                !selectedCarouselNavIndex &&
                prevProps.selectedCarouselNavIndex
            )
        ) {
            // ... then persist the popup annotation index.
            this.setState({
                annotationIndex: renderableAnnotationIndex
            })
        }

        if (
            // If toggling from popup to carousel...
            selectedCarouselNavIndex &&
            !prevProps.selectedCarouselNavIndex
        ) {
            // ... then reset the popup annotation index.
            this.setState({
                annotationIndex: 0
            })
        }
    }

    render() {
        const {
            /* eslint-disable no-unused-vars */
            dispatch,
            /* eslint-enable no-unused-vars */

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

            ...other
        } = this.props,

            isOverlayingAnnotation = getIsOverlayingAnnotation({
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
                    Boolean(renderableAnnotationIndex) &&

                    /**
                     * If an annotation is selected, always show in popup if
                     * it's a phone or lyric is expanded.
                     */
                    (
                        !selectedCarouselNavIndex ||
                        isPhone ||
                        isLyricExpanded
                    ) &&

                    !selectedScoreIndex &&
                    !selectedTitleIndex &&
                    !selectedWikiIndex,

                { annotationIndex } = this.state

            /**
             * Pass annotation object from state so that it persists while popup is
             * fading out.
             */
            return (
                <Popup
                    className={cx(
                        inMain && 'AnnotationPopup__inMain'
                    )}
                    showArrows
                    bounceAnimate
                    hasWidePadding
                    {...{
                        popupName: 'Annotation',
                        isVisible,
                        noAbsoluteFull: inMain,
                        displaysInOverlay: isOverlayingAnnotation,
                        staticZIndex: !isOverlayingAnnotation,
                        handleNextClick: handleAnnotationNext,
                        handlePreviousClick: handleAnnotationPrevious,
                        handlePopupContainerClick
                    }}
                >
                    <Annotation {...other}
                        isAccessed
                        isSelected
                        {...{
                            annotationIndex,
                            handleContainerClick: handlePopupContainerClick
                        }}

                    />
                </Popup>
            )
        }
    }
}

export default connect(mapStateToProps)(AnnotationPopup)
