// Component to iterate through array of text.

import React from 'react'
import PropTypes from 'prop-types'
import TextUnit from './text-unit'

/*************
 * CONTAINER *
 *************/

const TextBlock = ({

    text,
    truncateMain,

...other }) => {
    const isArray = Array.isArray(text)

    if (!isArray || truncateMain) {
        // Truncate if it's in the main verse but in the hidden lyric column.
        return (
            <TextUnit {...other}
                text={truncateMain ? '\u2026' : text}
            />
        )

    } else {
        return (
            <TextBlockView {...other}
                textArray={text}
            />
        )
    }
}

TextBlock.propTypes = {
    // From parent.
    text: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ]),
    truncateMain: PropTypes.bool
}

/****************
 * PRESENTATION *
 ****************/

const TextBlockView = ({

    textArray,
    inTextAnchor,

...other }) => (

    <span>
        {textArray.map((textElement, index) => (
                <TextBlock {...other}
                    key={index}
                    text={textElement}
                    inTextAnchor={inTextAnchor && index === 0}
                />
            )
        )}
    </span>
)

TextBlockView.propTypes = {
    // From parent.
    textArray: PropTypes.array.isRequired,
    inTextAnchor: PropTypes.bool
}

export default TextBlock
