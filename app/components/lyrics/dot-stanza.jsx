import React from 'react'
import classnames from 'classnames'
import DotButton from '../dot/dot-button'

/*************
 * CONTAINER *
 *************/

/**
 * FIXME: Now that this component is used both for dot stanzas and for carousel
 * titles, it is *really* messy. Consider refactoring.
 */

const DotStanza = ({

    dotStanzaObject,
    selectedAnnotationIndex,
    accessedAnnotationIndex,

    // Passed from carousel.
    isSelectedAnnotation,
    isAccessedAnnotation,

    handleLyricAnnotationSelect,
    handleTitleClick,

...other }) => {

    const { annotationIndex,
            dotKeys: annotationDotKeys } = dotStanzaObject,

        isSelected = typeof isSelectedAnnotation === 'boolean' ? isSelectedAnnotation : annotationIndex === selectedAnnotationIndex,
        accessHighlighted = typeof isAccessedAnnotation === 'boolean' ? isAccessedAnnotation : accessedAnnotationIndex === annotationIndex,

        // It's either in the carousel annotation title or a dots staza.
        handleDotStanzaSelect = other.inCarousel ? handleTitleClick : e => handleLyricAnnotationSelect(e, annotationIndex)

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
    inCarousel,
    isSelected,
    dotStanzaKeys,
    accessHighlighted,
    annotationIndex,

...other }) => (

    <div className={classnames(
        'stanza-block',
        'dots-stanza',
        dotStanzaKeys,
        { 'in-lyrics': !inCarousel,
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
