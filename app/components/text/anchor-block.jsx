import React from 'react'
import TextBlock from './text-block'
import DotsBlock from '../dots/dots-block'
import { getIntersection } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const AnchorBlock = ({

    text,
    selectedAnnotationIndex,
    selectedWikiIndex,
    selectedDotKeys,
    accessedAnnotationIndex,
    sectionAccessHighlighted,
    onAnchorClick,

...other }) => {

    const { annotationIndex,
            anchor,
            todo,
            dotKeys,
            wikiIndex } = text,

        isSelected = (annotationIndex && annotationIndex === selectedAnnotationIndex) || (wikiIndex && wikiIndex === selectedWikiIndex),
        intersectedDotKeys = getIntersection(dotKeys, selectedDotKeys),
        accessHighlighted = sectionAccessHighlighted && accessedAnnotationIndex === annotationIndex,

        /**
         * If it's an annotation, then the argument passed to the
         * click handler is the annotation index. Otherwise, it's a
         * reference, and the argument is a url string.
         */
        clickHandlerArgument = annotationIndex || wikiIndex,
        onClick = !isSelected ? e => onAnchorClick(e, clickHandlerArgument) : null

    return (
        <AnchorBlockView {...other}
            hasTodo={todo}
            isSelected={isSelected}
            annotationIndex={annotationIndex}
            accessHighlighted={accessHighlighted}
            wikiIndex={wikiIndex}
            dotKeys={intersectedDotKeys}
            anchorText={anchor}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AnchorBlockView = ({

    // From props.
    isLyric,
    beginsNewLine,
    accessHighlighted,

    // From controller.
    hasTodo,
    isSelected,
    annotationIndex,
    wikiIndex,
    dotKeys,
    anchorText,
    onClick

}) => (

    <span>
        {/* This non-anchor space negates the space that starts the text in the anchor tag. Kind of hackish, but there are no immediate solutions since two anchor tags next to each other have no other element between them. */}
        { !beginsNewLine ? ' ' : null }
        <a
            className={`anchor-block${accessHighlighted ? ' access-highlighted' : ''}${annotationIndex ? ' annotation-' + annotationIndex : ''}${wikiIndex ? ' wiki-' + wikiIndex : ''}${isSelected ? '' : ' enabled'}${hasTodo ? ' todo' : ''}`}
            onClick={onClick}
        >
            {isLyric ?
                <span className="underline-bar">
                </span> : null
            }
            {dotKeys ?
                <DotsBlock
                    inBackground={isSelected}
                    presentDotKeys={dotKeys}
                /> : null
            }
            {/* Only the first text span inside the anchor will forego space. */}
            <TextBlock
                isLyric={isLyric}
                text={anchorText}
                foregoSpace={true}
            />
        </a>
    </span>
)

export default AnchorBlock
