import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../Button'

import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ESCAPE
} from '../../../../constants/access'

import {
    POPUP_CLOSE_BUTTON_KEY,
    POPUP_NEXT_BUTTON_KEY,
    POPUP_PREVIOUS_BUTTON_KEY
} from '../../../../constants/buttons'

class PopupViewButton extends Component {

    static propTypes = {
        isCloseButton: PropTypes.bool,
        isPreviousButton: PropTypes.bool,
        isNextButton: PropTypes.bool,
        isFullWidth: PropTypes.bool,
        inCardSize: PropTypes.bool,
        displaysInOverlay: PropTypes.bool,
        handlePopupButtonClick: PropTypes.func
    }

    shouldComponentUpdate() {
        return false
    }

    _handleClick = (e) => {

        const {
            isPreviousButton,
            isNextButton
        } = this.props

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
            isCloseButton,
            isPreviousButton,
            isNextButton,
            isFullWidth,
            inCardSize,
            displaysInOverlay
        } = this.props

        let buttonName,
            accessKey

        if (isCloseButton) {
            buttonName = POPUP_CLOSE_BUTTON_KEY
            accessKey = ESCAPE

        } else if (isPreviousButton) {
            buttonName = POPUP_PREVIOUS_BUTTON_KEY
            accessKey = ARROW_LEFT

        } else if (isNextButton) {
            buttonName = POPUP_NEXT_BUTTON_KEY
            accessKey = ARROW_RIGHT
        }

        return (
            <div
                className={cx(
                    'PopupViewButton',
                    {
                        'PopupViewButton__close': isCloseButton,
                        'PopupViewButton__closeFullWidth':
                            isCloseButton && isFullWidth,
                        'PopupViewButton__previous': isPreviousButton,
                        'PopupViewButton__next': isNextButton,
                        'PopupViewButton__side':
                            isPreviousButton || isNextButton,
                        'PopupViewButton__inCardSize': inCardSize
                    },

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
                <Button
                    isLargeSize
                    isPopupButton
                    {...{
                        className: cx(
                            'Button__popup'
                        ),
                        buttonName,
                        accessKey,
                        handleButtonClick: this._handleClick
                    }}
                />
            </div>
        )
    }
}

export default PopupViewButton
