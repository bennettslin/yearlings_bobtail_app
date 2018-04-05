import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PopupButton from './popup-button'

import { CLOSE_POPUP_BUTTON,
         PREVIOUS_POPUP_BUTTON,
         NEXT_POPUP_BUTTON } from '../../constants/options'

/*************
 * CONTAINER *
 *************/

class Popup extends Component {

    static propTypes = {
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

    constructor(props) {
        super(props)

        this._handlePopupContainerClick = this._handlePopupContainerClick.bind(this)
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

    _handlePopupContainerClick(e) {
        if (this.state.isDisplayed) {
            this.props.handlePopupContainerClick(e)
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

                /* eslint-disable no-unused-vars */
                handlePopupContainerClick,
                /* eslint-enable no-unused-vars */

                myChild } = this.props,

            { isDisplayed } = this.state

        return (
            <span
                className={cx(
                    popupClassName,
                    'popup-transition-group',
                    isVisible ? 'visible' : 'not-visible',
                    { 'not-displayed': !isDisplayed }
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
                    handleContainerClick={this._handlePopupContainerClick}
                    myChild={myChild}
                />
            </span>
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const popupViewDefaultProps = {
    showClose: false,
    showArrows: false
},

popupViewPropTypes = {
    popupClassName: PropTypes.string.isRequired,
    showClose: PropTypes.bool.isRequired,
    showArrows: PropTypes.bool.isRequired,
    handleCloseClick: PropTypes.func,
    handlePreviousClick: PropTypes.func,
    handleNextClick: PropTypes.func,
    handleContainerClick: PropTypes.func.isRequired,
    myChild: PropTypes.element.isRequired
},

PopupView = ({

    popupClassName,
    showClose,
    showArrows,
    handleCloseClick,
    handlePreviousClick,
    handleNextClick,
    handleContainerClick,
    myChild

}) => (
    <div className={cx(
        'popup-wrapper',
        popupClassName
    )}>
        {showClose &&
            <div className={cx(
                'popup-button-block',
                'close-position',
                'shadow'
            )} />
        }
        {showArrows &&
            <div className={cx(
                'popup-button-block',
                'side-position',
                'previous-position',
                'shadow'
            )} />
        }
        {showArrows &&
            <div className={cx(
                'popup-button-block',
                'side-position',
                'next-position',
                'shadow'
            )} />
        }
        <div
            className={cx(
                'popup-content-wrapper',
                'access-keys-shown',
                popupClassName
            )}
            onClick={handleContainerClick}
            onTouchStart={handleContainerClick}
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

PopupView.defaultProps = popupViewDefaultProps
PopupView.propTypes = popupViewPropTypes

export default Popup
