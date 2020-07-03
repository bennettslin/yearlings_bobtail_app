import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Tracker from '../../../Tracker'
import { getMapIsVerseCursor } from '../../../../redux/cursor/selector'
import { getMapVerseTrackerLength } from '../../../../redux/tracker/selector'
import { VERSE_CURSOR_CHILD_PREFIX } from '../../../../constants/verseCursor'
import './style'

const VerseColour = ({
    verseIndex,
    inUnit,
    inSlider,
    inVerseBar

}) => {
    const
        isVerseCursor = useSelector(getMapIsVerseCursor({
            verseIndex,
            inSlider,
            inVerseBar
        })),
        verseTrackerLength = useSelector(getMapVerseTrackerLength(verseIndex))

    return (
        <div
            className={cx(
                'VerseColour',
                `${VERSE_CURSOR_CHILD_PREFIX}${verseIndex}`,
                inVerseBar ?
                    'VerseColour__inVerseBar' :
                    'VerseColour__notVerseBar',
                isVerseCursor && 'VerseColour__cursor',
                'ovH',
                'abF'
            )}
        >
            {Number.isFinite(verseIndex) && (
                <Tracker
                    {...{
                        trackerLength: verseTrackerLength,
                        isVertical: inUnit || inVerseBar,
                        isNotShown: !isVerseCursor
                    }}
                />
            )}
        </div>
    )
}

VerseColour.propTypes = {
    verseIndex: PropTypes.number.isRequired,
    inUnit: PropTypes.bool,
    inSlider: PropTypes.bool,
    inVerseBar: PropTypes.bool
}

export default memo(VerseColour)
