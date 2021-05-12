import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button'
import { PAGINATION_SLIDE_BUTTON_KEY } from '../../../constants/buttons'

const PaginationButton = ({
    pitchSlideIndex,
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
                // isLargeSize,
                // isSmallSize,
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
    isSelected: PropTypes.bool.isRequired,
    handleButtonClick: PropTypes.func.isRequired,
}

export default PaginationButton
