import React from 'react'
import DotsBlock from '../dots/dots-block'
import { intersects } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const DotStanza = (props) => {

    const { onAnnotationClick,
            dotStanzaObject,
            activeAnnotationIndex,
            activeDotKeys } = props,

        { annotationIndex,
          dotKeys } = dotStanzaObject,

        isDisabled = annotationIndex === activeAnnotationIndex,
        shouldShow = intersects(dotKeys, activeDotKeys),
        onDotClick = () => onAnnotationClick(annotationIndex)

    return (shouldShow ?
        <div className="stanza">
            {/* This will break if dot stanzas ever have more than one dot. */}
            <DotsBlock
                isDisabled={isDisabled}
                activeDotKeys={dotKeys}
                presentDotKeys={dotKeys}
                onDotClick={onDotClick}
            />
        </div> : null
    )
}

export default DotStanza
