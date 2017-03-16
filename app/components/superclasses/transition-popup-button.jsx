import React from 'react'

import { CLOSE_POPUP_BUTTON,
         PREVIOUS_POPUP_BUTTON,
         NEXT_POPUP_BUTTON } from 'helpers/constants'

const TransitionPopupButton = ({

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
        <div className={`popup-button ${buttonName}-button`}>
            <a
                className={`popup-button-interactable enabled`}
                onClick={handleClick}
            >
            </a>
            <div className="popup-button-icon">
                {tempUnicodeSymbol}
            </div>
        </div>
    )
}

export default TransitionPopupButton
