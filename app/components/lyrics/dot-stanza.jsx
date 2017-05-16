import React from 'react'
import classnames from 'classnames'
import DotButton from '../dot/dot-button'
// import { getIntersection } from '../../helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const DotStanza = ({

    handleLyricAnnotationSelect,
    dotStanzaObject,
    selectedAnnotationIndex,
    accessedAnnotationIndex,

...other }) => {

    const { annotationIndex,
            dotKeys: annotationDotKeys } = dotStanzaObject,

        isSelected = annotationIndex === selectedAnnotationIndex,
        accessHighlighted = accessedAnnotationIndex === annotationIndex,

        handleDotStanzaSelect = e => handleLyricAnnotationSelect(e, annotationIndex)

    return (annotationDotKeys &&
        <DotStanzaView {...other}
            annotationIndex={annotationIndex}
            isSelected={isSelected}
            dotStanzaKeys={annotationDotKeys}
            handleDotStanzaSelect={handleDotStanzaSelect}
            accessHighlighted={accessHighlighted}
        />
    )
}

const DotStanzaView = ({

    // From controller.
    isSelected,
    shouldShowDotStanza,
    dotStanzaKeys,
    accessHighlighted,
    annotationIndex,

...other }) => (

    <div className={classnames(
        'stanza-block',
        'dots-stanza',
        { 'dots-stanza-hidden': !shouldShowDotStanza,
          'selected': isSelected,
          'access-highlighted': accessHighlighted && !isSelected }
    )}>
        <div className={classnames(
            'stanza',
            annotationIndex && `annotation-${annotationIndex}`
        )}>
            <span className="underline-bar"></span>
            <DotButton {...other}
                dotStanzaKeys={dotStanzaKeys}
                isSelected={isSelected}
            />
        </div>
    </div>
)

export default DotStanza
