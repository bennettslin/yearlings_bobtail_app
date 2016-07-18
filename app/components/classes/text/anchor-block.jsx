import React from 'react';
import TextBlock from './text-block.jsx';
import DotsBlock from '../dots/dots-block.jsx';

/*************
 * CONTAINER *
 *************/

const AnchorBlock = (props) => {

    const { text } = props,

        hasTodo = text.todo,
        dotKeys = text.dotKeys,
        anchorText = text.anchor,

        /**
         * If it's an annotation, then the argument passed to the
         * click handler is the annotation index. Otherwise, it's a
         * reference, and the argument is a url string.
         */
        clickHandlerArgument = text.annotationIndex || text.urlString;

    return (
        <AnchorBlockView {...props}
            hasTodo={hasTodo}
            dotKeys={dotKeys}
            anchorText={anchorText}
            clickHandlerArgument={clickHandlerArgument}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const AnchorBlockView = ({

    // From props.
    isLyric,
    index,
    nestedIndex,
    onAnchorClick,

    // From controller.
    hasTodo,
    dotKeys,
    anchorText,
    clickHandlerArgument

}) => (

    <span>
        {/* FIXME: This non-anchor space negates the space that starts the text in the anchor tag. Kind of hackish. */}
        {index > 0 ?
            <span className="space"> </span> : null
        }
        <a className={'anchor-block' + (hasTodo ? ' todo' : '')}
            onClick={() => onAnchorClick(clickHandlerArgument)}
        >
            <span className="underline-bar"></span>
            <DotsBlock
                dotKeys={dotKeys}
                interactable={false}
            />
            <TextBlock
                isLyric={isLyric}
                text={anchorText}
                index={index}
                nestedIndex={nestedIndex}
                onAnchorClick={onAnchorClick}
            />
        </a>
    </span>
);

export default AnchorBlock;