// Component to wrap text span in appropriate parent element.

import React from 'react'
import PropTypes from 'prop-types'
import TextAnchorBlock from './text-anchor-block'
import TextBlock from './text-block'
import TextSpan from './text-span'

const TextUnit = ({

    text,

...other }) => {

    // It's a text span.
    if (typeof text === 'string') {
        return (
            <TextSpan {...other}
                text={text}
            />
        )

    } else if (typeof text === 'object') {

        // Needed for first and last verse object in portal.
        if (text.lyric) {
            return (
                <span>
                    <TextBlock {...other}
                        text={text.lyric}
                        firstVerseObject={text.firstVerseObject}
                        lastVerseObject={text.lastVerseObject}
                    />
                </span>
            )

        } else if (text.italic) {
            return (
                <i>
                    <TextBlock {...other}
                        text={text.italic}
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
            return (other.inVerseBar ?
                <TextBlock {...other}
                    text={text.anchor}
                /> :
                <TextAnchorBlock {...other}
                    text={text}
                    firstVerseObject={text.firstVerseObject}
                    lastVerseObject={text.lastVerseObject}
                />
            )
        }
    }

    // Portals don't have a text description, so return null.
    return null
}

TextUnit.propTypes = {
    // From parent.
    inVerseBar: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}

export default TextUnit
