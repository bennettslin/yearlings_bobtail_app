import React, { Component } from 'react'
import TransitionPopupButton from './transition-popup-button'

import { CLOSE_POPUP_BUTTON,
         PREVIOUS_POPUP_BUTTON,
         NEXT_POPUP_BUTTON } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

class TransitionPopup extends Component {

    constructor(props) {
        super(props)

        this._handleTransitionEnd = this._handleTransitionEnd.bind(this)
        this._onPopupButtonClick = this._onPopupButtonClick.bind(this)

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

    _onPopupButtonClick(e, argument) {
        this.props.onPopupButtonClick(e, argument)
    }

    _handleTransitionEnd(e) {
        if (e.propertyName === 'opacity' && !this.props.isVisible) {
            this.setState({
                isDisplayed: false
            })
        }
    }

    render() {
        const { popupClassName,
                isVisible,
                showClose,
                showArrows,
                onPopupContainerClick,
                myChild } = this.props,

            { isDisplayed } = this.state,
            visibleClassName = isVisible ? 'visible' : '',
            displayClassName = isDisplayed ? '' : 'not-displayed'

        return (
            <span
                className={`popup-transition-group ${popupClassName} ${visibleClassName} ${displayClassName}`}
                onTransitionEnd={this._handleTransitionEnd}
            >
                <TransitionPopupView
                    popupClassName={popupClassName}
                    showClose={showClose}
                    showArrows={showArrows}
                    onPopupButtonClick={this._onPopupButtonClick}
                    onPopupContainerClick={onPopupContainerClick}
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
    onPopupButtonClick,
    onPopupContainerClick,
    myChild

}) => {
    return (
        <div className={`popup-wrapper ${popupClassName}`}>
            {showClose &&
                <div className="popup-button close-button shadow"></div>
            }
            {showArrows &&
                <div className="popup-button side-button previous-button shadow"></div>
            }
            {showArrows &&
                <div className="popup-button side-button next-button shadow"></div>
            }
            <div
                className={`popup-content-wrapper ${popupClassName}`}
                onClick={e => onPopupContainerClick(e, popupClassName)}
            >
                {myChild}
                {showClose &&
                    <TransitionPopupButton
                        onPopupButtonClick={onPopupButtonClick}
                        buttonName={CLOSE_POPUP_BUTTON}
                    />
                }
                {showArrows &&
                    <TransitionPopupButton
                        onPopupButtonClick={onPopupButtonClick}
                        buttonName={PREVIOUS_POPUP_BUTTON}
                    />
                }
                {showArrows &&
                    <TransitionPopupButton
                        onPopupButtonClick={onPopupButtonClick}
                        buttonName={NEXT_POPUP_BUTTON}
                    />
                }
            </div>
        </div>
    )
}

export default TransitionPopup
