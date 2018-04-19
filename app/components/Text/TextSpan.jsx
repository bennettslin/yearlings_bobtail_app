// Component for a single span of text.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getFormattedLyricSpanText, getFormattedEndingVerseSpanText } from '../../helpers/formatHelper'

const textSpanDefaultProps = {
    inTextAnchor: false,
    isLyric: false
},

textSpanPropTypes = {
    // From parent.
    text: PropTypes.string.isRequired,
    isLyric: PropTypes.bool.isRequired,
    isEmphasis: PropTypes.bool,
    isItalic: PropTypes.bool,
    isVerseEndingSpan: PropTypes.bool,
    isPortalAnchorInPortal: PropTypes.bool
},

TextSpan = ({

    text,
    isLyric,
    isEmphasis,
    isItalic,
    isVerseEndingSpan,
    isPortalAnchorInPortal

}) => {
    /**
     * Subsequent spans of text on a line will begin with a space, unless it
     * begins with "'s," or it's the beginning verse span in a portal.
     */
    const hasFirstSpace = (text.indexOf('\'s') !== 0)

    let formattedText = text,
        Tag = 'span'

    if (isEmphasis) {
        Tag = 'em'

    } else if (isItalic) {
        Tag = 'i'
    }

    if (isLyric) {
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
            {(hasFirstSpace ? ' ' : '') + formattedText}
        </Tag>
    )
}

TextSpan.defaultProps = textSpanDefaultProps
TextSpan.propTypes = textSpanPropTypes

export default TextSpan
