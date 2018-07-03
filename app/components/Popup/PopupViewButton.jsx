import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button/Button'

import { NAVIGATION_LEFT_KEY,
         NAVIGATION_RIGHT_KEY,
         NAVIGATION_ESCAPE_KEY } from '../../constants/access'

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
            isCloseButton,
            isPreviousButton,
            isNextButton,
            inFullSize,
            inCardSize,
            displaysInOverlay,

            // eslint-disable-next-line no-unused-vars
            handlePopupButtonClick,

            ...other } = this.props

        let temporaryText,
            buttonName,
            accessKey

        if (isCloseButton) {
            buttonName = 'popupClose'
            temporaryText = '\u274C'
            accessKey = NAVIGATION_ESCAPE_KEY

        } else if (isPreviousButton) {
            buttonName = 'popupPrevious'
            temporaryText = '\u276e'
            accessKey = NAVIGATION_LEFT_KEY

        } else if (isNextButton) {
            buttonName = 'popupNext'
            temporaryText = '\u276f'
            accessKey = NAVIGATION_RIGHT_KEY
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
                    handleButtonClick={this._handleClick}
                />
            </div>
        )
    }
}

export default PopupViewButton
