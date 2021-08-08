import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../Button'
import { PAGINATION_SLIDE_BUTTON_KEY } from '../../../../constants/buttons'

const PaginationButton = ({
    pitchSlideIndex,
    isLargeSize,
    isSmallSize,
    isSelected,
    isEllipsisPlaceholder,
    handleButtonClick,
}) => {
    const _handleButtonClick = () => {
        handleButtonClick(pitchSlideIndex)
    }

    return (
        <Button
            {...{
                isLargeSize,
                isSmallSize,
                buttonName: PAGINATION_SLIDE_BUTTON_KEY,
                handleButtonClick: _handleButtonClick,

                ...isEllipsisPlaceholder ? {
                    buttonCharacter: '…',
                    isPlaceholderCharacter: true,
                    isDisabled: true,
                } : {
                    buttonCharacter: pitchSlideIndex,
                    isSelectedDisabled: isSelected,
                    hasCharacterShadowLight: true,
                },
            }}
        />
    )
}

PaginationButton.propTypes = {
    pitchSlideIndex: PropTypes.number.isRequired,
    isLargeSize: PropTypes.bool.isRequired,
    isSmallSize: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isEllipsisPlaceholder: PropTypes.bool,
    handleButtonClick: PropTypes.func.isRequired,
}

export default PaginationButton
