// Component for a single span of text.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getFormattedLyricSpanText,
    getFormattedEndingVerseSpanText
} from 'helpers/format'

const defaultProps = {
        isVerseLyric: false
    },

    propTypes = {
    // From parent.
        text: PropTypes.string.isRequired,
        isVerseLyric: PropTypes.bool,
        isEmphasis: PropTypes.bool,
        isItalic: PropTypes.bool,
        isVerseBeginningSpan: PropTypes.bool,
        isVerseEndingSpan: PropTypes.bool,
        isWormholeDestinationAnchor: PropTypes.bool,
        isTextAnchor: PropTypes.bool
    },

    TextSpan = memo(({

        text,
        isVerseLyric,
        isEmphasis,
        isItalic,
        isVerseBeginningSpan,
        isVerseEndingSpan,
        isWormholeDestinationAnchor,
        isTextAnchor

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

        // And nonbreaking space between last two words.
        if (isVerseLyric) {
            formattedText = getFormattedLyricSpanText(formattedText)
        }

        /**
         * Subsequent spans of text on a line will begin with a space, unless it
         * begins with "'s," or it's the beginning verse span in a wormhole, or
         * it's a wiki text anchor.
         */
        if (
            !isTextAnchor &&
            !isVerseBeginningSpan &&
            text.indexOf('\'s') !== 0
        ) {
            formattedText = ` ${formattedText}`
        }

        // Last verse span in wormhole will always end in an ellipsis.
        if (isVerseEndingSpan) {
            formattedText = getFormattedEndingVerseSpanText(formattedText)
        }

        return Tag ? (
            <Tag className={cx(
                isWormholeDestinationAnchor && 'text__wormholeDestinationAnchor'
            )}>
                {formattedText}
            </Tag>
        ) : formattedText
    })

TextSpan.defaultProps = defaultProps
TextSpan.propTypes = propTypes

export default TextSpan
