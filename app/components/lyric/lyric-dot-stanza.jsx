// Component to show single dot anchor as its own stanza.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import DotAnchor from '../dot/dot-anchor'

/*************
 * CONTAINER *
 *************/

const LyricDotStanza = ({

    dotStanzaObject,
    accessedAnnotationIndex,
    selectedAnnotationIndex,
    handleLyricAnnotationSelect,

...other }) => {

    const { annotationIndex,
            dotKeys } = dotStanzaObject,

        isSelected = annotationIndex === selectedAnnotationIndex,
        accessHighlighted = annotationIndex === accessedAnnotationIndex,

        handleDotButtonClick = e => handleLyricAnnotationSelect(e, annotationIndex)

    return (
        <LyricDotStanzaView {...other}
            isSelected={isSelected}
            accessHighlighted={accessHighlighted}
            dotKeys={dotKeys}
            annotationIndex={annotationIndex}
            handleDotButtonClick={handleDotButtonClick}
        />
    )
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
