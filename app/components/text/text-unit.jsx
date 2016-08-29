import React from 'react'
import AnchorBlock from './anchor-block'
import TextBlock from './text-block'
import TextSpan from './text-span'
import { intersects } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const TextUnit = (props) => {

    const { text,
            activeDotKeys } = props

    if (typeof text === 'string') {
        return (
            <TextSpan {...props} />
        )

    } else if (typeof text === 'object') {
        if (text.italic) {
            return (
                <i>
                    <TextBlock {...props}
                        text={text.italic}
                    />
                </i>
            )

        } else if (text.emphasis) {
            return (
                <em>
                    <TextBlock {...props}
                        text={text.emphasis}
                    />
                </em>
            )

        } else if (text.anchor) {
            const shouldShowAnchor = intersects(text.dotKeys, activeDotKeys)
            return (shouldShowAnchor ?
                <AnchorBlock {...props} /> :
                <TextBlock {...props}
                    text={text.anchor}
                />
            )
        }
    }

    return null
}

export default TextUnit
