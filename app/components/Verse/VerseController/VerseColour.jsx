import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import VerseCursor from './VerseCursor'

const propTypes = {
    // From parent.
    isOnCursor: PropTypes.bool.isRequired,
    isAfterCursor: PropTypes.bool.isRequired,
    isInteractivated: PropTypes.bool.isRequired,

    verseIndex: PropTypes.number.isRequired,
    inVerseBar: PropTypes.bool,
    inLyricVerse: PropTypes.bool,
    inSliderVerse: PropTypes.bool
},

VerseColour = ({

    isOnCursor,
    isAfterCursor,
    isInteractivated,

    verseIndex,
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

                isOnCursor && 'VerseColour__onCursor',
                !isOnCursor && `VerseColour__${
                    isAfterCursor ? 'afterCursor' : 'beforeCursor'
                }`,

                isInteractivated && 'VerseColour__interactivated',

                // 'CM__verseColour',
                // `CM__verseColour${verseIndex}`,

                'absoluteFullContainer'
            )}
        >
            <VerseCursor
                {...{
                    isOnCursor,
                    verseIndex,
                    inVerseBar,
                    inLyricVerse,
                    inSliderVerse
                }}

                /**
                 * Give each verse in the verse bar a unique key to render a
                 * new verse each time. This ensures that the cursor will not
                 * animate from the far right for the previous verse to the
                 * far left for the next verse.
                 */
                {...inVerseBar && {
                    key: verseIndex
                }}
            />

            {/* Even filters are just a little shadier. */}
            {!(verseIndex % 2) && (
                <div className={cx(
                    'VerseColour__evenFilter',
                    'absoluteFullContainer'
                )} />
            )}
        </div>
    )
}

VerseColour.propTypes = propTypes

export default VerseColour
