// Pitch navigation button.
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import ButtonCharacter from '../../Button/Character'
import { getPitchImageKeyForIndex } from '../../../api/pitch/segments'
import { mapPitchSegmentIndex } from '../../../redux/pitch/selector'
import { PITCH_SEGMENT_BUTTON_KEY } from '../../../constants/buttons'
import { mapIsDesktopWidth, mapIsMonitorWidth } from '../../../redux/device/selector'

const PitchNavButton = ({
    pitchIndex,
    handleButtonClick,
}) => {
    const
        isDesktopWidth = useSelector(mapIsDesktopWidth),
        isMonitorWidth = useSelector(mapIsMonitorWidth),
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
                isSmallSize: !isDesktopWidth,
                buttonName: PITCH_SEGMENT_BUTTON_KEY,
                buttonIdentifier: getPitchImageKeyForIndex(pitchIndex),
                isClickDisabled: isSelected,
                handleButtonClick: _handleButtonClick,
            }}
        >
            <ButtonCharacter
                {...{
                    isSelected,
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
