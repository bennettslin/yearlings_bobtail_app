// Component to iterate through array of text.

import React from 'react'
import PropTypes from 'prop-types'
import TextUnit from './text-unit'

/*************
 * CONTAINER *
 *************/

const TextBlock = ({

    text: textEntity,
    truncateMain,

...other }) => {
    const isArray = Array.isArray(textEntity)

    if (!isArray || truncateMain) {

        // Truncate if it's in the main verse but in the hidden lyric column.

        // FIXME: But really, this is better taken care of in CSS.
        return (
            <TextUnit {...other}
                text={truncateMain ? '\u2026' : textEntity}
            />
        )

    } else {
        return (
            <TextBlockView {...other}
                textArray={textEntity}
            />
        )
    }
}

TextBlock.propTypes = {
    // From parent.
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
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
