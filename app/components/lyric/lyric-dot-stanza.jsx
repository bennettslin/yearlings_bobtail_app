import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DotAnchorBlock from '../dot/dot-anchor-block'

/*************
 * CONTAINER *
 *************/

const LyricDotStanza = ({

    dotStanzaObject,
    selectedAnnotationIndex,
    accessedAnnotationIndex,
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
    dotStanzaObject: PropTypes.object.isRequired,
    accessedAnnotationIndex: PropTypes.number,
    selectedAnnotationIndex: PropTypes.number.isRequired,
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
            <DotAnchorBlock {...other}
                dotKeys={dotKeys}
            />
        </div>
    </div>
)

LyricDotStanzaView.propTypes = {
    dotKeys: PropTypes.object.isRequired,
    annotationIndex: PropTypes.number.isRequired
}

export default LyricDotStanza
