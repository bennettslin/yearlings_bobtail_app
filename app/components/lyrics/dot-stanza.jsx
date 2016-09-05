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
    selectedDotKeys

}) => {

    const { annotationIndex,
            dotKeys } = dotStanzaObject,

        isSelected = annotationIndex === selectedAnnotationIndex,

        // Hide entire stanza if dot key is not present.
        shouldShow = intersects(dotKeys, selectedDotKeys),
        onDotClick = e => onAnnotationClick(e, annotationIndex)

    return (shouldShow ?
        <div className="stanza">
            {/* This will break if dot stanzas ever have more than one dot. */}
            <DotsBlock
                selectedDotKeys={isSelected ? dotKeys : {}}
                presentDotKeys={dotKeys}
                onDotClick={onDotClick}
            />
        </div> : null
    )
}

export default DotStanza
