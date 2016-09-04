import React from 'react'
import DotsBlock from '../dots/dots-block'
import { intersects } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const DotStanza = (props) => {

    const { onAnnotationClick,
            dotStanzaObject,
            selectedAnnotationIndex,
            selectedDotKeys } = props,

        { annotationIndex,
          dotKeys } = dotStanzaObject,

        isDisabled = annotationIndex === selectedAnnotationIndex,
        shouldShow = intersects(dotKeys, selectedDotKeys),
        onDotClick = e => onAnnotationClick(e, annotationIndex)

    return (shouldShow ?
        <div className="stanza">
            {/* This will break if dot stanzas ever have more than one dot. */}
            <DotsBlock
                isDisabled={isDisabled}
                selectedDotKeys={dotKeys}
                presentDotKeys={dotKeys}
                onDotClick={onDotClick}
            />
        </div> : null
    )
}

export default DotStanza
