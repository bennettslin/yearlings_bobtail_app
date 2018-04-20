// Component for a single span of text.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getFormattedLyricSpanText, getFormattedEndingVerseSpanText } from '../../helpers/formatHelper'

const textSpanDefaultProps = {
    isVerseLyric: false
},

textSpanPropTypes = {
    // From parent.
    text: PropTypes.string.isRequired,
    isVerseLyric: PropTypes.bool,
    isEmphasis: PropTypes.bool,
    isItalic: PropTypes.bool,
    isVerseBeginningSpan: PropTypes.bool,
    isVerseEndingSpan: PropTypes.bool,
    isPortalAnchorInPortal: PropTypes.bool
},

TextSpan = ({

    text,
    isVerseLyric,
    isEmphasis,
    isItalic,
    isVerseBeginningSpan,
    isVerseEndingSpan,
    isPortalAnchorInPortal

}) => {
    /**
     * Subsequent spans of text on a line will begin with a space, unless it
     * begins with "'s," or it's the beginning verse span in a portal.
     */
    const isSpacePrefixed =
        (text.indexOf('\'s') !== 0) &&
        !isVerseBeginningSpan

    let formattedText = text,
        Tag = 'span'

    if (isEmphasis) {
        Tag = 'em'

    } else if (isItalic) {
        Tag = 'i'
    }

    if (isVerseLyric) {
        // And nonbreaking space between last two words.
        formattedText = getFormattedLyricSpanText(formattedText)
    }

    if (isVerseEndingSpan) {
        // Last verse span in portal will always end in an ellipsis.
        formattedText = getFormattedEndingVerseSpanText(formattedText)
    }

    return (
        <Tag className={cx(
            'TextSpan',
            'textShadow__text',
            isPortalAnchorInPortal && 'textSpan__portalInPortal'
        )}>
            {isSpacePrefixed && (
                <span
                    key="space"
                    className="textSpace"
                >
                    {' '}
                </span>
            )}
            {formattedText}
        </Tag>
    )
}

TextSpan.defaultProps = textSpanDefaultProps
TextSpan.propTypes = textSpanPropTypes

export default TextSpan
