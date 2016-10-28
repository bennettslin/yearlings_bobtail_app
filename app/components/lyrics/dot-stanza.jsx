import React from 'react'
import DotsBlock from '../dots/dots-block'
import { intersects } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const DotStanza = ({

    onAnnotationClick,
    dotStanzaObject,
    accessedAnnotationIndex,
    accessedAnnotationOutlined,
    selectedAnnotationIndex,
    selectedDotKeys

}) => {

    const { annotationIndex,
            dotKeys } = dotStanzaObject,

        isSelected = annotationIndex === selectedAnnotationIndex,
        isAccessOutlined = annotationIndex === accessedAnnotationIndex && accessedAnnotationOutlined,

        // Hide entire stanza if dot key is not present.
        shouldShow = intersects(dotKeys, selectedDotKeys),
        onDotClick = e => onAnnotationClick(e, annotationIndex)

    return (shouldShow ?
        <DotStanzaView
            annotationIndex={annotationIndex}
            isSelected={isSelected}
            isAccessOutlined={isAccessOutlined}
            dotKeys={dotKeys}
            onDotClick={onDotClick}
        /> : null
    )
}

const DotStanzaView = ({

    // From controller.
    isSelected,
    dotKeys,

...other }) => (

    <div className="stanza">
        {/* This will break if dot stanzas ever have more than one dot. */}
        <DotsBlock {...other}
            selectedDotKeys={isSelected ? dotKeys : {}}
            presentDotKeys={dotKeys}
        />
    </div>
)

export default DotStanza
