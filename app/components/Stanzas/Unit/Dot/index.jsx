// Component to show single dot anchor as its own stanza.

import React, { memo, PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateAnnotationStore } from 'flux/annotation/action'

import Anchor from '../../../Anchor'

import { getPrefixedDotLetterClassNames } from 'helpers/dot'

import { LYRIC_ANNOTATION_SCROLL } from 'constants/scroll'

const mapStateToProps = ({
    accessStore: { accessedAnnotationIndex },
    lyricStore: { lyricAnnotationIndex },
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
    isLyricExpanded,
    lyricAnnotationIndex,
    isCarouselShown,
    isDotsSlideShown,
    interactivatedVerseIndex
})

/*************
 * CONTAINER *
 *************/

class UnitDot extends PureComponent {

    static propTypes = {
        // Through Redux.
        accessedAnnotationIndex: PropTypes.number.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateAnnotationStore: PropTypes.func.isRequired,

        // From parent.
        unitDot: PropTypes.object.isRequired,
        setLyricAnnotationElement: PropTypes.func.isRequired
    }

    _handleDotButtonClick = () => {
        const {
                unitDot: { annotationIndex },
                lyricAnnotationIndex
            } = this.props,

            isSelected = annotationIndex === lyricAnnotationIndex

        if (isSelected) {
            return false
        }

        this.props.updateAnnotationStore({
            queuedAnnotationIndex: annotationIndex
        })
        return true
    }

    setLyricAnnotationElement = (node) => {
        this.props.setLyricAnnotationElement({
            node,
            index: this.props.unitDot.annotationIndex
        })
    }

    render() {

        // FIXME: Ideal to get unitDot object from indices.
        const {
                unitDot,
                lyricAnnotationIndex,
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
            } = unitDot,

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
                annotationIndex === lyricAnnotationIndex

        return (
            <UnitDotView
                {...{
                    setRef: this.setLyricAnnotationElement,
                    dotKeys,
                    isSelected,
                    isAccessed,
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
        dotKeys: PropTypes.object.isRequired,
        annotationIndex: PropTypes.number.isRequired,
        setRef: PropTypes.func.isRequired
    },

    UnitDotView = memo(({
        // From controller.
        dotKeys,
        annotationIndex,
        setRef,
        ...other
    }) => {

        return (
            <div
                key={annotationIndex}
                className={cx(
                    'UnitDot',
                    'Unit__column',

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
                    <Anchor
                        {...other}
                        {...{ stanzaDotKeys: dotKeys }}
                    />
                </div>
            </div>
        )
    })

UnitDotView.propTypes = propTypes

export default connect(
    mapStateToProps,
    { updateAnnotationStore }
)(UnitDot)
