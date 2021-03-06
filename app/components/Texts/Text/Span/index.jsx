// Component for a single span of text.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    getFormattedLyricSpanText,
    getFormattedEndingVerseSpanText,
} from '../../../../helpers/format'
import './style'

const TextSpan = ({
    text,
    isVerseLyric = false,
    isEmphasis,
    isItalic,
    beginsVerse,
    endsVerse,
    isWormholeDestinationVerse,
    isWormholeDestinationAnchor,
    isWikiTextAnchor,

}) => {

    let formattedText = text,
        Tag

    if (isWormholeDestinationAnchor) {
        Tag = 'span'
    }

    if (isEmphasis) {
        Tag = 'em'

    } else if (isItalic) {
        Tag = 'i'
    }

    // Add nonbreaking space between last two words.
    if (isVerseLyric) {
        formattedText = getFormattedLyricSpanText(formattedText)
    }

    /**
     * Subsequent spans of text on a line will begin with a space, unless
     * it begins with "'s," or it's a wiki text anchor.
     */
    if (
        !beginsVerse &&
        !isWikiTextAnchor &&
        text.indexOf('\'s') !== 0
    ) {
        formattedText = ` ${formattedText}`
    }

    // Last verse span in wormhole destination verse will end in ellipsis.
    if (isWormholeDestinationVerse && endsVerse) {
        formattedText = getFormattedEndingVerseSpanText(formattedText)
    }

    return Tag ? (
        <Tag
            {...{
                className: cx(
                    isWormholeDestinationAnchor && 'text__wormholeDestinationAnchor',
                ),
            }}
        >
            {formattedText}
        </Tag>
    ) : formattedText
}

TextSpan.propTypes = {
// From parent.
    text: PropTypes.string.isRequired,
    isVerseLyric: PropTypes.bool,
    isEmphasis: PropTypes.bool,
    isItalic: PropTypes.bool,
    beginsVerse: PropTypes.bool,
    endsVerse: PropTypes.bool,
    isWormholeDestinationVerse: PropTypes.bool,
    isWormholeDestinationAnchor: PropTypes.bool,
    isWikiTextAnchor: PropTypes.bool,
}

export default memo(TextSpan)
