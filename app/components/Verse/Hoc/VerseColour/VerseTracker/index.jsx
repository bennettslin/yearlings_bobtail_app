// Component to show audio progress in verse.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import {
    getMapIsVerseTrackerShown,
    getMapVerseCursorLength
} from '../../../../../redux/verse/selector'
import './style'

const VerseTracker = ({
    verseIndex,
    inUnit,
    inVerseBar,
    inSlider

}) => {
    const
        inLyric = inUnit || inVerseBar,
        isVerseTrackerShown = useSelector(getMapIsVerseTrackerShown({
            verseIndex
        })),
        cursorLength = useSelector(getMapVerseCursorLength(verseIndex))

    return (
        <div
            {...{
                className: cx(
                    'VerseTracker',

                    isVerseTrackerShown ?
                        'VerseTracker__selected' :
                        'VerseTracker__unselected',

                    inSlider &&
                        'VerseTracker__inSlider',

                    inLyric &&
                        'VerseTracker__inLyric',

                    'abF'
                ),
                style: {
                    [inLyric ? 'height' : 'width']: `${cursorLength}%`
                }
            }}
        />
    )
}

VerseTracker.propTypes = {
    verseIndex: PropTypes.number.isRequired,
    inUnit: PropTypes.bool,
    inVerseBar: PropTypes.bool,
    inSlider: PropTypes.bool
}

export default memo(VerseTracker)
