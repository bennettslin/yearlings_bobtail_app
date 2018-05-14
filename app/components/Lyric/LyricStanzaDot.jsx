// Component to show single dot anchor as its own stanza.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DotAnchor from '../Anchor/DotAnchor'

import { getPrefixPrependedClassNames } from '../../helpers/domHelper'

const mapStateToProps = ({
    accessedAnnotationIndex,
    renderReadyAnnotationIndex
}) => ({
    accessedAnnotationIndex,
    renderReadyAnnotationIndex
})

/*************
 * CONTAINER *
 *************/

class LyricStanzaDot extends Component {

    static propTypes = {
        // Through Redux.
        accessedAnnotationIndex: PropTypes.number.isRequired,
        renderReadyAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        dotStanzaObject: PropTypes.object.isRequired,
        handleLyricAnnotationSelect: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleDotButtonClick = this._handleDotButtonClick.bind(this)
    }

    _handleDotButtonClick(e) {
        const { dotStanzaObject,
                renderReadyAnnotationIndex } = this.props,
            { annotationIndex } = dotStanzaObject,

            isSelected = annotationIndex === renderReadyAnnotationIndex

        if (!isSelected) {
            this.props.handleLyricAnnotationSelect(e, annotationIndex)
        }
    }

    render() {

        // FIXME: Ideal to get dotStanza object from indices.
        const { isLastStanza,
                dotStanzaObject,
                accessedAnnotationIndex,
                renderReadyAnnotationIndex } = this.props,

            { annotationIndex,
              dotKeys } = dotStanzaObject,

            isSelected = annotationIndex === renderReadyAnnotationIndex,
            isAccessed = annotationIndex === accessedAnnotationIndex

        return (
            <LyricDotStanzaView
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
    annotationIndex: PropTypes.number.isRequired
},

LyricDotStanzaView = ({

    // From controller.
    dotKeys,
    annotationIndex,
    isLastStanza,

...other }) => (

    <div className={cx(
        'LyricStanzaDot',
        'LyricStanza__column',

        isLastStanza && 'LyricStanzaDot__lastStanza',

        // Scroll to dot stanza block upon annotation selection.
        annotationIndex &&
            `LyricAnnotation__scrollChild__${annotationIndex}`,

        // Show and hide dot stanza block in and out based on dot keys.
        getPrefixPrependedClassNames(dotKeys, 'LyricStanzaDot')
    )}>
        <DotAnchor {...other}
            inStanza
            stanzaDotKeys={dotKeys}
        />
    </div>
)

LyricDotStanzaView.propTypes = lyricDotStanzaViewPropTypes

export default connect(mapStateToProps)(LyricStanzaDot)
