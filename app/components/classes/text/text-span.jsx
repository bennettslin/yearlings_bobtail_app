import React from 'react';

/*************
 * CONTAINER *
 *************/

const TextSpan = (props) => {

    const { isLyric,
            text } = props,

        /**
         * Subsequent spans of text on a line will begin with a space,
         * unless string begins with "'s."
         */
        hasFirstSpace = (text.indexOf('\'s') !== 0);

    // Add nonbreaking space between last two words if it's a lyric.
    let spacedText = text;
    if (isLyric) {
        const lastSpaceIndex = text.lastIndexOf(' ');
        if (lastSpaceIndex > -1) {
            spacedText = text.slice(0, lastSpaceIndex) +
                '\u00a0' +
                text.slice(lastSpaceIndex + 1);
        }
    }

    return (
        <TextSpanView {...props}
            hasFirstSpace={hasFirstSpace}
            text={spacedText}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const TextSpanView = ({

    // From controller.
    text,
    hasFirstSpace

}) => (
    <span
        className="text-block">
        {(hasFirstSpace ? ' ' : '') + text}
    </span>
);

export default TextSpan;