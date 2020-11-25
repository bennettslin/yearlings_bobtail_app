// Section for pitch navigation buttons.
import React from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Button'
import { mapPitchSegmentIndex } from '../../../redux/pitch/selector'
import {
    decrementPitchSegmentIndex,
    incrementPitchSegmentIndex,
    resetPitchSegmentIndex
} from '../../../redux/pitch/action'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP
} from '../../../constants/access'
import {
    PITCH_HOME_BUTTON_KEY,
    PITCH_NEXT_BUTTON_KEY,
    PITCH_PREVIOUS_BUTTON_KEY
} from '../../../constants/buttons'

const PitchNav = () => {
    const
        dispatch = useDispatch(),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    const handleHomeClick = () => {
        dispatch(resetPitchSegmentIndex())
    }
    const handlePreviousClick = () => {
        dispatch(decrementPitchSegmentIndex())
    }
    const handleNextClick = () => {
        dispatch(incrementPitchSegmentIndex())
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
                    handleButtonClick: handleHomeClick
                }}
            />
            <Button
                isLargeSize
                {...{
                    buttonName: PITCH_PREVIOUS_BUTTON_KEY,
                    accessKey: ARROW_LEFT,
                    handleButtonClick: handlePreviousClick
                }}
            />
            <Button
                isLargeSize
                {...{
                    buttonName: PITCH_NEXT_BUTTON_KEY,
                    accessKey: ARROW_RIGHT,
                    handleButtonClick: handleNextClick
                }}
            />
        </div>
    )
}

export default PitchNav
