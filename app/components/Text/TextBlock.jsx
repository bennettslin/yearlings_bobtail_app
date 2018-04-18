// Component to iterate through array of text.

import React from 'react'
import PropTypes from 'prop-types'
import TextUnit from './TextUnit'

/*************
 * CONTAINER *
 *************/

const textBlockPropTypes = {
    // From parent.
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ])
},

TextBlock = ({

    text: textEntity,

...other }) => {
    const isArray = Array.isArray(textEntity)

    if (!isArray) {
        return (
            <TextUnit {...other}
                text={textEntity}
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

TextBlock.propTypes = textBlockPropTypes

/****************
 * PRESENTATION *
 ****************/

const textBlockViewPropTypes = {
    // From parent.
    textArray: PropTypes.array.isRequired,
    inTextAnchor: PropTypes.bool
},

TextBlockView = ({

    textArray,
    inTextAnchor,

...other }) => (
    textArray.map((textElement, index) => (
        <TextBlock {...other}
            key={index}
            text={textElement}
            inTextAnchor={inTextAnchor && index === 0}
        />
    ))
)

TextBlockView.propTypes = textBlockViewPropTypes

export default TextBlock
