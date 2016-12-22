import React, { Component } from 'react'
import TextUnit from './text-unit'

/*************
 * CONTAINER *
 *************/

 // Making this a React component to attach ref for line width resizing.
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
    foregoSpace,
    forceForegoSpace,

...other }) => (
    <span>
        {text.map((textElement, index) => (
                <TextBlock {...other}
                    key={index}
                    text={textElement}
                    foregoSpace={(foregoSpace && index === 0) || forceForegoSpace}
                />
            )
        )}
    </span>
)

export default TextBlock
