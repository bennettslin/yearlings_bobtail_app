// Component to show single dot anchor as its own stanza.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DotAnchor from '../Anchor/DotAnchor'

import { getPrefixPrependedClassNames } from '../../helpers/domHelper'

import { LYRIC_ANNOTATION_SCROLL } from '../../constants/dom'

const mapStateToProps = ({
    canLyricRender,
    accessedAnnotationIndex,
    renderableStore,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    interactivatedVerseIndex
}) => ({
    canLyricRender,
    accessedAnnotationIndex,
    renderableAnnotationIndex: renderableStore.renderableAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    interactivatedVerseIndex
})

/*************
 * CONTAINER *
 *************/

class LyricStanzaDot extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,

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

        // FIXME: Ideal to get dotStanza object from indices.
        const {
                isLastStanza,
                dotStanzaObject,
                accessedAnnotationIndex,
                renderableAnnotationIndex,
                selectedCarouselNavIndex,
                selectedDotsIndex,
                interactivatedVerseIndex
            } = this.props,

            { annotationIndex,
              dotKeys } = dotStanzaObject,

            isAccessed =
                /**
                 * TODO: This conditional is repeated in Carousel,
                 * LyricStanzaDot, and TextLyricAnchor.
                 */
                !selectedDotsIndex &&
                interactivatedVerseIndex < 0 &&
                Boolean(selectedCarouselNavIndex) &&

                annotationIndex === accessedAnnotationIndex,

            isSelected =
                annotationIndex === renderableAnnotationIndex

        return (
            <LyricDotStanzaView
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

const lyricDotStanzaViewPropTypes = {
    // From parent.
    isLastStanza: PropTypes.bool.isRequired,
    dotKeys: PropTypes.object.isRequired,
    annotationIndex: PropTypes.number.isRequired,
    setRef: PropTypes.func.isRequired
},

LyricDotStanzaView = ({

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
                'LyricStanzaDot',
                'LyricStanza__column',

                isLastStanza && 'LyricStanzaDot__lastStanza',

                // Scroll to dot stanza block upon annotation selection.
                annotationIndex &&
                    `${LYRIC_ANNOTATION_SCROLL}__${annotationIndex}`,

                // Show and hide dot stanza block in and out based on dot keys.
                getPrefixPrependedClassNames(dotKeys, 'LyricStanzaDot')
            )}
        >
            <DotAnchor {...other}
                inStanza
                stanzaDotKeys={dotKeys}
            />
        </div>
    )
}

LyricDotStanzaView.propTypes = lyricDotStanzaViewPropTypes

export default connect(mapStateToProps)(LyricStanzaDot)
