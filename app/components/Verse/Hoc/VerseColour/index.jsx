import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import VerseTracker from './VerseTracker'
import './logicCursor'
import './logicDefault'
import './logicSlider'
import './style'

const VerseColour = ({
    isActivated,
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
                'ovH',

                inVerseBar && 'VerseColour__inVerseBar',
                isActivated && 'VerseColour__activated',

                // Grandchild verse colour even.
                !isOdd && 'GcE',

                'abF'
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
        </div>
    )
}

VerseColour.propTypes = {
// From parent.
    isActivated: PropTypes.bool,
    verseIndex: PropTypes.number.isRequired,
    inUnit: PropTypes.bool,
    inVerseBar: PropTypes.bool,
    inSlider: PropTypes.bool
}

export default memo(VerseColour)
