import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import VerseTracker from './VerseTracker'

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

        const inLyric = inUnit || inVerseBar,
            isOdd = Boolean(verseIndex % 2)

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
                        inUnit,
                        inSlider,
                        ...inVerseBar && {
                            isHiddenInVerseBar: isOdd
                        }
                    }}
                />

                {/* Allow verse bar to alternate between odd and even. */}
                {inVerseBar && (
                    <VerseTracker
                        {...{
                            verseIndex,
                            inVerseBar,
                            inUnit,
                            inSlider,
                            isHiddenInVerseBar: !isOdd
                        }}
                    />
                )}

                {/* Even filters are just a little shadier. */}
                {!inVerseBar && !(verseIndex % 2) && (
                    <div className={cx(

                        // "Grandchild even filter."
                        'GcE',

                        'colourFilter__verse__even',
                        'absoluteFullContainer'
                    )} />
                )}
            </div>
        )
    }

VerseColour.propTypes = propTypes

export default VerseColour
