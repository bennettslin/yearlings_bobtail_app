import React from 'react'
import TextBlock from './text-block'
import DotsBlock from '../dots/dots-block'
import { getIntersection } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const AnchorBlock = (props) => {

    const { text,
            activeDotKeys } = props,

        { annotationIndex,
          anchor: anchorText,
          todo: hasTodo,
          dotKeys,
          wiki } = text,

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
    dotKeys,
    anchorText,
    clickHandlerArgument

}) => (

    <span>
        {/* This non-anchor space negates the space that starts the text in the anchor tag. Kind of hackish, but there are no immediate solutions since two anchor tags next to each other have no other element between them. */}
        { !beginsNewLine ? ' ' : null }
        <a
            className={`anchor-block${hasTodo ? ' todo' : ''}`}
            onClick={() => onAnchorClick(clickHandlerArgument)}
        >
            {isLyric ?
                <span className="underline-bar">
                </span> : null
            }
            {dotKeys ?
                <DotsBlock
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
