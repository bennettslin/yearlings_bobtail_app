import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '../button/button'

import { CLOSE_POPUP_BUTTON,
         PREVIOUS_POPUP_BUTTON,
         NEXT_POPUP_BUTTON } from '../../constants/options'

const popupButtonPropTypes = {
    buttonName: PropTypes.string.isRequired,
    handlePopupButtonClick: PropTypes.func.isRequired
},

PopupButton = ({

    handlePopupButtonClick,
    buttonName

}) => {

    let tempUnicodeSymbol,
        handleClick,
        direction

    switch (buttonName) {
        case CLOSE_POPUP_BUTTON:
            tempUnicodeSymbol = '\u274C'
            break
        case PREVIOUS_POPUP_BUTTON:
            tempUnicodeSymbol = '\u276e'
            direction = -1
            break
        case NEXT_POPUP_BUTTON:
            tempUnicodeSymbol = '\u276f'
            direction = 1
            break
    }

    if (direction) {
        handleClick = e => handlePopupButtonClick(e, { direction })
    } else {
        handleClick = e => handlePopupButtonClick(e)
    }

    return (
        <div
            className={classnames(
                'popup-button-block',
                `${buttonName}-position`
            )}
        >
            <Button
                isOverflowShown={true}
                iconText={tempUnicodeSymbol}
                handleClick={handleClick}
            />
        </div>
    )
}

PopupButton.propTypes = popupButtonPropTypes

export default PopupButton
