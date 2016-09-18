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
    selectedDotKeys,
    onAnchorClick,

...other }) => {

    const { annotationIndex,
            anchor,
            todo,
            dotKeys,
            wiki } = text,

        isSelected = annotationIndex && annotationIndex === selectedAnnotationIndex,
        intersectedDotKeys = getIntersection(dotKeys, selectedDotKeys),

        /**
         * If it's an annotation, then the argument passed to the
         * click handler is the annotation index. Otherwise, it's a
         * reference, and the argument is a url string.
         */
        clickHandlerArgument = annotationIndex || wiki,
        onClick = !isSelected ? e => onAnchorClick(e, clickHandlerArgument) : null

    return (
        <AnchorBlockView {...other}
            hasTodo={todo}
            isSelected={isSelected}
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

    // From controller.
    hasTodo,
    isSelected,
    dotKeys,
    anchorText,
    onClick

}) => (

    <span>
        {/* This non-anchor space negates the space that starts the text in the anchor tag. Kind of hackish, but there are no immediate solutions since two anchor tags next to each other have no other element between them. */}
        { !beginsNewLine ? ' ' : null }
        <a
            className={`anchor-block ${isSelected ? '' : 'enabled'}${hasTodo ? ' todo' : ''}`}
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
