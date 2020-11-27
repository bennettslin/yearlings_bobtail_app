// Pitch navigation button.
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import PitchCharacter from './Character'
import { mapPitchSegmentIndex } from '../../../redux/pitch/selector'
import { PITCH_SEGMENT_BUTTON_KEY } from '../../../constants/buttons'

const PitchNavButton = ({
    pitchIndex,
    handleButtonClick
}) => {
    const
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex),
        isSelected = pitchIndex === pitchSegmentIndex

    const _handleButtonClick = () => {
        handleButtonClick(pitchIndex)
    }

    return (
        <Button
            isLargeSize
            hoverOnParent
            {...{
                buttonName: PITCH_SEGMENT_BUTTON_KEY,
                isClickDisabled: isSelected,
                handleButtonClick: _handleButtonClick
            }}
        >
            <PitchCharacter
                {...{
                    pitchIndex,
                    isSelected
                }}
            />
        </Button>
    )
}

PitchNavButton.propTypes = {
    pitchIndex: PropTypes.number.isRequired,
    handleButtonClick: PropTypes.func.isRequired
}

export default PitchNavButton
