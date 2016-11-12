import React from 'react'
import DotsBlock from '../dots/dots-block'
import { getIntersection } from 'helpers/dot-helper'
import { LYRIC_ANNOTATION_ELEMENT } from 'helpers/constants'

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
    accessedLyricElement,

...other }) => {

    const { annotationIndex,
            dotKeys } = dotStanzaObject,

        isSelected = annotationIndex === selectedAnnotationIndex,
        accessHighlighted = sectionAccessHighlighted && accessedAnnotationIndex === annotationIndex && accessedLyricElement === LYRIC_ANNOTATION_ELEMENT,

        // Hide dot keys that are not present.
        intersectedDotKeys = getIntersection(dotKeys, selectedDotKeys),
        onDotClick = e => onAnnotationClick(e, annotationIndex)

    return (intersectedDotKeys ?
        <DotStanzaView {...other}
            annotationIndex={annotationIndex}
            isSelected={isSelected}
            dotKeys={intersectedDotKeys}
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
