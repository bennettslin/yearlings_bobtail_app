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
    inLyricVerse: PropTypes.bool,
    inSliderVerse: PropTypes.bool
},

VerseColour = ({

    isOnCursor,
    isAfterCursor,
    isInteractivated,

    isOdd,
    inVerseBar,
    inLyricVerse,
    inSliderVerse

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
                inLyricVerse && 'VerseColour__inLyricVerse',
                inSliderVerse && 'VerseColour__inSliderVerse',

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
