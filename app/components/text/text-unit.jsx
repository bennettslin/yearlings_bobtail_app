import React from 'react'
import AnchorBlock from './anchor-block'
import TextBlock from './text-block'
import TextSpan from './text-span'
import { intersects } from '../../helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const TextUnit = ({

    text,
    selectedDotKeys,
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
                        selectedDotKeys={selectedDotKeys}
                    />
                </span>
            )

        } else if (text.italic) {
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
                        selectedDotKeys={selectedDotKeys}
                    />
                </em>
            )

        } else if (text.anchor) {
            const showAsAnchor = intersects(text.dotKeys, selectedDotKeys),
                showIfWiki = showWikis !== false

            return (showIfWiki && !other.inVerseBar && !(other.inPortal && other.inPortalCard) ?
                <AnchorBlock {...other}
                    text={text}
                    showAsAnchor={showAsAnchor}
                    firstVerseObject={text.firstVerseObject}
                    lastVerseObject={text.lastVerseObject}
                    selectedDotKeys={selectedDotKeys}
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
