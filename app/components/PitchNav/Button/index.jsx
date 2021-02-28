// Pitch navigation button.
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import ButtonCharacter from '../../Button/Character'
import { mapPitchSegmentIndex } from '../../../redux/pitch/selector'
import {
    PITCH_HOME_BUTTON_KEY,
    PITCH_SEGMENT_BUTTON_KEY,
} from '../../../constants/buttons'
import {
    mapIsMonitorWidth,
    mapIsPhoneOrMiniWidth,
} from '../../../redux/device/selector'

const PitchNavButton = ({
    pitchIndex,
    handleButtonClick,
}) => {
    const
        isMonitorWidth = useSelector(mapIsMonitorWidth),
        isPhoneOrMiniWidth = useSelector(mapIsPhoneOrMiniWidth),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex),
        isSelected = pitchIndex === pitchSegmentIndex

    const _handleButtonClick = () => {
        handleButtonClick(pitchIndex)
    }

    return (
        <Button
            hoverOnParent
            {...{
                isLargeSize: isMonitorWidth,
                isSmallSize: isPhoneOrMiniWidth,
                buttonName: pitchIndex === 1 ?
                    PITCH_HOME_BUTTON_KEY :
                    PITCH_SEGMENT_BUTTON_KEY,
                isClickDisabled: isSelected,
                handleButtonClick: _handleButtonClick,
            }}
        >
            <ButtonCharacter
                {...{
                    isSelected,
                    hasTextShadowLight: true,
                    character: pitchIndex,
                }}
            />
        </Button>
    )
}

PitchNavButton.propTypes = {
    pitchIndex: PropTypes.number.isRequired,
    handleButtonClick: PropTypes.func.isRequired,
}

export default PitchNavButton
