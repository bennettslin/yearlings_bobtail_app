import React from 'react'
import PropTypes from 'prop-types'
import TextAnchorBlock from './text-anchor-block'
import TextBlock from './text-block'
import TextSpan from './text-span'

/*************
 * CONTAINER *
 *************/

const TextUnit = ({

    text,

...other }) => {

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
            return (!other.inVerseBar && !(other.inPortal && other.inPortalCard) ?
                <TextAnchorBlock {...other}
                    text={text}
                    firstVerseObject={text.firstVerseObject}
                    lastVerseObject={text.lastVerseObject}
                /> :
                <TextBlock {...other}
                    isPortalAnchor={other.inPortal}
                    text={text.anchor}
                />
            )
        }
    }

    return null
}

TextUnit.propTypes = {
    inPortal: PropTypes.bool,
    inPortalCard: PropTypes.bool,
    inVerseBar: PropTypes.bool,

    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}

export default TextUnit
