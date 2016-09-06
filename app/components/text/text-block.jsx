import React, { Component } from 'react'

import AnchorBlock from './anchor-block'
import TextUnit from './text-unit'

/*************
 * CONTAINER *
 *************/

class TextBlock extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { text } = this.props,

            isArray = Array.isArray(text)

        return (typeof text === 'string' || !isArray) ? (
                <TextUnit {...this.props} />
            ) : (
                <TextBlockView {...this.props} />
            )
    }
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
