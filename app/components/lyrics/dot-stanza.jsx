import React from 'react'
import DotsBlock from '../dots/dots-block'
import { intersects } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const DotStanza = ({

    onAnnotationClick,
    dotStanzaObject,
    selectedAnnotationIndex,
    selectedDotKeys,
    sectionAccessHighlighted,
    accessedAnnotationIndex,

...other }) => {

    const { annotationIndex,
            dotKeys } = dotStanzaObject,

        isSelected = annotationIndex === selectedAnnotationIndex,
        accessHighlighted = sectionAccessHighlighted && accessedAnnotationIndex === annotationIndex,

        // Hide entire stanza if dot key is not present.
        shouldShow = intersects(dotKeys, selectedDotKeys),
        onDotClick = e => onAnnotationClick(e, annotationIndex)

    return (shouldShow ?
        <DotStanzaView {...other}
            annotationIndex={annotationIndex}
            isSelected={isSelected}
            dotKeys={dotKeys}
            onDotClick={onDotClick}
            accessHighlighted={accessHighlighted}
        /> : null
    )
}

const DotStanzaView = ({

    // From controller.
    isSelected,
    dotKeys,
    accessHighlighted,

...other }) => (

    <div className={`stanza${accessHighlighted ? ' access-highlighted' : ''}`}>
        {/* This will break if dot stanzas ever have more than one dot. */}
        <DotsBlock {...other}
            selectedDotKeys={isSelected ? dotKeys : {}}
            presentDotKeys={dotKeys}
        />
    </div>
)

export default DotStanza
