import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

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

    return (
        <div
            className={cx(
                'VerseColour',
                inVerseBar && 'VerseColour__inVerseBar',

                !inVerseBar && 'VerseColour__interactable',
                inLyricVerse && 'VerseColour__inLyricVerse',
                inSliderVerse && 'VerseColour__inSliderVerse',

                isOdd ?
                    'VerseColour__odd' :
                    'VerseColour__even',

                isOnCursor && 'VerseColour__onCursor',
                !isOnCursor && `VerseColour__${
                    isAfterCursor ? 'afterCursor' : 'beforeCursor'
                }`,

                isInteractivated && 'VerseColour__interactivated',

                'absoluteFullContainer'
            )}
        />
    )
}

VerseColour.propTypes = propTypes

export default VerseColour
