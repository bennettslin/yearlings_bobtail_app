import React from 'react'
import TextBlock from './text-block'
import DotsBlock from '../dots/dots-block'
import { getIntersection } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const AnchorBlock = (props) => {

    const { text,
            activeAnnotationIndex,
            activeDotKeys } = props,

        { annotationIndex,
          anchor: anchorText,
          todo: hasTodo,
          dotKeys,
          wiki } = text,

        isDisabled = annotationIndex && annotationIndex === activeAnnotationIndex,
        intersectedDotKeys = getIntersection(dotKeys, activeDotKeys),

        /**
         * If it's an annotation, then the argument passed to the
         * click handler is the annotation index. Otherwise, it's a
         * reference, and the argument is a url string.
         */
        clickHandlerArgument = annotationIndex || wiki

    return (
        <AnchorBlockView {...props}
            hasTodo={hasTodo}
            isDisabled={isDisabled}
            dotKeys={intersectedDotKeys}
            anchorText={anchorText}
            clickHandlerArgument={clickHandlerArgument}
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
    onAnchorClick,

    // From controller.
    hasTodo,
    isDisabled,
    dotKeys,
    anchorText,
    clickHandlerArgument

}) => (

    <span>
        {/* This non-anchor space negates the space that starts the text in the anchor tag. Kind of hackish, but there are no immediate solutions since two anchor tags next to each other have no other element between them. */}
        { !beginsNewLine ? ' ' : null }
        <a
            className={`anchor-block ${isDisabled ? 'disabled' : 'enabled'}${hasTodo ? ' todo' : ''}`}
            onClick={!isDisabled ? e => onAnchorClick(clickHandlerArgument, e) : null}
        >
            {isLyric ?
                <span className="underline-bar">
                </span> : null
            }
            {dotKeys ?
                <DotsBlock
                    isDisabled={isDisabled}
                    presentDotKeys={dotKeys}
                /> : null
            }
            <TextBlock
                isLyric={isLyric}
                isInAnchor={true}
                text={anchorText}
                onAnchorClick={onAnchorClick}
            />
        </a>
    </span>
)

export default AnchorBlock
