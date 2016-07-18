import React from 'react';
import AnchorBlock from './anchor-block.jsx';
import TextUnit from './text-unit.jsx';

/*************
 * CONTAINER *
 *************/

const TextBlock = (props) => {

    const { text } = props,

        isArray = Array.isArray(text);

    return (typeof text === 'string' || !isArray) ? (
            <TextUnit {...props} />
        ) : (
            <TextBlockView {...props} />
        );
}

/****************
 * PRESENTATION *
 ****************/

const TextBlockView = ({

    // From props.
    isLyric,
    text,
    clickHandler,
    index = 0,
    nestedIndex = 0

}) => (

    <span>
        {text.map((textElement, index) => {
            return (
                <TextBlock
                    key={index}
                    isLyric={isLyric}
                    text={textElement}
                    index={index}
                    nestedIndex={nestedIndex + 1}
                    clickHandler={clickHandler}
                />
            );
        })}
    </span>
);

export default TextBlock;