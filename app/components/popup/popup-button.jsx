import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../button/button'

import { CLOSE_POPUP_BUTTON,
         PREVIOUS_POPUP_BUTTON,
         NEXT_POPUP_BUTTON } from '../../constants/options'

import { NAVIGATION_LEFT_KEY,
         NAVIGATION_RIGHT_KEY,
         NAVIGATION_ESCAPE_KEY } from '../../constants/access'

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
        direction,
        accessKey

    switch (buttonName) {
        case CLOSE_POPUP_BUTTON:
            tempUnicodeSymbol = '\u274C'
            accessKey = NAVIGATION_ESCAPE_KEY
            break
        case PREVIOUS_POPUP_BUTTON:
            tempUnicodeSymbol = '\u276e'
            direction = -1
            accessKey = NAVIGATION_LEFT_KEY
            break
        case NEXT_POPUP_BUTTON:
            tempUnicodeSymbol = '\u276f'
            direction = 1
            accessKey = NAVIGATION_RIGHT_KEY
            break
    }

    if (direction) {
        handleClick = e => handlePopupButtonClick(e, { direction })
    } else {
        handleClick = e => handlePopupButtonClick(e)
    }

    return (
        <div
            className={cx(
                'popup-button-block',
                `${buttonName}-position`
            )}
        >
            <Button
                isOverflowShown={true}
                accessKey={accessKey}
                iconText={tempUnicodeSymbol}
                handleClick={handleClick}
            />
        </div>
    )
}

PopupButton.propTypes = popupButtonPropTypes

export default PopupButton
