// Popup container for individual annotation section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AnnotationDispatcher from '../../../handlers/AnnotationHandler/Dispatcher'
import Annotation from '../../Annotation'
import Popup from '../../Popup'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    transientStore: { isOverlayingAnnotation },
    transientStore: {
        isPopupAnnotationVisible,
        popupAnnotationIndex
    }
}) => ({
    isOverlayingAnnotation,
    isPopupAnnotationVisible,
    popupAnnotationIndex
})

class AnnotationPopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        isOverlayingAnnotation: PropTypes.bool.isRequired,
        isPopupAnnotationVisible: PropTypes.bool.isRequired,
        popupAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        inMain: PropTypes.bool
    }

    _handleAnnotationPrevious = () => {
        this.dispatchAnnotationDirection(-1)
    }

    _handleAnnotationNext = () => {
        this.dispatchAnnotationDirection(1)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            isOverlayingAnnotation,
            isPopupAnnotationVisible,
            popupAnnotationIndex,
            inMain
        } = this.props

        /**
         * Annotation popup is in main, unless lyric column is expanded or
         * heightless.
         */
        return Boolean(inMain) !== isOverlayingAnnotation && (
            <Popup
                className={cx(
                    inMain && 'AnnotationPopup__inMain'
                )}
                showArrows
                bounceAnimate
                {...{
                    popupName: 'Annotation',
                    isVisible: isPopupAnnotationVisible,
                    noAbsoluteFull: inMain,
                    displaysInOverlay: isOverlayingAnnotation,
                    handlePreviousClick: this._handleAnnotationPrevious,
                    handleNextClick: this._handleAnnotationNext
                }}
            >
                <Annotation
                    isAccessed
                    isSelected
                    {...{ annotationIndex: popupAnnotationIndex }}
                />
                <AnnotationDispatcher {...{ getRefs: this._getRefs }} />
            </Popup>
        )
    }
}

export default connect(mapStateToProps)(AnnotationPopup)
