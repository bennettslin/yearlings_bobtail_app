// Component to show single dot anchor as its own stanza.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DotAnchor from '../../Anchor/DotAnchor'

import { getPrefixPrependedClassNames } from '../../../helpers/domHelper'

import { LYRIC_ANNOTATION_SCROLL } from '../../../constants/dom'

const mapStateToProps = ({
    canLyricRender,
    accessedAnnotationIndex,
    renderableStore,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    interactivatedVerseIndex,
    isLyricExpanded
}) => ({
    canLyricRender,
    accessedAnnotationIndex,
    renderableAnnotationIndex: renderableStore.renderableAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    interactivatedVerseIndex,
    isLyricExpanded
})

/*************
 * CONTAINER *
 *************/

class StanzaDot extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,
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
        return nextProps.canLyricRender
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
                isLastStanza,
                dotStanzaObject,
                accessedAnnotationIndex,
                renderableAnnotationIndex,
                selectedCarouselNavIndex,
                selectedDotsIndex,
                interactivatedVerseIndex,
                isLyricExpanded
            } = this.props,

            { annotationIndex,
              dotKeys } = dotStanzaObject,

            isAccessed =
                /**
                 * TODO: This conditional is repeated in Carousel,
                 * StanzaDot, and TextLyricAnchor. Consolidate?
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
            <StanzaDotView
                setRef={this.setLyricAnnotationRef}
                dotKeys={dotKeys}
                isSelected={isSelected}
                isAccessed={isAccessed}
                isLastStanza={isLastStanza}
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
    isLastStanza: PropTypes.bool.isRequired,
    dotKeys: PropTypes.object.isRequired,
    annotationIndex: PropTypes.number.isRequired,
    setRef: PropTypes.func.isRequired
},

StanzaDotView = ({

    // From controller.
    dotKeys,
    annotationIndex,
    isLastStanza,
    setRef,

...other }) => {

    return (
        <div
            key={annotationIndex}
            ref={setRef}
            className={cx(
                'StanzaDot',
                'Stanza__column',

                isLastStanza && 'StanzaDot__lastStanza',

                // Scroll to dot stanza block upon annotation selection.
                annotationIndex &&
                    `${LYRIC_ANNOTATION_SCROLL}__${annotationIndex}`,

                // Show and hide dot stanza block in and out based on dot keys.
                getPrefixPrependedClassNames(dotKeys, 'StanzaDot')
            )}
        >
            <DotAnchor {...other}
                inStanza
                stanzaDotKeys={dotKeys}
            />
        </div>
    )
}

StanzaDotView.propTypes = propTypes

export default connect(mapStateToProps)(StanzaDot)
