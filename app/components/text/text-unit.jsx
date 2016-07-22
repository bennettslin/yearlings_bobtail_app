import React, { Component } from 'react';
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
            <TextSpan {...props} />
        );

    } else if (typeof text === 'object') {
        if (text.italic) {
            return (
                <i>
                    <TextBlock {...props}
                        text={text.italic}
                    />
                </i>
            );

        } else if (text.emphasis) {
            return (
                <em>
                    <TextBlock {...props}
                        text={text.emphasis}
                    />
                </em>
            );

        } else if (text.anchor) {
            return (
                <AnchorBlock {...props} />
            );
        }
    }

    return null;
};

export default TextUnit;
