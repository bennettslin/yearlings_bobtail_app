// Component to show single dot anchor as its own stanza.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import DotAnchor from '../Dot/DotAnchor'

const mapStateToProps = ({
    accessedAnnotationIndex,
    selectedAnnotationIndex
}) => ({
    accessedAnnotationIndex,
    selectedAnnotationIndex
})

/*************
 * CONTAINER *
 *************/

class LyricStanzaDot extends Component {

    static propTypes = {
        // Through Redux.
        accessedAnnotationIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        dotStanzaObject: PropTypes.object.isRequired,
        handleLyricAnnotationSelect: PropTypes.func.isRequired
    }

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

        // FIXME: Ideal to get dotStanza object from indices.
        const { dotStanzaObject,
                accessedAnnotationIndex,
                selectedAnnotationIndex,

                /* eslint-disable no-unused-vars */
                handleLyricAnnotationSelect } = this.props,
                /* eslint-enable no-unused-vars */

            { annotationIndex,
              dotKeys } = dotStanzaObject,

            isSelected = annotationIndex === selectedAnnotationIndex,
            accessHighlighted = annotationIndex === accessedAnnotationIndex

        return (
            <LyricDotStanzaView
                dotKeys={dotKeys}
                isSelected={isSelected}
                accessHighlighted={accessHighlighted}
                annotationIndex={annotationIndex}
                handleDotButtonClick={this._handleDotButtonClick}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const lyricDotStanzaViewPropTypes = {
    // From parent.
    dotKeys: PropTypes.object.isRequired,
    annotationIndex: PropTypes.number.isRequired
},

LyricDotStanzaView = ({

    // From controller.
    dotKeys,
    annotationIndex,

...other }) => (

    <div className={cx(
        'LyricStanzaDot',
        'stanza-block',

        // Show and hide dot stanza block in and out based on dot keys.
        dotKeys
    )}>
        <div className={cx(
            'LyricStanzaDot-anchor-block',

            // Scroll to dot stanza block upon annotation selection.
            annotationIndex && `LyricAnnotation__scrollChild__${annotationIndex}`
        )}>
            <DotAnchor {...other}
                dotKeys={dotKeys}
            />
        </div>
    </div>
)

LyricDotStanzaView.propTypes = lyricDotStanzaViewPropTypes

export default connect(mapStateToProps)(LyricStanzaDot)
