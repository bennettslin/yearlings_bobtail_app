// Pitch navigation button.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../components/Button'
import { PITCH_TOGGLE_KEY } from '../../../constants/access'
import { PITCH_RETURN_BUTTON_KEY } from '../../../constants/buttons'
import './style'

const PitchHeader = ({
    returnToAlbum

}) => (
    <div
        {...{
            className: cx(
                'PitchHeader'
            )
        }}
    >
        <Button
            isLargeSize
            {...{
                className: 'dramaMasks',
                buttonName: PITCH_RETURN_BUTTON_KEY,
                accessKey: PITCH_TOGGLE_KEY,
                handleButtonClick: returnToAlbum
            }}
        />
    </div>
)

PitchHeader.propTypes = {
    returnToAlbum: PropTypes.func.isRequired
}

export default PitchHeader
