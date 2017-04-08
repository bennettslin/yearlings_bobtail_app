import React, { Component } from 'react'
import classnames from 'classnames'
import TransitionPopupButton from './transition-popup-button'

import { CLOSE_POPUP_BUTTON,
         PREVIOUS_POPUP_BUTTON,
         NEXT_POPUP_BUTTON } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

class TransitionPopup extends Component {

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
        if (this.props.isVisible) {
            this.props.handlePopupFocus()
        }
    }

    _handleTransitionEnd(e) {
        if (e.propertyName === 'opacity') {

            // Focus when popup opens.
            if (this.props.isVisible) {
                this.props.handlePopupFocus()

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
                handlePopupContainerClick,
                onCloseClick,
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
                <TransitionPopupView
                    popupClassName={popupClassName}
                    showClose={showClose}
                    showArrows={showArrows}
                    onCloseClick={onCloseClick}
                    handlePopupContainerClick={handlePopupContainerClick}
                    myChild={myChild}
                />
            </span>
        )
    }
}


/****************
 * PRESENTATION *
 ****************/

const TransitionPopupView = ({

    popupClassName,
    showClose,
    showArrows,
    handlePopupButtonClick,
    onCloseClick,
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
                    <TransitionPopupButton
                        handlePopupButtonClick={onCloseClick}
                        buttonName={CLOSE_POPUP_BUTTON}
                    />
                }
                {showArrows &&
                    <TransitionPopupButton
                        handlePopupButtonClick={handlePopupButtonClick}
                        buttonName={PREVIOUS_POPUP_BUTTON}
                    />
                }
                {showArrows &&
                    <TransitionPopupButton
                        handlePopupButtonClick={handlePopupButtonClick}
                        buttonName={NEXT_POPUP_BUTTON}
                    />
                }
            </div>
        </div>
    )
}

export default TransitionPopup
