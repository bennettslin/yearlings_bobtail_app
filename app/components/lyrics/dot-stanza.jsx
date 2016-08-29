import React from 'react'
import DotsBlock from '../dots/dots-block'

// FIXME: Parent should check intersects, child should check getIntersection. Also see annotation card.
import { intersects } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const DotStanza = (props) => {

    const { onAnnotationClick,
            dotStanzaObject,
            activeDotKeys } = props,

        { annotationIndex,
          dotKeys } = dotStanzaObject,

        shouldShow = intersects(dotKeys, activeDotKeys),
        onDotClick = () => onAnnotationClick(annotationIndex)

    return (shouldShow ?
        <div className="stanza">
            {/* This will break if dot stanzas ever have more than one dot. */}
            <DotsBlock
                activeDotKeys={dotKeys}
                presentDotKeys={dotKeys}
                onDotClick={onDotClick}
            />
        </div> : null
    )
}

export default DotStanza
