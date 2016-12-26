import React from 'react'
import { getFormattedFirstVerseObjectText, getFormattedLastVerseObjectText } from 'helpers/format-helper'

/*************
 * CONTAINER *
 *************/

const TextSpan = ({

    isLyric,
    foregoSpace,
    text,
    inPortal,
    inPortalCard,
    isPortalAnchor,
    firstVerseObject,
    lastVerseObject,

...other }) => {
    /**
     * Subsequent spans of text on a line will begin with a space, unless
     * it's in an anchor, it begins with "'s," or it's the first verse object
     * in a portal.
     */
    const hasFirstSpace = !firstVerseObject && !foregoSpace && (text.indexOf('\'s') !== 0),
        isPortalAnchorText = isPortalAnchor && !inPortalCard

    // Add nonbreaking space between last two words if it's a lyric.
    let formattedText = text
    if (isLyric) {
        const lastSpaceIndex = text.lastIndexOf(' ')
        if (lastSpaceIndex > -1) {
            formattedText = `${text.slice(0, lastSpaceIndex)}\u00a0${text.slice(lastSpaceIndex + 1)}`
        }
    }

    if (inPortal && !inPortalCard) {
        if (firstVerseObject) {
            formattedText = getFormattedFirstVerseObjectText(formattedText)
        }

        if (lastVerseObject) {
            formattedText = getFormattedLastVerseObjectText(formattedText)
        }
    }

    return (
        <TextSpanView {...other}
            text={formattedText}
            hasFirstSpace={hasFirstSpace}
            firstVerseObject={firstVerseObject}
            lastVerseObject={lastVerseObject}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const TextSpanView = ({

    // From props.
    firstVerseObject,
    lastVerseObject,

    // From controller.
    text,
    hasFirstSpace,
    isPortalAnchorText

}) => (
    <span
        className={`text-span${isPortalAnchorText ? ' portal-anchor-text' : ''}${firstVerseObject ? ' first-verse-object' : ''}${lastVerseObject ? ' last-verse-object' : ''}`}>
        {(hasFirstSpace ? ' ' : '') + text}
    </span>
)

export default TextSpan
