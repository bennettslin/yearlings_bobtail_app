import React, { Component } from 'react'
import TextUnit from './text-unit'

/*************
 * CONTAINER *
 *************/

 // Making this a React component to attach ref for line width resizing.
class TextBlock extends Component {

    render() {
        const { text,
                truncateMain } = this.props,

            isArray = Array.isArray(text)

        if (typeof text === 'string' || !isArray || truncateMain) {
            if (truncateMain) {
                return (
                    <TextUnit {...this.props}
                        text={'\u2026'}
                    />
                )
            } else {
                return <TextUnit {...this.props} />
            }
        } else {
            return <TextBlockView {...this.props} />
        }
    }
}

/****************
 * PRESENTATION *
 ****************/

const TextBlockView = ({

    // From props.
    text,
    foregoSpace,

...other }) => (
    <span>
        {text.map((textElement, index) => (
                <TextBlock {...other}
                    key={index}
                    text={textElement}
                    foregoSpace={foregoSpace && index === 0}
                />
            )
        )}
    </span>
)

export default TextBlock
