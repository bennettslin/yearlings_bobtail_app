import React from 'react'
import classnames from 'classnames'
import DotBlock from '../dot/dots-block'
import { getIntersection } from '../../helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const DotStanza = ({

    handleLyricAnnotationSelect,
    dotStanzaObject,
    selectedAnnotationIndex,
    selectedDotKeys,
    accessedAnnotationIndex,

...other }) => {

    const { annotationIndex,
            dotKeys } = dotStanzaObject,

        isSelected = annotationIndex === selectedAnnotationIndex,
        accessHighlighted = accessedAnnotationIndex === annotationIndex,

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

    <div className={classnames(
        'stanza',
        { 'selected': isSelected,
          'access-highlighted': accessHighlighted && !isSelected }
    )}>
        <DotBlock {...other}
            onlyShowFirstDotKey={true}
            selectedDotKeys={isSelected ? dotKeys : {}}
            presentDotKeys={dotKeys}
            inDotStanza={true}
        />
    </div>
)

export default DotStanza
