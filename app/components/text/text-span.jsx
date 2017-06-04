// Component for a single span of text.

import React from 'react'
import PropTypes from 'prop-types'
import { getFormattedLyricSpanText, getFormattedEndingVerseSpanText } from '../../helpers/format-helper'

const TextSpan = ({

    text,
    isLyric,
    inTextAnchor,
    inPortal,
    isVerseBeginningSpan,
    isVerseEndingSpan

}) => {
    /**
     * Subsequent spans of text on a line will begin with a space, unless
     * it's in an anchor, it begins with "'s," or it's the beginning verse span
     * in a portal.
     */
    const hasFirstSpace = !isVerseBeginningSpan && !inTextAnchor && (text.indexOf('\'s') !== 0)

    let formattedText = text

    if (isLyric) {
        // And nonbreaking space between last two words.
        formattedText = getFormattedLyricSpanText(formattedText)
    }

    if (inPortal && isVerseEndingSpan) {
        // Last verse span in portal will always end in an ellipsis.
        formattedText = getFormattedEndingVerseSpanText(formattedText)
    }

    return (
        <TextSpanView
            formattedText={formattedText}
            hasFirstSpace={hasFirstSpace}
        />
    )
}

TextSpan.propTypes = {
    // From parent.
    text: PropTypes.string.isRequired,
    isLyric: PropTypes.bool,
    inTextAnchor: PropTypes.bool,
    inPortal: PropTypes.bool,
    isVerseBeginningSpan: PropTypes.bool,
    isVerseEndingSpan: PropTypes.bool
}

/****************
 * PRESENTATION *
 ****************/

const TextSpanView = ({

    formattedText,
    hasFirstSpace

}) => (
    <span
        className="text-span"
    >
        {(hasFirstSpace ? ' ' : '') + formattedText}
    </span>
)

TextSpanView.propTypes = {
    // From parent.
    formattedText: PropTypes.string.isRequired,
    hasFirstSpace: PropTypes.bool.isRequired
}

export default TextSpan
