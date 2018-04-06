// Component to wrap text span in appropriate parent element.

import React from 'react'
import PropTypes from 'prop-types'
import TextAnchorBlock from './TextAnchorBlock'
import TextBlock from './TextBlock'
import TextSpan from './TextSpan'

const textUnitPropTypes = {
    // From parent.
    inVerseBar: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
},

TextUnit = ({

    text: textEntity,

...other }) => {

    // It's a text span.
    if (typeof textEntity === 'string') {
        return (
            <TextSpan {...other}
                text={textEntity}
            />
        )

    } else if (typeof textEntity === 'object') {

        // Needed for first and last verse object in portal.
        if (textEntity.lyric) {
            return (
                <span>
                    <TextBlock {...other}
                        text={textEntity.lyric}
                        isVerseBeginningSpan={textEntity.isVerseBeginningSpan}
                        isVerseEndingSpan={textEntity.isVerseEndingSpan}
                    />
                </span>
            )

        } else if (textEntity.italic) {
            return (
                <i>
                    <TextBlock {...other}
                        text={textEntity.italic}
                    />
                </i>
            )

        } else if (textEntity.emphasis) {
            return (
                <em>
                    <TextBlock {...other}
                        text={textEntity.emphasis}
                    />
                </em>
            )

        } else if (textEntity.anchor) {
            return (other.inVerseBar ?
                <TextBlock {...other}
                    text={textEntity.anchor}
                /> :
                <TextAnchorBlock {...other}
                    text={textEntity}
                    isVerseBeginningSpan={textEntity.isVerseBeginningSpan}
                    isVerseEndingSpan={textEntity.isVerseEndingSpan}
                />
            )
        }
    }

    // Portals don't have a text description, so return null.
    return null
}

TextUnit.propTypes = textUnitPropTypes

export default TextUnit
