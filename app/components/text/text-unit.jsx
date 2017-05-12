import React from 'react'
import AnchorBlock from './anchor-block'
import TextBlock from './text-block'
import TextSpan from './text-span'

/*************
 * CONTAINER *
 *************/

const TextUnit = ({

    text,
    showWikis,

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
            const showIfWiki = showWikis !== false

            return (showIfWiki && !other.inVerseBar && !(other.inPortal && other.inPortalCard) ?
                <AnchorBlock {...other}
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

export default TextUnit
