import React from 'react'

/*************
 * CONTAINER *
 *************/

const TextSpan = ({

    isLyric,
    isInAnchor,
    text

}) => {
    /**
     * Subsequent spans of text on a line will begin with a space, unless
     * it's in an anchor, or it begins with "'s."
     */
    const hasFirstSpace = !isInAnchor && (text.indexOf('\'s') !== 0)

    // Add nonbreaking space between last two words if it's a lyric.
    let spacedText = text
    if (isLyric) {
        const lastSpaceIndex = text.lastIndexOf(' ')
        if (lastSpaceIndex > -1) {
            spacedText = `${text.slice(0, lastSpaceIndex)}\u00a0${text.slice(lastSpaceIndex + 1)}`
        }
    }

    return (
        <TextSpanView
            text={spacedText}
            hasFirstSpace={hasFirstSpace}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const TextSpanView = ({

    // From controller.
    text,
    hasFirstSpace

}) => (
    <span
        className="text-span">
        {(hasFirstSpace ? ' ' : '') + text}
    </span>
)

export default TextSpan
