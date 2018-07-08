import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PopupView from './PopupView'

/*************
 * CONTAINER *
 *************/

class Popup extends Component {

    static propTypes = {
        className: PropTypes.any,
        popupName: PropTypes.string.isRequired,
        isVisible: PropTypes.bool.isRequired,
        isFullSize: PropTypes.bool,
        noFlexCentre: PropTypes.bool,
        noAbsoluteFull: PropTypes.bool,
        staticZIndex: PropTypes.bool,
        displaysInOverlay: PropTypes.bool,
        handleCloseClick: PropTypes.func,
        handlePreviousClick: PropTypes.func,
        handleNextClick: PropTypes.func,
        handlePopupContainerClick: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            isDisplayed: this.props.isVisible
        }

        this._handlePopupContainerClick =
            this._handlePopupContainerClick.bind(this)
        this._handleTransitionEnd = this._handleTransitionEnd.bind(this)
    }

    componentDidUpdate(prevProps) {

        // Prevent infinite loop.
        if (!this.state.isDisplayed) {
            /**
             * If now visible, it should now also be displayed, but if now
             * invisible, don't change to undisplayed just yet.
             */
            if (this.props.isVisible && !prevProps.isVisible) {
                this.setState({
                    isDisplayed: true
                })
            }
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
        const {
                /* eslint-disable no-unused-vars */
                handlePopupContainerClick,
                /* eslint-enable no-unused-vars */

                className,
                popupName,
                isVisible,
                noFlexCentre,
                noAbsoluteFull,
                displaysInOverlay,
                staticZIndex,
                handlePreviousClick,
                handleNextClick,

                ...other
            } = this.props,

            { isFullSize } = other,

            { isDisplayed } = this.state

        return (
            <div
                className={cx(
                    'Popup',
                    `${popupName}Popup`,

                    isVisible ? 'Popup__visible' : 'Popup__invisible',

                    /**
                     * These classes are only to change z-index, so neither is
                     * necessary if this popup has a static z-index.
                     */
                    !staticZIndex && (
                        isDisplayed ?
                            'Popup__displayedZIndex' :
                            'Popup__undisplayedZIndex'
                    ),
                    isFullSize && 'Popup__fullSize',

                    // For animation styling.
                    { 'Popup__notInOverlay': !displaysInOverlay,

                      'flexCentreContainer': !noFlexCentre,
                      'absoluteFullContainer': !noAbsoluteFull },

                    className
                )}
                onTransitionEnd={this._handleTransitionEnd}
            >
                <PopupView {...other}
                    popupName={popupName}
                    displaysInOverlay={displaysInOverlay || isFullSize}
                    handlePreviousClick={handlePreviousClick}
                    handleNextClick={handleNextClick}
                    handleContainerClick={this._handlePopupContainerClick}
                />
            </div>
        )
    }
}

export default Popup
