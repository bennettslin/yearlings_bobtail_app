import React from 'react'
import AnchorBlock from './anchor-block'
import TextBlock from './text-block'
import TextSpan from './text-span'
import { intersects } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const TextUnit = ({

    text,
    selectedDotKeys,

...other }) => {

    if (typeof text === 'string') {
        return (
            <TextSpan {...other}
                text={text}
            />
        )

    } else if (typeof text === 'object') {
        if (text.italic) {
            return (
                <i>
                    <TextBlock {...other}
                        text={text.italic}
                        selectedDotKeys={selectedDotKeys}
                    />
                </i>
            )

        } else if (text.emphasis) {
            return (
                <em>
                    <TextBlock {...other}
                        text={text.emphasis}
                    />
                </em>
            )

        } else if (text.anchor) {
            const showAsAnchor = intersects(text.dotKeys, selectedDotKeys)
            return (showAsAnchor ?
                <AnchorBlock {...other}
                    text={text}
                    selectedDotKeys={selectedDotKeys}
                /> :
                <TextBlock {...other}
                    text={text.anchor}
                />
            )
        }
    }

    return null
}

export default TextUnit
