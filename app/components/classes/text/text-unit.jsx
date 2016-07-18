import React from 'react';
import AnchorBlock from './anchor-block.jsx';
import FormattedText from './formatted-text.jsx';
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
    clickHandler

}) => (

    <i>
        <FormattedText
            isLyric={isLyric}
            text={text}
            index={index}
            nestedIndex={nestedIndex}
            clickHandler={clickHandler}
        />
    </i>

);

const EmphasisView = ({

    // From props.
    isLyric,
    text,
    nestedIndex,
    index,
    clickHandler

}) => (

    <em>
        <FormattedText
            isLyric={isLyric}
            text={text}
            index={index}
            nestedIndex={nestedIndex}
            clickHandler={clickHandler}
        />
    </em>

);

export default TextUnit;