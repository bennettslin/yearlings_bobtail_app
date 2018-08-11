// Component to show single dot anchor as its own stanza.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DotAnchor from 'components/Anchor/DotAnchor/DotAnchor'

import { getPrefixedDotLetterClassNames } from 'helpers/dotHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import { LYRIC_ANNOTATION_SCROLL } from 'constants/dom'

const mapStateToProps = ({
    canLyricRender,
    accessedAnnotationIndex,
    selectedAccessIndex,
    renderableStore: { renderableAnnotationIndex },
    selectedCarouselNavIndex,
    selectedDotsIndex,
    interactivatedVerseIndex,
    isLyricExpanded
}) => ({
    canLyricRender,
    accessedAnnotationIndex,
    selectedAccessIndex,
    renderableAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    interactivatedVerseIndex,
    isLyricExpanded
})

/*************
 * CONTAINER *
 *************/

class UnitDot extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,
        selectedAccessIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,

        // From parent.
        dotStanzaObject: PropTypes.object.isRequired,
        handleLyricAnnotationSelect: PropTypes.func.isRequired,
        setLyricAnnotationRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleDotButtonClick = this._handleDotButtonClick.bind(this)
        this.setLyricAnnotationRef = this.setLyricAnnotationRef.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _handleDotButtonClick(e) {
        const { dotStanzaObject,
                renderableAnnotationIndex } = this.props,
            { annotationIndex } = dotStanzaObject,

            isSelected = annotationIndex === renderableAnnotationIndex

        if (!isSelected) {
            this.props.handleLyricAnnotationSelect(e, annotationIndex)
        }
    }

    setLyricAnnotationRef(node) {
        this.props.setLyricAnnotationRef({
            node,
            index: this.props.dotStanzaObject.annotationIndex
        })
    }

    render() {

        // FIXME: Ideal to get dotCard object from indices.
        const {
                isLastUnit,
                dotStanzaObject,
                renderableAnnotationIndex,
                accessedAnnotationIndex,
                selectedAccessIndex,
                selectedCarouselNavIndex,
                selectedDotsIndex,
                interactivatedVerseIndex,
                isLyricExpanded
            } = this.props,

            { annotationIndex,
              dotKeys } = dotStanzaObject,

            isAccessed =
                Boolean(selectedAccessIndex) &&

                /**
                 * TODO: This conditional is repeated in Carousel,
                 * UnitDot, and TextLyricAnchor. Consolidate?
                 */
                !selectedDotsIndex &&
                interactivatedVerseIndex < 0 &&
                (
                    selectedCarouselNavIndex ||
                    isLyricExpanded
                ) &&
                annotationIndex === accessedAnnotationIndex,

            isSelected =
                annotationIndex === renderableAnnotationIndex

        return (
            <UnitDotView
                setRef={this.setLyricAnnotationRef}
                dotKeys={dotKeys}
                isSelected={isSelected}
                isAccessed={isAccessed}
                isLastUnit={isLastUnit}
                annotationIndex={annotationIndex}
                handleAnchorClick={this._handleDotButtonClick}
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

UnitDotView = ({

    // From controller.
    dotKeys,
    annotationIndex,
    isLastUnit,
    setRef,

...other }) => {

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
            <DotAnchor {...other}
                inStanza
                stanzaDotKeys={dotKeys}
            />
        </div>
    )
}

UnitDotView.propTypes = propTypes

export default connect(mapStateToProps)(UnitDot)
