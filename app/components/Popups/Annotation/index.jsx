// Popup container for individual annotation section.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationDispatcher from '../../../handlers/Annotation/Dispatcher'
import Annotation from '../../Annotation'
import Popup from '../../Popup'
import './style'
import {
    mapIsOverlayingAnnotation,
    mapIsPopupAnnotationVisible,
    mapPopupAnnotationIndex
} from '../../../redux/transient/selectors'

const mapStateToProps = state => {
    const
        isOverlayingAnnotation = mapIsOverlayingAnnotation(state),
        isPopupAnnotationVisible = mapIsPopupAnnotationVisible(state),
        popupAnnotationIndex = mapPopupAnnotationIndex(state)

    return {
        isOverlayingAnnotation,
        isPopupAnnotationVisible,
        popupAnnotationIndex
    }
}

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

    getDispatchAnnotation = dispatch => {
        if (dispatch) {
            this.dispatchAnnotationDirection = dispatch.dispatchAnnotationDirection
        }
    }

    render() {
        const {
            isOverlayingAnnotation,
            isPopupAnnotationVisible,
            popupAnnotationIndex: annotationIndex,
            inMain
        } = this.props

        return (
            <Popup
                doMountonEnter
                doUnmountOnExit
                showArrows
                bounceAnimate
                noBoxShadow
                {...{
                    popupName: 'AnnotationPopup',
                    isVisible:
                        /**
                         * Annotation popup is in main, unless lyric column is
                         * expanded or heightless.
                         */
                        Boolean(inMain) !== isOverlayingAnnotation &&
                        isPopupAnnotationVisible,
                    noAbsoluteFull: inMain,
                    displaysInOverlay: isOverlayingAnnotation,
                    handlePreviousClick: this._handleAnnotationPrevious,
                    handleNextClick: this._handleAnnotationNext
                }}
            >
                <Annotation
                    isAccessed
                    isSelected
                    {...{ annotationIndex }}
                />
                <AnnotationDispatcher {...{ ref: this.getDispatchAnnotation }} />
            </Popup>
        )
    }
}

export default connect(mapStateToProps)(AnnotationPopup)
