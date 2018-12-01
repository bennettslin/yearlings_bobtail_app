// Popup container for individual annotation section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Annotation from '../../Annotation'
import Popup from '../../Popup'

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
        inMain: PropTypes.bool,
        handleAnnotationDirectionSelect: PropTypes.func.isRequired
    }

    _handleAnnotationPrevious = (e) => {
        this.props.handleAnnotationDirectionSelect(e, -1)
    }

    _handleAnnotationNext = (e) => {
        this.props.handleAnnotationDirectionSelect(e, 1)
    }

    render() {
        const {
            /* eslint-disable no-unused-vars */
            handleAnnotationDirectionSelect,
            dispatch,
            /* eslint-enable no-unused-vars */

            isOverlayingAnnotation,
            isPopupAnnotationVisible,
            popupAnnotationIndex,
            inMain,
            ...other
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
                <Annotation {...other}
                    isAccessed
                    isSelected
                    {...{ annotationIndex: popupAnnotationIndex }}
                />
            </Popup>
        )
    }
}

export default connect(mapStateToProps)(AnnotationPopup)
