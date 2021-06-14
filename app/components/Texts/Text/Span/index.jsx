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
    endsVerse,
    isWormholeDestinationVerse,
    isWormholeDestinationAnchor,

}) => {
    let formattedText = text,
        Tag

    // Add nonbreaking space between last two words.
    if (isVerseLyric) {
        formattedText = getFormattedLyricSpanText(formattedText)
    }

    // Last verse span in wormhole destination verse will end in ellipsis.
    if (isWormholeDestinationVerse && endsVerse) {
        formattedText = getFormattedEndingVerseSpanText(formattedText)
    }

    if (isWormholeDestinationAnchor) {
        Tag = 'span'
    }

    if (isEmphasis) {
        Tag = 'em'

    } else if (isItalic) {
        Tag = 'i'
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
    text: PropTypes.string.isRequired,
    isVerseLyric: PropTypes.bool,
    isEmphasis: PropTypes.bool,
    isItalic: PropTypes.bool,
    endsVerse: PropTypes.bool,
    isWormholeDestinationVerse: PropTypes.bool,
    isWormholeDestinationAnchor: PropTypes.bool,
}

export default memo(TextSpan)
