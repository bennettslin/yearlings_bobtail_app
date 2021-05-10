import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Button from '../../../../Button'
import ButtonCharacter from '../../../../Button/Character'
import { mapArtupSlideIndex } from '../../../../../redux/marketing/selector'
import {
    PITCH_HOME_BUTTON_KEY,
    PITCH_SLIDE_BUTTON_KEY,
} from '../../../../../constants/buttons'
import {
    mapIsMonitorWidth,
    mapIsPhoneOrMiniWidth,
} from '../../../../../redux/device/selector'

const PitchNavButton = ({
    pitchIndex,
    handleButtonClick,
}) => {
    const
        isMonitorWidth = useSelector(mapIsMonitorWidth),
        isPhoneOrMiniWidth = useSelector(mapIsPhoneOrMiniWidth),
        artupSlideIndex = useSelector(mapArtupSlideIndex),
        isSelected = pitchIndex === artupSlideIndex

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
                    PITCH_SLIDE_BUTTON_KEY,
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
