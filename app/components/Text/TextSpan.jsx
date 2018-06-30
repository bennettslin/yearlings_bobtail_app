// Component for a single span of text.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getFormattedLyricSpanText, getFormattedEndingVerseSpanText } from '../../helpers/formatHelper'

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
    inPortal: PropTypes.bool,
    isPortalAnchorInPortal: PropTypes.bool
},

TextSpan = ({

    text,
    isVerseLyric,
    isEmphasis,
    isItalic,
    isVerseBeginningSpan,
    isVerseEndingSpan,
    inPortal,
    isPortalAnchorInPortal

}) => {

    let formattedText = text,
        Tag = 'span'

    if (isEmphasis) {
        Tag = 'em'

    } else if (isItalic) {
        Tag = 'i'
    }

    // And nonbreaking space between last two words.
    if (isVerseLyric) {
        formattedText = getFormattedLyricSpanText(formattedText)
    }

    // Last verse span in portal will always end in an ellipsis.
    if (inPortal && isVerseEndingSpan) {
        formattedText = getFormattedEndingVerseSpanText(formattedText)
    }

    /**
     * Subsequent spans of text on a line will begin with a space, unless it
     * begins with "'s," or it's the beginning verse span in a portal.
     */
    if (!isVerseBeginningSpan && text.indexOf('\'s') !== 0) {
        formattedText = ` ${formattedText}`
    }

    return (
        <Tag className={cx(
            'TextSpan',
            'textShadow__text',
            isPortalAnchorInPortal && 'textSpan__portalInPortal'
        )}>
            {formattedText}
        </Tag>
    )
}

TextSpan.defaultProps = defaultProps
TextSpan.propTypes = propTypes

export default TextSpan
