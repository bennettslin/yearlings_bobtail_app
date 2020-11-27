// Pitch navigation button.
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/Button'
import { PITCH_TOGGLE_KEY } from '../../../constants/access'
import { PITCH_RETURN_BUTTON_KEY } from '../../../constants/buttons'

const PitchReturnButton = ({
    returnToAlbum

}) => (
    <Button
        isLargeSize
        {...{
            buttonName: PITCH_RETURN_BUTTON_KEY,
            accessKey: PITCH_TOGGLE_KEY,
            handleButtonClick: returnToAlbum
        }}
    />
)

PitchReturnButton.propTypes = {
    returnToAlbum: PropTypes.func.isRequired
}

export default PitchReturnButton
