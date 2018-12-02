// Component to show single dot anchor as its own stanza.

import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AnnotationDispatcher from '../../../../handlers/AnnotationHandler/Dispatcher'
import AnchorDot from '../../../Anchor/AnchorDot'

import { getPrefixedDotLetterClassNames } from 'helpers/dotHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import { LYRIC_ANNOTATION_SCROLL } from 'constants/dom'

const mapStateToProps = ({
    accessStore: { accessedAnnotationIndex },
    renderStore: { canLyricRender },
    renderedStore: { renderedAnnotationIndex },
    toggleStore: {
        isAccessOn,
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded
    },
    sessionStore: { interactivatedVerseIndex }
}) => ({
    accessedAnnotationIndex,
    isAccessOn,
    canLyricRender,
    isLyricExpanded,
    renderedAnnotationIndex,
    isCarouselShown,
    isDotsSlideShown,
    interactivatedVerseIndex
})

/*************
 * CONTAINER *
 *************/

class UnitDot extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        dotStanzaObject: PropTypes.object.isRequired,
        setLyricAnnotation: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _handleDotButtonClick = () => {
        const {
                dotStanzaObject,
                renderedAnnotationIndex
            } = this.props,
            { annotationIndex } = dotStanzaObject,

            isSelected = annotationIndex === renderedAnnotationIndex

        if (!isSelected) {
            this.dispatchAnnotationIndex({
                selectedAnnotationIndex: annotationIndex
            })
        }
    }

    setLyricAnnotation = (node) => {
        this.props.setLyricAnnotation({
            node,
            index: this.props.dotStanzaObject.annotationIndex
        })
    }

    render() {

        // FIXME: Ideal to get dotCard object from indices.
        const {
                isLastUnit,
                dotStanzaObject,
                renderedAnnotationIndex,
                accessedAnnotationIndex,
                isAccessOn,
                isCarouselShown,
                isDotsSlideShown,
                interactivatedVerseIndex,
                isLyricExpanded
            } = this.props,

            {
                annotationIndex,
                dotKeys
            } = dotStanzaObject,

            isAccessed =
                isAccessOn &&

                /**
                 * TODO: This conditional is repeated in Carousel,
                 * UnitDot, and TextLyricAnchor. Consolidate?
                 */
                !isDotsSlideShown &&
                interactivatedVerseIndex < 0 &&
                (
                    isCarouselShown ||
                    isLyricExpanded
                ) &&
                annotationIndex === accessedAnnotationIndex,

            isSelected =
                annotationIndex === renderedAnnotationIndex

        return (
            <___>
                <UnitDotView
                    {...{
                        setRef: this.setLyricAnnotation,
                        dotKeys,
                        isSelected,
                        isAccessed,
                        isLastUnit,
                        annotationIndex,
                        handleAnchorClick: this._handleDotButtonClick
                    }}
                />
                <AnnotationDispatcher {...{ getDispatch: this }} />
            </___>
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const propTypes = {
    // From parent.
        isLastUnit: PropTypes.bool.isRequired,
        dotKeys: PropTypes.object.isRequired,
        annotationIndex: PropTypes.number.isRequired,
        setRef: PropTypes.func.isRequired
    },

    UnitDotView = ({
    // From controller.
        dotKeys,
        annotationIndex,
        isLastUnit,
        setRef,

        ...other
    }) => {

        return (
            <div
                key={annotationIndex}
                ref={setRef}
                className={cx(
                    'UnitDot',
                    'Unit__column',

                    isLastUnit && 'UnitDot__lastStanza',

                    // Scroll to dot stanza block upon annotation selection.
                    annotationIndex &&
                    `${LYRIC_ANNOTATION_SCROLL}__${annotationIndex}`,

                    // Show and hide dot stanza block in and out based on dot keys.
                    getPrefixedDotLetterClassNames(
                        dotKeys,
                        // "Child unit dot letter."
                        'CuD'
                    )
                )}
            >
                <AnchorDot {...other}
                    inStanza
                    stanzaDotKeys={dotKeys}
                />
            </div>
        )
    }

UnitDotView.propTypes = propTypes

export default connect(mapStateToProps)(UnitDot)
