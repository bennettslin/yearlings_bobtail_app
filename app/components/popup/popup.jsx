import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import PopupButton from './popup-button'

import { CLOSE_POPUP_BUTTON,
         PREVIOUS_POPUP_BUTTON,
         NEXT_POPUP_BUTTON } from '../../constants/options'

/*************
 * CONTAINER *
 *************/

class Popup extends Component {

    constructor(props) {
        super(props)

        this._handleTransitionEnd = this._handleTransitionEnd.bind(this)

        this.state = {
            isDisplayed: this.props.isVisible
        }
    }

    componentWillReceiveProps(nextProps) {
        /**
         * If now visible, it should now also be displayed, but if now
         * invisible, don't change to undisplayed just yet.
         */
        if (nextProps.isVisible && !this.props.isVisible) {
            this.setState({
                isDisplayed: true
            })
        }
    }

    componentDidMount() {
        // Focus if popup is already open when app mounts.
        if (this.props.isVisible && this.props.handlePopupFocus) {
            this.props.handlePopupFocus()
        }
    }

    _handleTransitionEnd(e) {
        if (e.propertyName === 'opacity') {

            // Focus when popup opens.
            if (this.props.isVisible) {
                if (this.props.handlePopupFocus) {
                    this.props.handlePopupFocus()
                }

            // Set display to none when popup closes.
            } else {
                this.setState({
                    isDisplayed: false
                })
            }
        }
    }

    render() {
        const { popupClassName,
                isVisible,
                showClose,
                showArrows,
                handleCloseClick,
                handlePreviousClick,
                handleNextClick,
                handlePopupContainerClick,
                myChild } = this.props,

            { isDisplayed } = this.state

        return (
            <span
                className={classnames(
                    'popup-transition-group',
                    popupClassName,
                    { 'visible': isVisible,
                      'not-displayed': !isDisplayed }
                )}
                onTransitionEnd={this._handleTransitionEnd}
            >
                <PopupView
                    popupClassName={popupClassName}
                    showClose={showClose}
                    showArrows={showArrows}
                    handleCloseClick={handleCloseClick}
                    handlePreviousClick={handlePreviousClick}
                    handleNextClick={handleNextClick}
                    handlePopupContainerClick={isDisplayed ? handlePopupContainerClick : null}
                    myChild={myChild}
                />
            </span>
        )
    }
}

Popup.propTypes = {
    popupClassName: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    showClose: PropTypes.bool,
    showArrows: PropTypes.bool,
    handleCloseClick: PropTypes.func,
    handlePreviousClick: PropTypes.func,
    handleNextClick: PropTypes.func,
    handlePopupContainerClick: PropTypes.func,
    myChild: PropTypes.element.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const PopupView = ({

    popupClassName,
    showClose,
    showArrows,
    handleCloseClick,
    handlePreviousClick,
    handleNextClick,
    handlePopupContainerClick,
    myChild

}) => {
    return (
        <div className={`popup-wrapper ${popupClassName}`}>
            {showClose &&
                <div className="popup-button-block close-position shadow"></div>
            }
            {showArrows &&
                <div className="popup-button-block side-position previous-position shadow"></div>
            }
            {showArrows &&
                <div className="popup-button-block side-position next-position shadow"></div>
            }
            <div
                className={`popup-content-wrapper ${popupClassName}`}
                onClick={handlePopupContainerClick}
            >
                {myChild}
                {showClose &&
                    <PopupButton
                        handlePopupButtonClick={handleCloseClick}
                        buttonName={CLOSE_POPUP_BUTTON}
                    />
                }
                {showArrows &&
                    <PopupButton
                        handlePopupButtonClick={handlePreviousClick}
                        buttonName={PREVIOUS_POPUP_BUTTON}
                    />
                }
                {showArrows &&
                    <PopupButton
                        handlePopupButtonClick={handleNextClick}
                        buttonName={NEXT_POPUP_BUTTON}
                    />
                }
            </div>
        </div>
    )
}

PopupView.propTypes = {
    popupClassName: PropTypes.string.isRequired,
    showClose: PropTypes.bool,
    showArrows: PropTypes.bool,
    handleCloseClick: PropTypes.func,
    handlePreviousClick: PropTypes.func,
    handleNextClick: PropTypes.func,
    handlePopupContainerClick: PropTypes.func,
    myChild: PropTypes.element.isRequired
}
export default Popup
