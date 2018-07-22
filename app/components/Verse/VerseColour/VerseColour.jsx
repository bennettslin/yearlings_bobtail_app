import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import VerseTracker from '../VerseTracker/VerseTracker'

const propTypes = {
    // From parent.
    isInteractivated: PropTypes.bool,
    verseIndex: PropTypes.number.isRequired,
    inUnit: PropTypes.bool,
    inVerseBar: PropTypes.bool,
    inSlider: PropTypes.bool
},

VerseColour = ({

    isInteractivated,

    verseIndex,

    inUnit,
    inVerseBar,
    inSlider

}) => {

    const inLyric = inUnit || inVerseBar

    return (
        <div
            className={cx(

                // "Grandchild in lyric."
                inLyric && 'GcL',

                // "Grandchild in slider."
                inSlider && 'GcS',

                // "Grandchild interactable."
                !inVerseBar && 'GcN',

                // "Grandchild verse colour."
                'GcV',

                'VerseColour',

                inVerseBar && 'VerseColour__inVerseBar',
                isInteractivated && 'VerseColour__interactivated',

                'absoluteFullContainer'
            )}
        >
            <VerseTracker
                {...{
                    verseIndex,
                    inVerseBar,
                    inLyric,
                    inSlider
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
            {!inVerseBar && !(verseIndex % 2) && (
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
