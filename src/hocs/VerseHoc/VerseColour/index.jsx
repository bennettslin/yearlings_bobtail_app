import React, { useContext, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../DidMountHoc'
import AudioPlayerContext from '../../../contexts/AudioPlayer'
import Tracker from '../../../components/Tracker'
import { getMapVerseTrackerLength } from '../../../redux/tracker/selector'
import { VERSE_CURSOR_CHILD_PREFIX } from '../../../constants/cursor'
import './style'

const VerseColour = ({
    didMount,
    verseIndex,
    inVerseBar,
    isVertical,
    isTrackerShown,

}) => {
    const
        { audioTime } = useContext(AudioPlayerContext),
        verseTrackerLength = useSelector(getMapVerseTrackerLength({
            audioTime,
            verseIndex,
        }))

    return didMount && (
        <div
            {...{
                className: cx(
                    'VerseColour',
                    `${VERSE_CURSOR_CHILD_PREFIX}${verseIndex}`,
                    inVerseBar ?
                        'VerseColour__inVerseBar' :
                        'VerseColour__notVerseBar',
                    'ovH',
                    'abF',
                ),
            }}
        >
            {Number.isFinite(verseIndex) && (
                <Tracker
                    {...{
                        trackerLength: verseTrackerLength,
                        isVertical,
                        isNotShown: !isTrackerShown,
                    }}
                />
            )}
        </div>
    )
}

VerseColour.propTypes = {
    didMount: PropTypes.bool.isRequired,
    verseIndex: PropTypes.number.isRequired,
    inVerseBar: PropTypes.bool,
    isVertical: PropTypes.bool,
    isTrackerShown: PropTypes.bool,
}

export default memo(getDidMountHoc(VerseColour))
