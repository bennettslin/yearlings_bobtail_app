import React from 'react'
import classnames from 'classnames'
import { getFormattedFirstVerseObjectText, getFormattedLastVerseObjectText } from '../../helpers/format-helper'

/*************
 * CONTAINER *
 *************/

const TextSpan = ({

    isLyric,
    foregoSpace,
    text,
    inPortal,
    inPortalCard,
    firstVerseObject,
    lastVerseObject,

...other }) => {
    /**
     * Subsequent spans of text on a line will begin with a space, unless
     * it's in an anchor, it begins with "'s," or it's the first verse object
     * in a portal.
     */
    const hasFirstSpace = !firstVerseObject && !foregoSpace && (text.indexOf('\'s') !== 0)
    /**
     * Add nonbreaking space between last two words if it's a lyric.
     */
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
    // TODO: This won't always need first and last verse objects.
    firstVerseObject,
    lastVerseObject,

    // From controller.
    text,
    hasFirstSpace

}) => (
    <span
        className={classnames(
            'text-span',
            { 'first-verse-object': firstVerseObject,
              'last-verse-object': lastVerseObject }
        )}>
        {(hasFirstSpace ? ' ' : '') + text}
    </span>
)

export default TextSpan
