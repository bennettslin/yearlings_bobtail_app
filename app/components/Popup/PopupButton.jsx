import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button/Button'

// import { CLOSE_POPUP_BUTTON,
//          PREVIOUS_POPUP_BUTTON,
//          NEXT_POPUP_BUTTON } from '../../constants/options'

import { NAVIGATION_LEFT_KEY,
         NAVIGATION_RIGHT_KEY,
         NAVIGATION_ESCAPE_KEY } from '../../constants/access'

const popupButtonPropTypes = {
    isShadow: PropTypes.bool,
    isCloseButton: PropTypes.bool,
    isPreviousButton: PropTypes.bool,
    isNextButton: PropTypes.bool,
    // buttonName: PropTypes.string.isRequired,
    handlePopupButtonClick: PropTypes.func
},

PopupButton = ({

    isShadow,
    isCloseButton,
    isPreviousButton,
    isNextButton,
    handlePopupButtonClick,
    // buttonName,

...other }) => {

    let tempUnicodeSymbol,
        handleClick,
        direction,
        accessKey

    if (isCloseButton) {
        tempUnicodeSymbol = '\u274C'
        accessKey = NAVIGATION_ESCAPE_KEY

    } else if (isPreviousButton) {
        tempUnicodeSymbol = '\u276e'
        direction = -1
        accessKey = NAVIGATION_LEFT_KEY

    } else if (isNextButton) {
        tempUnicodeSymbol = '\u276f'
        direction = 1
        accessKey = NAVIGATION_RIGHT_KEY
    }

    if (direction) {
        handleClick = e => handlePopupButtonClick(e, { direction })
    } else {
        handleClick = e => handlePopupButtonClick(e)
    }

    return (
        <div
            className={cx(
                'PopupButton',
                { 'PopupButton__close': isCloseButton,
                  'PopupButton__side': isPreviousButton || isNextButton,
                  'PopupButton__previous': isPreviousButton,
                  'PopupButton__next': isNextButton,
                  'PopupButton__shadow': isShadow }
            )}
        >
            {!isShadow && (
                <Button {...other}
                    isLarge
                    isOverflowShown
                    accessKey={accessKey}
                    iconText={tempUnicodeSymbol}
                    handleClick={handleClick}
                />
            )}
        </div>
    )
}

PopupButton.propTypes = popupButtonPropTypes

export default PopupButton
