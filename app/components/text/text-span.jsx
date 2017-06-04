import React from 'react'
import PropTypes from 'prop-types'
import { getFormattedVerseBeginningSpanText, getFormattedEndingVerseSpanText } from '../../helpers/format-helper'

const TextSpan = ({

    text,
    isLyric,
    foregoSpace,
    inPortal,
    isVerseBeginningSpan,
    isVerseEndingSpan

}) => {
    /**
     * Subsequent spans of text on a line will begin with a space, unless
     * it's in an anchor, it begins with "'s," or it's the first verse object
     * in a portal.
     */
    const hasFirstSpace = !isVerseBeginningSpan && !foregoSpace && (text.indexOf('\'s') !== 0)

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

    if (inPortal) {
        if (isVerseBeginningSpan) {
            formattedText = getFormattedVerseBeginningSpanText(formattedText)
        }

        if (isVerseEndingSpan) {
            formattedText = getFormattedEndingVerseSpanText(formattedText)
        }
    }

    return (
        <TextSpanView
            text={formattedText}
            hasFirstSpace={hasFirstSpace}
        />
    )
}

TextSpan.propTypes = {
    // From parent.
    text: PropTypes.string.isRequired,
    isLyric: PropTypes.bool,
    foregoSpace: PropTypes.bool,
    inPortal: PropTypes.bool
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

// FIXME: Does this need to know the first and last verse object bools?
TextSpanView.propTypes = {
    text: PropTypes.string.isRequired,
    hasFirstSpace: PropTypes.bool.isRequired,
    isVerseBeginningSpan: PropTypes.bool,
    isVerseEndingSpan: PropTypes.bool
}

export default TextSpan
