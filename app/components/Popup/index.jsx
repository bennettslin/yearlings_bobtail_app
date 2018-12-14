import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'

import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'

import PopupView from './View'

import { populateRefs } from 'helpers/ref'

/*************
 * CONTAINER *
 *************/

class Popup extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        popupName: PropTypes.string.isRequired,
        isVisible: PropTypes.bool.isRequired,
        doUnmount: PropTypes.bool,
        isFullSize: PropTypes.bool,
        noFlexCentre: PropTypes.bool,
        noAbsoluteFull: PropTypes.bool,
        displaysInOverlay: PropTypes.bool,
        handleCloseClick: PropTypes.func,
        handlePreviousClick: PropTypes.func,
        handleNextClick: PropTypes.func
    }

    handleContainerClick = (e) => {
        this.dispatchStopPropagation(e)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                className,
                popupName,
                isVisible,
                doUnmount,
                noFlexCentre,
                noAbsoluteFull,
                displaysInOverlay,
                handlePreviousClick,
                handleNextClick,

                ...other
            } = this.props,

            { isFullSize } = other

        return (
            <CSSTransition
                {...{
                    in: isVisible,
                    classNames: {
                        enterDone: 'Popup__visible'
                    },
                    timeout: {
                        enter: 0,
                        exit: 150
                    },
                    mountOnEnter: doUnmount,
                    unmountOnExit: doUnmount
                }}
            >
                <div
                    className={cx(
                        'Popup',
                        `${popupName}Popup`,

                        isFullSize && 'Popup__fullSize',

                        // For animation styling.
                        {
                            'Popup__notInOverlay': !displaysInOverlay,
                            'flexCentreContainer': !noFlexCentre,
                            'absoluteFullContainer': !noAbsoluteFull
                        },

                        className
                    )}
                >
                    <PopupView {...other}
                        {...{
                            popupName,
                            displaysInOverlay:
                                displaysInOverlay || isFullSize,
                            handlePreviousClick,
                            handleNextClick,
                            handleContainerClick: this.handleContainerClick
                        }}
                    />
                    <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
                </div>
            </CSSTransition>
        )
    }
}

export default Popup
