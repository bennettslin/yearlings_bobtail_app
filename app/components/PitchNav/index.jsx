// Section for pitch navigation buttons.
import React, { useRef } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../Button'
import PitchDispatcher from '../../dispatchers/Pitch'
import { mapPitchSegmentIndex } from '../../redux/pitch/selector'
import { getPitchSegmentsCount } from '../../api/pitch/segments'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP
} from '../../constants/access'
import {
    PITCH_HOME_BUTTON_KEY,
    PITCH_NEXT_BUTTON_KEY,
    PITCH_PREVIOUS_BUTTON_KEY
} from '../../constants/buttons'

const PitchNav = () => {
    const
        dispatchPitch = useRef(),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    const handleHomeClick = () => {
        dispatchPitch.current({ pitchSegmentIndex: 0 })
    }
    const handlePreviousClick = () => {
        dispatchPitch.current({ direction: -1 })
    }
    const handleNextClick = () => {
        dispatchPitch.current({ direction: 1 })
    }

    return (
        <div
            {...{
                className: cx(
                    'PitchNav'
                )
            }}
        >
            <Button
                isLargeSize
                {...{
                    buttonName: PITCH_HOME_BUTTON_KEY,
                    accessKey: ARROW_UP,
                    isDisabled: pitchSegmentIndex === 0,
                    handleButtonClick: handleHomeClick
                }}
            />
            <Button
                isLargeSize
                {...{
                    buttonName: PITCH_PREVIOUS_BUTTON_KEY,
                    accessKey: ARROW_LEFT,
                    isDisabled: pitchSegmentIndex === 0,
                    handleButtonClick: handlePreviousClick
                }}
            />
            <Button
                isLargeSize
                {...{
                    buttonName: PITCH_NEXT_BUTTON_KEY,
                    accessKey: ARROW_RIGHT,
                    isDisabled:
                        pitchSegmentIndex === getPitchSegmentsCount() - 1,
                    handleButtonClick: handleNextClick
                }}
            />
            <PitchDispatcher {...{ ref: dispatchPitch }} />
        </div>
    )
}

export default PitchNav
