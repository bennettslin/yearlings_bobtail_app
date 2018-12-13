// Component to show single dot anchor as its own stanza.

import React, { memo, Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAnnotationStore } from 'flux/annotation/action'

import AnchorDot from '../../../Anchor/AnchorDot'

import { getPrefixedDotLetterClassNames } from 'helpers/dot'
import { getPropsAreShallowEqual } from 'helpers/general'

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
        updateAnnotationStore: PropTypes.func.isRequired,

        // From parent.
        dotStanzaObject: PropTypes.object.isRequired,
        setLyricAnnotationElement: PropTypes.func.isRequired
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
            this.props.updateAnnotationStore({
                queuedAnnotationIndex: annotationIndex
            })
        }
    }

    setLyricAnnotationElement = (node) => {
        this.props.setLyricAnnotationElement({
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
            <UnitDotView
                {...{
                    setRef: this.setLyricAnnotationElement,
                    dotKeys,
                    isSelected,
                    isAccessed,
                    isLastUnit,
                    annotationIndex,
                    handleAnchorClick: this._handleDotButtonClick
                }}
            />
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

    UnitDotView = memo(({
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
                {/* Scroll to unit dot at bottom, not unit middle. */}
                <div ref={setRef}>
                    <AnchorDot {...other}
                        inStanza
                        stanzaDotKeys={dotKeys}
                    />
                </div>
            </div>
        )
    })

UnitDotView.propTypes = propTypes

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAnnotationStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(UnitDot)
