// Section for pitch navigation buttons.
import React, { useRef } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import PitchDispatcher from '../../../dispatchers/Pitch'
import PitchNavButton from './Button'
import {
    mapIsMiniWidth,
    mapIsMonitorWidth,
    mapIsPhoneWidth,
} from '../../../redux/device/selector'
import { mapPitchSegmentIndex } from '../../../redux/pitch/selector'
import {
    getPitchSegmentIndices,
    getPitchSegmentsCount,
} from '../../../api/pitch/segments'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
} from '../../../constants/access'
import {
    PITCH_NEXT_BUTTON_KEY,
    PITCH_PREVIOUS_BUTTON_KEY,
} from '../../../constants/buttons'
import './style'

const PitchNav = () => {
    const
        dispatchPitch = useRef(),
        isMonitorWidth = useSelector(mapIsMonitorWidth),
        isMiniWidth = useSelector(mapIsMiniWidth),
        isPhoneWidth = useSelector(mapIsPhoneWidth),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    const handlePreviousClick = () => {
        dispatchPitch.current({ direction: -1 })
    }
    const handleNextClick = () => {
        dispatchPitch.current({ direction: 1 })
    }
    const handleButtonClick = pitchIndex => {
        dispatchPitch.current({ pitchSegmentIndex: pitchIndex })
    }

    return (
        <div
            {...{
                className: cx(
                    'PitchNav',
                    'fCC',
                ),
            }}
        >
            <Button
                {...{
                    isLargeSize: isMonitorWidth || isPhoneWidth,
                    isSmallSize: isMiniWidth,
                    buttonName: PITCH_PREVIOUS_BUTTON_KEY,
                    accessKey: ARROW_LEFT,
                    isDisabled: pitchSegmentIndex === 1,
                    handleButtonClick: handlePreviousClick,
                }}
            />
            {!isPhoneWidth && getPitchSegmentIndices().map(pitchIndex => (
                <PitchNavButton
                    {...{
                        key: pitchIndex,
                        pitchIndex,
                        handleButtonClick,
                    }}
                />
            ))}
            <Button
                {...{
                    isLargeSize: isMonitorWidth || isPhoneWidth,
                    isSmallSize: isMiniWidth,
                    buttonName: PITCH_NEXT_BUTTON_KEY,
                    accessKey: ARROW_RIGHT,
                    isDisabled: pitchSegmentIndex === getPitchSegmentsCount(),
                    handleButtonClick: handleNextClick,
                }}
            />
            <PitchDispatcher {...{ ref: dispatchPitch }} />
        </div>
    )
}

export default PitchNav
