import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PopupButton from './PopupButton'

import { CLOSE_POPUP_BUTTON,
         PREVIOUS_POPUP_BUTTON,
         NEXT_POPUP_BUTTON } from '../../constants/options'

/*************
 * CONTAINER *
 *************/

class Popup extends Component {

    static propTypes = {
        className: PropTypes.any,
        popupName: PropTypes.string.isRequired,
        isVisible: PropTypes.bool.isRequired,
        noFlexCentre: PropTypes.bool,
        displaysInOverlay: PropTypes.bool,
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
        // FIXME: This is a brittle way to handle it.
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
        const { className,
                popupName,
                isVisible,
                noFlexCentre,
                displaysInOverlay,
                showClose,
                showArrows,
                handleCloseClick,
                handlePreviousClick,
                handleNextClick,

                /* eslint-disable no-unused-vars */
                handlePopupContainerClick,
                /* eslint-enable no-unused-vars */

                myChild,
                ...other } = this.props,

            { isDisplayed } = this.state

        return (
            <span
                className={cx(
                    `Popup__${popupName}`,
                    'absoluteFullContainer',

                    isVisible ? 'Popup__visible' : 'Popup__invisible',
                    isDisplayed ? 'Popup__displayed' : 'Popup__notDisplayed',
                    displaysInOverlay ?
                        'Popup__displaysInOverlay' : 'Popup__displaysNotInOverlay',

                    { 'flexCentreContainer': !noFlexCentre },

                    className
                )}
                onTransitionEnd={this._handleTransitionEnd}
            >
                <PopupView {...other}
                    popupName={popupName}
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
    popupName: PropTypes.string.isRequired,
    bounceAnimate: PropTypes.bool,
    shrinkAnimate: PropTypes.bool,
    isCardSize: PropTypes.bool,
    isFullSize: PropTypes.bool,
    hasNarrowPadding: PropTypes.bool,
    hasWidePadding: PropTypes.bool,
    showClose: PropTypes.bool.isRequired,
    showArrows: PropTypes.bool.isRequired,
    handleCloseClick: PropTypes.func,
    handlePreviousClick: PropTypes.func,
    handleNextClick: PropTypes.func,
    handleContainerClick: PropTypes.func.isRequired,
    myChild: PropTypes.element.isRequired
},

PopupView = ({

    popupName,
    bounceAnimate,
    shrinkAnimate,
    isCardSize,
    isFullSize,
    hasNarrowPadding,
    hasWidePadding,
    showClose,
    showArrows,
    handleCloseClick,
    handlePreviousClick,
    handleNextClick,
    handleContainerClick,
    myChild

}) => (
    <div className={cx(
        // 'PopupView',
        `PopupView__${popupName}`,

        { 'PopupView__bounceAnimate': bounceAnimate,
          'PopupView__shrinkAnimate': shrinkAnimate,
          'PopupView__cardSize': isCardSize,
          'PopupView__fullSize': isFullSize }
    )}>
        {showClose && (
            <PopupButton
                isShadow
                buttonName={CLOSE_POPUP_BUTTON}
            />
        )}
        {showClose && (
            <PopupButton
                isShadow
                buttonName={PREVIOUS_POPUP_BUTTON}
            />
        )}
        {showClose && (
            <PopupButton
                isShadow
                buttonName={NEXT_POPUP_BUTTON}
            />
        )}
        <div
            className={cx(
                'PopupView__content',
                { 'PopupView__content__narrowPadding': hasNarrowPadding,
                  'PopupView__content__widePadding': hasWidePadding }
            )}
            onClick={handleContainerClick}
            onTouchStart={handleContainerClick}
        >
            {myChild}
            {showClose &&
                <PopupButton
                    accessKeysShown
                    handlePopupButtonClick={handleCloseClick}
                    buttonName={CLOSE_POPUP_BUTTON}
                />
            }
            {showArrows &&
                <PopupButton
                    accessKeysShown
                    handlePopupButtonClick={handlePreviousClick}
                    buttonName={PREVIOUS_POPUP_BUTTON}
                />
            }
            {showArrows &&
                <PopupButton
                    accessKeysShown
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
