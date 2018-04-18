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
    isVerseEndingSpan: PropTypes.bool
},

TextSpan = ({

    text,
    isLyric,
    isVerseEndingSpan

}) => {
    /**
     * Subsequent spans of text on a line will begin with a space, unless it
     * begins with "'s," or it's the beginning verse span in a portal.
     */
    const hasFirstSpace = (text.indexOf('\'s') !== 0)

    let formattedText = text

    if (isLyric) {
        // And nonbreaking space between last two words.
        formattedText = getFormattedLyricSpanText(formattedText)
    }

    if (isVerseEndingSpan) {
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

TextSpan.defaultProps = textSpanDefaultProps
TextSpan.propTypes = textSpanPropTypes

/****************
 * PRESENTATION *
 ****************/

const textSpanViewPropTypes = {
    // From parent.
    formattedText: PropTypes.string.isRequired,
    hasFirstSpace: PropTypes.bool.isRequired
},

TextSpanView = ({

    formattedText,
    hasFirstSpace

}) => (
    <span className={cx(
        'TextSpan',
        'textShadow__text'
    )}>
        {(hasFirstSpace ? ' ' : '') + formattedText}
    </span>
)

TextSpanView.propTypes = textSpanViewPropTypes

export default TextSpan
