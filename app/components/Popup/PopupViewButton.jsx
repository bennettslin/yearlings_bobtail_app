import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button/Button'

import { NAVIGATION_LEFT_KEY,
         NAVIGATION_RIGHT_KEY,
         NAVIGATION_ESCAPE_KEY } from '../../constants/access'

const popupViewButtonPropTypes = {
    isCloseButton: PropTypes.bool,
    isPreviousButton: PropTypes.bool,
    isNextButton: PropTypes.bool,
    inFullSize: PropTypes.bool,
    inCardSize: PropTypes.bool,
    displaysInOverlay: PropTypes.bool,
    handlePopupButtonClick: PropTypes.func
},

PopupViewButton = ({

    isCloseButton,
    isPreviousButton,
    isNextButton,
    inFullSize,
    inCardSize,
    displaysInOverlay,
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

    handleClick = e => handlePopupButtonClick(
        e, direction && { direction }
    )

    console.error('popup button', other)
    return (
        <div
            className={cx(
                'PopupViewButton',
                { 'PopupViewButton__close': isCloseButton,
                  'PopupViewButton__previous': isPreviousButton,
                  'PopupViewButton__next': isNextButton,
                  'PopupViewButton__side': isPreviousButton || isNextButton,
                  'PopupViewButton__inCardSize': inCardSize },

                inFullSize ?
                    'PopupViewButton__inFullSize' :
                    'PopupViewButton__notInFullSize',

                displaysInOverlay ?
                    'PopupViewButton__displaysInOverlay' :
                    'PopupViewButton__displaysNotInOverlay',

                /**
                 * Because popup button has absolute position, it must have a
                 * width and height as well.
                 */
                'Button__largeSize'
            )}
        >
            {/* Placeholder for popup box shadow. */}
            <div
                className={cx(
                    'Button__largeSize',
                    'Button__popup',
                    'boxShadow__popupView'
                )}
            />
            <Button {...other}
                isLargeSize
                isPopupButton
                buttonName={buttonName}
                className={cx(
                    'Button__popup',
                    'Button__popupNotShadow'
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
