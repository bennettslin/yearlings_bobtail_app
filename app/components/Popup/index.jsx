import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'

import PopupView from './View'

/*************
 * CONTAINER *
 *************/

class Popup extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        popupName: PropTypes.string.isRequired,
        isVisible: PropTypes.bool.isRequired,
        isFullSize: PropTypes.bool,
        noFlexCentre: PropTypes.bool,
        noAbsoluteFull: PropTypes.bool,
        displaysInOverlay: PropTypes.bool,
        handleCloseClick: PropTypes.func,
        handlePreviousClick: PropTypes.func,
        handleNextClick: PropTypes.func
    }

    state = {
        isDisplayed: this.props.isVisible
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

    _handleTransitionEnd = (e) => {
        // FIXME: This is a brittle way to handle it.
        if (e.propertyName === 'opacity') {

            // Set display to none when popup closes.
            if (!this.props.isVisible) {
                this.setState({
                    isDisplayed: false
                })
            }
        }
    }

    handleContainerClick = (e) => {
        if (this.state.isDisplayed) {
            this.dispatchStopPropagation(e)
        }
    }

    render() {
        const {
                className,
                popupName,
                isVisible,
                noFlexCentre,
                noAbsoluteFull,
                displaysInOverlay,
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

                    isDisplayed ?
                        'Popup__displayedZIndex' :
                        'Popup__undisplayedZIndex',

                    isFullSize && 'Popup__fullSize',

                    // For animation styling.
                    {
                        'Popup__notInOverlay': !displaysInOverlay,

                        'flexCentreContainer': !noFlexCentre,
                        'absoluteFullContainer': !noAbsoluteFull
                    },

                    className
                )}
                onTransitionEnd={this._handleTransitionEnd}
            >
                <PopupView {...other}
                    {...{
                        popupName,
                        displaysInOverlay: displaysInOverlay || isFullSize,
                        handlePreviousClick,
                        handleNextClick,
                        handleContainerClick: this.handleContainerClick
                    }}
                />
                <StopPropagationDispatcher {...{ parentThis: this }} />
            </div>
        )
    }
}

export default Popup
