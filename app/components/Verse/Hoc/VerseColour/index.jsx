import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Tracker from '../../../Tracker'
import { getMapVerseCursorStatus } from '../../../../redux/cursor/selector'
import { getMapVerseTrackerLength } from '../../../../redux/tracker/selector'
import './style'

const VerseColour = ({
    verseIndex,
    inUnit,
    inSlider,
    inVerseBar

}) => {
    const
        verseCursorStatus = useSelector(getMapVerseCursorStatus({
            verseIndex,
            inSlider,
            inVerseBar
        })),
        verseTrackerLength = useSelector(getMapVerseTrackerLength(verseIndex)),
        isNotShown = verseCursorStatus === null,
        isOdd = Boolean(verseIndex % 2)

    return (
        <div
            className={cx(
                'VerseColour',
                `vc${verseIndex}`,
                inVerseBar ?
                    'VerseColour__inVerseBar' :
                    'VerseColour__notVerseBar',
                verseCursorStatus === -1 && 'VerseColour__beforeCursor',
                verseCursorStatus === 0 && 'VerseColour__cursor',
                verseCursorStatus === 1 && 'VerseColour__afterCursor',
                isNotShown && 'VerseColour__cursorNotShown',
                isOdd ?
                    'VerseColour__odd' :
                    'VerseColour__even',
                'ovH',
                'abF'
            )}
        >
            <Tracker
                {...{
                    trackerLength: verseTrackerLength,
                    isVertical: inUnit || inVerseBar,
                    isNotShown
                }}
            />
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
