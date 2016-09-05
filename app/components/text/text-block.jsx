import React from 'react'
import AnchorBlock from './anchor-block'
import TextUnit from './text-unit'

/*************
 * CONTAINER *
 *************/

const TextBlock = (props) => {

    const { text } = props,

        isArray = Array.isArray(text)

    return (typeof text === 'string' || !isArray) ? (
            <TextUnit {...props} />
        ) : (
            <TextBlockView {...props} />
        )
}

/****************
 * PRESENTATION *
 ****************/

const TextBlockView = ({

    // From props.
    text,

...other }) => (
    <span>
        {text.map((textElement, index) => (
                <TextBlock {...other}
                    key={index}
                    text={textElement}
                    beginsNewLine={index === 0}
                />
            )
        )}
    </span>
)

export default TextBlock
