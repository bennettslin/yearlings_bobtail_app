import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button'
import { PAGINATION_SLIDE_BUTTON_KEY } from '../../../constants/buttons'

const PaginationButton = ({
    pitchSlideIndex,
    isLargeSize,
    isSmallSize,
    isSelected,
    handleButtonClick,
}) => {
    const _handleButtonClick = () => {
        handleButtonClick(pitchSlideIndex)
    }

    return (
        <Button
            hasCharacterShadowLight
            {...{
                isLargeSize,
                isSmallSize,
                buttonName: PAGINATION_SLIDE_BUTTON_KEY,
                isSelectedDisabled: isSelected,
                handleButtonClick: _handleButtonClick,
                buttonCharacter: pitchSlideIndex,
            }}
        />
    )
}

PaginationButton.propTypes = {
    pitchSlideIndex: PropTypes.number.isRequired,
    isLargeSize: PropTypes.bool.isRequired,
    isSmallSize: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    handleButtonClick: PropTypes.func.isRequired,
}

export default PaginationButton
