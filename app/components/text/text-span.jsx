import React from 'react'

/*************
 * CONTAINER *
 *************/

const TextSpan = ({

    isLyric,
    foregoSpace,
    text,

...other }) => {
    /**
     * Subsequent spans of text on a line will begin with a space, unless
     * it's in an anchor, it begins with "'s," or it's the first verse object
     * in a portal.
     */
    const hasFirstSpace = !other.firstVerseObject && !foregoSpace && (text.indexOf('\'s') !== 0)

    // Add nonbreaking space between last two words if it's a lyric.
    let spacedText = text
    if (isLyric) {
        const lastSpaceIndex = text.lastIndexOf(' ')
        if (lastSpaceIndex > -1) {
            spacedText = `${text.slice(0, lastSpaceIndex)}\u00a0${text.slice(lastSpaceIndex + 1)}`
        }
    }

    return (
        <TextSpanView {...other}
            text={spacedText}
            hasFirstSpace={hasFirstSpace}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const TextSpanView = ({

    // From props.
    isPortalAnchor,
    inPortalCard,
    firstVerseObject,
    lastVerseObject,

    // From controller.
    text,
    hasFirstSpace

}) => (
    <span
        className={`text-span${isPortalAnchor && !inPortalCard ? ' portal-anchor-text' : ''}${firstVerseObject ? ' first-verse-object' : ''}${lastVerseObject ? ' last-verse-object' : ''}`}>
        {(hasFirstSpace ? ' ' : '') + text}
    </span>
)

export default TextSpan
