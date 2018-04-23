import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button/Button'

import { NAVIGATION_LEFT_KEY,
         NAVIGATION_RIGHT_KEY,
         NAVIGATION_ESCAPE_KEY } from '../../constants/access'

const popupViewButtonPropTypes = {
    isShadow: PropTypes.bool,
    isCloseButton: PropTypes.bool,
    isPreviousButton: PropTypes.bool,
    isNextButton: PropTypes.bool,
    handlePopupButtonClick: PropTypes.func
},

PopupViewButton = ({

    isShadow,
    isCloseButton,
    isPreviousButton,
    isNextButton,
    handlePopupButtonClick,

...other }) => {

    let temporaryText,
        buttonName,
        handleClick,
        direction,
        accessKey

    if (isCloseButton) {
        buttonName = 'popupClose'
        temporaryText = '\u274C'
        accessKey = NAVIGATION_ESCAPE_KEY

    } else if (isPreviousButton) {
        buttonName = 'popupPrevious'
        temporaryText = '\u276e'
        accessKey = NAVIGATION_LEFT_KEY
        direction = -1

    } else if (isNextButton) {
        buttonName = 'popupNext'
        temporaryText = '\u276f'
        accessKey = NAVIGATION_RIGHT_KEY
        direction = 1
    }

    if (direction) {
        handleClick = e => handlePopupButtonClick(e, { direction })
    } else {
        handleClick = e => handlePopupButtonClick(e)
    }

    return (
        <div
            className={cx(
                'PopupViewButton',
                { 'PopupViewButton__close': isCloseButton,
                  'PopupViewButton__previous': isPreviousButton,
                  'PopupViewButton__next': isNextButton,
                  'PopupViewButton__side': isPreviousButton || isNextButton,
                  'PopupViewButton__shadow': isShadow },

                isShadow && 'PopupViewButton__shadow'
            )}
        >
            <Button {...other}
                isLargeSize
                buttonName={buttonName}
                className={cx(
                    'Button__popup'
                )}
                temporaryText={temporaryText}
                accessKey={accessKey}
                handleButtonClick={handleClick}
            />
        </div>
    )
}

PopupViewButton.propTypes = popupViewButtonPropTypes

export default PopupViewButton
