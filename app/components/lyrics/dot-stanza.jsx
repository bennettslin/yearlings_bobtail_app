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
            dotKeys: annotationDotKeys } = dotStanzaObject,

        isSelected = annotationIndex === selectedAnnotationIndex,
        accessHighlighted = accessedAnnotationIndex === annotationIndex,

        // Hide dot keys that are not present.
        shownDotKeys = getIntersection(annotationDotKeys, selectedDotKeys),
        handleDotStanzaSelect = e => handleLyricAnnotationSelect(e, annotationIndex)

    return (shownDotKeys &&
        <DotStanzaView {...other}
            annotationIndex={annotationIndex}
            isSelected={isSelected}
            shownDotKeys={shownDotKeys}
            handleDotStanzaSelect={handleDotStanzaSelect}
            accessHighlighted={accessHighlighted}
        />
    )
}

const DotStanzaView = ({

    // From controller.
    isSelected,
    shownDotKeys,
    accessHighlighted,
    annotationIndex,

...other }) => {

    const firstShownDotKey = ALL_DOT_KEYS_DOT_STANZA_ORDER.reduce((shownDotKey, dotKey) => {
        return shownDotKey || (shownDotKeys[dotKey] && dotKey)
    }, false)

    return (
        <div className={classnames(
            'stanza',
            annotationIndex && `annotation-${annotationIndex}`,
            { 'selected': isSelected,
              'access-highlighted': accessHighlighted && !isSelected }
        )}>
            <span className="underline-bar"></span>
            <DotButton {...other}
                dotKey={firstShownDotKey}
                isSelected={isSelected}
            />
        </div>
    )
}

export default DotStanza
