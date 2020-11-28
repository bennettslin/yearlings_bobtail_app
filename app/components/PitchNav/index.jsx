// Section for pitch navigation buttons.
import React, { useRef } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../Button'
import PitchDispatcher from '../../dispatchers/Pitch'
import PitchNavButton from './Button'
import { mapPitchSegmentIndex } from '../../redux/pitch/selector'
import { getPitchSegmentIndices, getPitchSegmentsCount } from '../../api/pitch/segments'
import {
    // ARROW_UP,
    ARROW_LEFT,
    ARROW_RIGHT
} from '../../constants/access'
import {
    // PITCH_HOME_BUTTON_KEY,
    PITCH_NEXT_BUTTON_KEY,
    PITCH_PREVIOUS_BUTTON_KEY
} from '../../constants/buttons'
import './style'

const PitchNav = () => {
    const
        dispatchPitch = useRef(),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    // const handleHomeClick = () => {
    //     dispatchPitch.current({ pitchSegmentIndex: 0 })
    // }
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
                    'fCC'
                )
            }}
        >
            {/* <Button
                isLargeSize
                {...{
                    buttonName: PITCH_HOME_BUTTON_KEY,
                    accessKey: ARROW_UP,
                    isDisabled: pitchSegmentIndex === 0,
                    handleButtonClick: handleHomeClick
                }}
            /> */}
            <Button
                isLargeSize
                {...{
                    buttonName: PITCH_PREVIOUS_BUTTON_KEY,
                    accessKey: ARROW_LEFT,
                    isDisabled: pitchSegmentIndex === 0,
                    handleButtonClick: handlePreviousClick
                }}
            />
            {getPitchSegmentIndices().map(pitchIndex => {
                return (
                    <PitchNavButton
                        {...{
                            key: pitchIndex,
                            pitchIndex,
                            handleButtonClick
                        }}
                    />
                )
            })}
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
