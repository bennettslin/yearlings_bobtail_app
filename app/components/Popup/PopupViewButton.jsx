import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from 'components/Button/Button'

import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ESCAPE
} from 'constants/access'

import {
    POPUP_CLOSE_BUTTON_KEY,
    POPUP_NEXT_BUTTON_KEY,
    POPUP_PREVIOUS_BUTTON_KEY
} from 'constants/buttons'

class PopupViewButton extends Component {

    static propTypes = {
        isCloseButton: PropTypes.bool,
        isPreviousButton: PropTypes.bool,
        isNextButton: PropTypes.bool,
        inFullSize: PropTypes.bool,
        inCardSize: PropTypes.bool,
        displaysInOverlay: PropTypes.bool,
        handlePopupButtonClick: PropTypes.func
    }

    constructor(props) {
        super(props)

        this._handleClick = this._handleClick.bind(this)
    }

    shouldComponentUpdate() {
        return false
    }

    _handleClick(e) {

        const { isPreviousButton,
                isNextButton } = this.props

        let direction

        if (isPreviousButton) {
            direction = -1

        } else if (isNextButton) {
            direction = 1
        }

        this.props.handlePopupButtonClick(
            e, direction && { direction }
        )
    }

    render() {

        const {
            // eslint-disable-next-line no-unused-vars
            handlePopupButtonClick,

            isCloseButton,
            isPreviousButton,
            isNextButton,
            inFullSize,
            inCardSize,
            displaysInOverlay

        } = this.props

        let buttonIdentifier,
            buttonName,
            accessKey

        if (isCloseButton) {
            buttonName = POPUP_CLOSE_BUTTON_KEY
            buttonIdentifier = '\u274C'
            accessKey = ESCAPE

        } else if (isPreviousButton) {
            buttonName = POPUP_PREVIOUS_BUTTON_KEY
            buttonIdentifier = '\u276e'
            accessKey = ARROW_LEFT

        } else if (isNextButton) {
            buttonName = POPUP_NEXT_BUTTON_KEY
            buttonIdentifier = '\u276f'
            accessKey = ARROW_RIGHT
        }

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
                        'PopupViewButton__notInOverlay',

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
                <Button
                    isLargeSize
                    isPopupButton
                    buttonName={buttonName}
                    className={cx(
                        'Button__popup',
                        'Button__popupNotShadow'
                    )}
                    buttonIdentifier={buttonIdentifier}
                    accessKey={accessKey}
                    handleButtonClick={this._handleClick}
                />
            </div>
        )
    }
}

export default PopupViewButton
