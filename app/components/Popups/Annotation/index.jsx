// Popup container for individual annotation section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Annotation from '../../Annotation'
import Popup from '../../Popup'

const mapStateToProps = ({
    toggleStore: {
        isCarouselShown,
        isScoreShown,
        isTitleShown
    },
    transientStore: { isOverlayingAnnotation },
    renderStore: { canCarouselRender },
    renderedStore: { renderedAnnotationIndex },
    sessionStore: { selectedWikiIndex }
}) => ({
    isCarouselShown,
    isScoreShown,
    isTitleShown,
    isOverlayingAnnotation,
    canCarouselRender,
    renderedAnnotationIndex,
    selectedWikiIndex
})

class AnnotationPopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,
        isOverlayingAnnotation: PropTypes.bool.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,

        // From parent.
        inMain: PropTypes.bool,
        handleAnnotationSelect: PropTypes.func.isRequired
    }

    state = {
        // Ensures that annotation index persists as popup is closing.
        annotationIndex: this.props.renderedAnnotationIndex
    }

    componentDidUpdate(prevProps) {
        const {
            renderedAnnotationIndex,
            isCarouselShown
        } = this.props

        if (
            // If there is a selected annotation...
            renderedAnnotationIndex &&
            (
                // ... and annotation index has changed...
                renderedAnnotationIndex !==
                prevProps.renderedAnnotationIndex
            ) || (
                // ... or toggling from carousel to popup...
                !isCarouselShown &&
                prevProps.isCarouselShown
            )
        ) {
            // ... then persist the popup annotation index.
            this.setState({
                annotationIndex: renderedAnnotationIndex
            })
        }

        if (
            // If toggling from popup to carousel...
            isCarouselShown &&
            !prevProps.isCarouselShown
        ) {
            /**
             * ... then still persist the popup annotation index. Originally,
             * it was reset. But this messed up the transition. Maybe revisit
             * this at some point, as these conditionals might not be needed at
             * all.
             */
            this.setState({
                annotationIndex: renderedAnnotationIndex
            })
        }
    }

    _handleAnnotationPrevious = (e) => {
        this.props.handleAnnotationSelect(e, -1)
    }

    _handleAnnotationNext = (e) => {
        this.props.handleAnnotationSelect(e, 1)
    }

    render() {
        const {
            /* eslint-disable no-unused-vars */
            handleAnnotationSelect,
            dispatch,
            /* eslint-enable no-unused-vars */

            canCarouselRender,
            isScoreShown,
            isTitleShown,
            isOverlayingAnnotation,
            inMain,

            renderedAnnotationIndex,
            isCarouselShown,
            selectedWikiIndex,
            ...other
        } = this.props

        /**
         * Annotation popup is in main, unless lyric column is expanded or
         * heightless.
         */
        if (Boolean(inMain) === isOverlayingAnnotation) {

            return null

        } else {
            const isVisible =
                    canCarouselRender &&
                    Boolean(renderedAnnotationIndex) &&

                    /**
                     * If an annotation is selected, always show in popup if
                     * it's a phone or lyric is expanded.
                     */
                    (
                        !isCarouselShown ||
                        isOverlayingAnnotation
                    ) &&

                    !isScoreShown &&
                    !isTitleShown &&
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
                    {...{
                        popupName: 'Annotation',
                        isVisible,
                        noAbsoluteFull: inMain,
                        displaysInOverlay: isOverlayingAnnotation,
                        handlePreviousClick: this._handleAnnotationPrevious,
                        handleNextClick: this._handleAnnotationNext
                    }}
                >
                    <Annotation {...other}
                        isAccessed
                        isSelected
                        {...{
                            annotationIndex
                        }}

                    />
                </Popup>
            )
        }
    }
}

export default connect(mapStateToProps)(AnnotationPopup)
