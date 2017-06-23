// Component to show single dot anchor as its own stanza.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import DotAnchor from '../dot/dot-anchor'

/*************
 * CONTAINER *
 *************/

class LyricDotStanza extends Component {

    constructor(props) {
        super(props)

        this._handleDotButtonClick = this._handleDotButtonClick.bind(this)
    }

    _handleDotButtonClick(e) {
        const { dotStanzaObject } = this.props,
            { annotationIndex } = dotStanzaObject

        this.props.handleLyricAnnotationSelect(e, annotationIndex)
    }

    render() {
        const { dotStanzaObject,
                accessedAnnotationIndex,
                selectedAnnotationIndex,

                /* eslint-disable no-unused-vars */
                handleLyricAnnotationSelect,
                /* eslint-enable no-unused-vars */

                ...other } = this.props,

            { annotationIndex,
              dotKeys } = dotStanzaObject,

            isSelected = annotationIndex === selectedAnnotationIndex,
            accessHighlighted = annotationIndex === accessedAnnotationIndex

        return (
            <LyricDotStanzaView {...other}
                dotKeys={dotKeys}
                isSelected={isSelected}
                accessHighlighted={accessHighlighted}
                annotationIndex={annotationIndex}
                handleDotButtonClick={this._handleDotButtonClick}
            />
        )
    }
}

LyricDotStanza.propTypes = {
    // Through Redux.
    accessedAnnotationIndex: PropTypes.number.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,

    // From parent.
    dotStanzaObject: PropTypes.object.isRequired,
    handleLyricAnnotationSelect: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const LyricDotStanzaView = ({

    // From controller.
    dotKeys,
    annotationIndex,

...other }) => (

    <div className={classnames(
        'stanza-block',
        'dot-stanza',

        // Show and hide dot stanza block in and out based on dot keys.
        dotKeys
    )}>
        <div className={classnames(
            'dot-stanza-anchor-block',

            // Scroll to dot stanza block upon annotation selection.
            annotationIndex && `annotation-${annotationIndex}`
        )}>
            <DotAnchor {...other}
                dotKeys={dotKeys}
            />
        </div>
    </div>
)

LyricDotStanzaView.propTypes = {
    // From parent.
    dotKeys: PropTypes.object.isRequired,
    annotationIndex: PropTypes.number.isRequired
}

export default connect(({
    accessedAnnotationIndex,
    selectedAnnotationIndex
}) => ({
    accessedAnnotationIndex,
    selectedAnnotationIndex
}))(LyricDotStanza)
