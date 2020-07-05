import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PlayerTimeContext from '../../../../contexts/PlayerTime'
import Tracker from '../../../Tracker'
import { getMapVerseTrackerLength } from '../../../../redux/tracker/selector'
import { VERSE_CURSOR_CHILD_PREFIX } from '../../../../constants/cursor'
import './style'

const VerseColour = memo(({
    playerTime,
    verseIndex,
    inVerseBar,
    isVertical,
    isTrackerShown

}) => {
    const verseTrackerLength = useSelector(getMapVerseTrackerLength({
        playerTime,
        verseIndex
    }))

    return (
        <div
            className={cx(
                'VerseColour',
                `${VERSE_CURSOR_CHILD_PREFIX}${verseIndex}`,
                inVerseBar ?
                    'VerseColour__inVerseBar' :
                    'VerseColour__notVerseBar',
                'ovH',
                'abF'
            )}
        >
            {Number.isFinite(verseIndex) && (
                <Tracker
                    {...{
                        trackerLength: verseTrackerLength,
                        isVertical,
                        isNotShown: !isTrackerShown
                    }}
                />
            )}
        </div>
    )
})

VerseColour.propTypes = {
    playerTime: PropTypes.number.isRequired,
    verseIndex: PropTypes.number.isRequired,
    inVerseBar: PropTypes.bool,
    isVertical: PropTypes.bool,
    isTrackerShown: PropTypes.bool
}

const VerseColourContainer = props => (
    <PlayerTimeContext.Consumer>
        {playerTime => (
            <VerseColour {...{ playerTime, ...props }} />
        )}
    </PlayerTimeContext.Consumer>
)

export default memo(VerseColourContainer)
