/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getCursorStatusClassName } from './verseControllerHelper'

const propTypes = {
    // From parent.
    isOnCursor: PropTypes.bool.isRequired,
    isAfterCursor: PropTypes.bool.isRequired,
    isInteractivated: PropTypes.bool.isRequired,

    isOdd: PropTypes.bool.isRequired,
    inVerseBar: PropTypes.bool,
    inLyricStanza: PropTypes.bool,
    inSliderStanza: PropTypes.bool
},

VerseColour = ({

    isOnCursor,
    isAfterCursor,
    isInteractivated,

    isOdd,
    inVerseBar,
    inLyricStanza,
    inSliderStanza

}) => {

    const cursorStatusClassName = getCursorStatusClassName({
        isOnCursor,
        isAfterCursor
    })

    return (
        <div
            className={cx(
                'VerseColour',
                inVerseBar && 'VerseColour__inVerseBar',
                inLyricStanza && 'VerseColour__inLyricStanza',
                inSliderStanza && 'VerseColour__inSliderStanza',

                isOdd ?
                    'VerseColour__odd' :
                    'VerseColour__even',

                // onCursor, beforeCursor, or afterCursor.
                `VerseColour__${cursorStatusClassName}`,
                isInteractivated && 'VerseColour__interactivated',

                'absoluteFullContainer'
            )}
        />
    )
}

VerseColour.propTypes = propTypes

export default VerseColour
