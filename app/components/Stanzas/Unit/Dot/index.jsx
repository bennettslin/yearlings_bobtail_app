// Component to show single dot anchor as its own stanza.

import React, { memo, PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateAnnotationStore } from '../../../../redux/annotation/action'

import Anchor from '../../../Anchor'

import { getPrefixedDotLetterClassNames } from '../../../../helpers/dot'

import { LYRIC_ANNOTATION_SCROLL } from '../../../../constants/scroll'

const mapStateToProps = state => {
    const {
        accessStore: {
            isAccessedIndexedAnchorShown,
            accessedAnnotationIndex
        },
        lyricStore: { lyricAnnotationIndex },
        activatedStore: { isActivated },
        sliderStore: { isSliderMoving }
    } = state

    return {
        isAccessedIndexedAnchorShown,
        accessedAnnotationIndex,
        lyricAnnotationIndex,
        isActivated,
        isSliderMoving
    }
}

/*************
 * CONTAINER *
 *************/

class UnitDot extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessedIndexedAnchorShown: PropTypes.bool.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isActivated: PropTypes.bool.isRequired,
        updateAnnotationStore: PropTypes.func.isRequired,

        // From parent.
        unitDot: PropTypes.object.isRequired,
        setLyricAnnotationElement: PropTypes.func.isRequired
    }

    _handleDotButtonClick = () => {
        const {
                unitDot: { annotationIndex },
                lyricAnnotationIndex,
                isSliderMoving,
                isActivated
            } = this.props,

            isSelected = annotationIndex === lyricAnnotationIndex

        if (isSelected || isSliderMoving || isActivated) {
            return false
        }

        this.props.updateAnnotationStore({
            queuedAnnotationIndex: annotationIndex
        })
        return true
    }

    setLyricAnnotationElement = node => {
        this.props.setLyricAnnotationElement({
            node,
            index: this.props.unitDot.annotationIndex
        })
    }

    render() {

        // TODO: Ideal to get unitDot object from indices?
        const {
                unitDot: {
                    annotationIndex,
                    dotKeys
                },
                lyricAnnotationIndex,
                isAccessedIndexedAnchorShown,
                accessedAnnotationIndex
            } = this.props,

            isAccessed =
                isAccessedIndexedAnchorShown &&
                annotationIndex === accessedAnnotationIndex,

            isSelected =
                annotationIndex === lyricAnnotationIndex

        return (
            <UnitDotView
                {...{
                    dotKeys,
                    isSelected,
                    isAccessed,
                    annotationIndex,
                    handleAnchorClick: this._handleDotButtonClick,
                    setLyricAnnotationElement: this.setLyricAnnotationElement
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
        setLyricAnnotationElement: PropTypes.func.isRequired
    },

    UnitDotView = ({
        // From controller.
        dotKeys,
        annotationIndex,
        setLyricAnnotationElement,
        ...other
    }) => {

        return (
            <div
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
                <Anchor
                    {...other}
                    {...{
                        stanzaDotKeys: dotKeys,
                        setLyricAnnotationElement
                    }}
                />
            </div>
        )
    }

UnitDotView.propTypes = propTypes

export default connect(
    mapStateToProps,
    { updateAnnotationStore }
)(memo(UnitDot))
