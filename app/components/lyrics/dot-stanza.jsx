import React from 'react'
import classnames from 'classnames'
import DotButton from '../dot/dot-button'
import { getIntersection } from '../../helpers/dot-helper'
import { ALL_DOT_KEYS_DOT_STANZA_ORDER } from '../../helpers/constants'

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
    annotationIndex,

...other }) => {

    const firstPresentDotKey = ALL_DOT_KEYS_DOT_STANZA_ORDER.reduce((presentDotKey, dotKey) => {
        return presentDotKey || (dotKeys[dotKey] && dotKey)
    }, false)

    return (
        <div className={classnames(
            'stanza',
            annotationIndex && `annotation-${annotationIndex}`,
            { 'selected': isSelected,
              'access-highlighted': accessHighlighted && !isSelected }
        )}>
            <DotButton {...other}
                dotKey={firstPresentDotKey}
                isSelected={isSelected}
            />
        </div>
    )
}

export default DotStanza
