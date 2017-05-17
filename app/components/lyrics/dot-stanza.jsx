import React from 'react'
import classnames from 'classnames'
import DotAnchorBlock from '../dot/dot-anchor-block'

/*************
 * CONTAINER *
 *************/

const DotStanza = ({

    dotStanzaObject,
    selectedAnnotationIndex,
    accessedAnnotationIndex,
    handleLyricAnnotationSelect,

...other }) => {

    const { annotationIndex,
            dotKeys } = dotStanzaObject,

        isSelected = annotationIndex === selectedAnnotationIndex,
        accessHighlighted = annotationIndex === accessedAnnotationIndex,

        handleDotAnchorSelect = e => handleLyricAnnotationSelect(e, annotationIndex)

    return (
        <DotStanzaView {...other}
            isSelected={isSelected}
            accessHighlighted={accessHighlighted}
            dotKeys={dotKeys}
            annotationIndex={annotationIndex}
            handleDotAnchorSelect={handleDotAnchorSelect}
        />
    )
}

const DotStanzaView = ({

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

export default DotStanza
