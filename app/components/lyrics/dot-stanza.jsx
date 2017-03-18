import React from 'react'
import DotBlock from '../dot/dot-block'
import { getIntersection } from 'helpers/dot-helper'
import { LYRIC_ANNOTATION_ELEMENT } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const DotStanza = ({

    handleLyricAnnotationSelect,
    dotStanzaObject,
    selectedAnnotationIndex,
    selectedDotKeys,
    accessedAnnotationIndex,
    accessedLyricElement,

...other }) => {

    const { annotationIndex,
            dotKeys } = dotStanzaObject,

        isSelected = annotationIndex === selectedAnnotationIndex,
        accessHighlighted = accessedAnnotationIndex === annotationIndex && accessedLyricElement === LYRIC_ANNOTATION_ELEMENT,

        // Hide dot keys that are not present.
        intersectedDotKeys = getIntersection(dotKeys, selectedDotKeys),
        handleDotKeyToggle = e => handleLyricAnnotationSelect(e, annotationIndex)

    return (intersectedDotKeys &&
        <DotStanzaView {...other}
            annotationIndex={annotationIndex}
            isSelected={isSelected}
            dotKeys={intersectedDotKeys}
            handleDotKeyToggle={handleDotKeyToggle}
            accessHighlighted={accessHighlighted}
        />
    )
}

const DotStanzaView = ({

    // From controller.
    isSelected,
    dotKeys,
    accessHighlighted,

...other }) => (

    <div className={`stanza${accessHighlighted ? ' access-highlighted' : ''}`}>
        <DotBlock {...other}
            onlyShowFirstDotKey={true}
            selectedDotKeys={isSelected ? dotKeys : {}}
            presentDotKeys={dotKeys}
            inDotStanza={true}
        />
    </div>
)

export default DotStanza
