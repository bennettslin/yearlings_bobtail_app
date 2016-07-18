import React from 'react';
import AnchorBlock from './anchor-block.jsx';
import TextBlock from './text-block.jsx';
import TextSpan from './text-span.jsx';

/*************
 * CONTAINER *
 *************/

const TextUnit = (props) => {

    const { text } = props;

    if (typeof text === 'string') {
        return (
            <TextSpan {...props}
                text={text}
            />
        );

    } else {
        if (text.italic) {
            return (
                <ItalicView {...props}
                    text={text.italic}
                />
            );

        } else if (text.emphasis) {
            return (
                <EmphasisView {...props}
                    text={text.emphasis}
                />
            );

        } else if (text.anchor) {
            return (
                <AnchorBlock {...props}
                    text={text}
                />
            );
        } else {
            return null;
        }
    }
};

/****************
 * PRESENTATION *
 ****************/

const ItalicView = ({

    // From props.
    isLyric,
    text,
    nestedIndex,
    index,
    onAnchorClick

}) => (

    <i>
        <TextBlock
            isLyric={isLyric}
            text={text}
            index={index}
            nestedIndex={nestedIndex}
            onAnchorClick={onAnchorClick}
        />
    </i>
);

const EmphasisView = ({

    // From props.
    isLyric,
    text,
    nestedIndex,
    index,
    onAnchorClick

}) => (

    <em>
        <TextBlock
            isLyric={isLyric}
            text={text}
            index={index}
            nestedIndex={nestedIndex}
            onAnchorClick={onAnchorClick}
        />
    </em>
);

export default TextUnit;