import React from 'react'
import TextBlock from './text-block'
import DotsBlock from '../dots/dots-block'

/*************
 * CONTAINER *
 *************/

const AnchorBlock = (props) => {

    const { text } = props,

        hasTodo = text.todo,
        dotKeys = text.dotKeys || {},
        anchorText = text.anchor,

        /**
         * If it's an annotation, then the argument passed to the
         * click handler is the annotation index. Otherwise, it's a
         * reference, and the argument is a url string.
         */
        clickHandlerArgument = text.annotationIndex || text.wiki

    if (text.wiki && dotKeys) {
            dotKeys.wiki = true
    }

    return (
        <AnchorBlockView {...props}
            hasTodo={hasTodo}
            dotKeys={dotKeys}
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
            <span className="underline-bar"></span>
            <DotsBlock
                dotKeys={dotKeys}
            />
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
