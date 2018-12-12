import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Transition from 'react-transition-group/Transition'

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

    handleContainerClick = (e) => {
        this.dispatchStopPropagation(e)
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

            { isFullSize } = other

        return (
            <Transition
                {...{
                    in: isVisible,
                    timeout: {
                        enter: 0,
                        exit: 150
                    }
                }}
            >
                {(state) => (
                    <div
                        className={cx(
                            'Popup',
                            `${popupName}Popup`,

                            state === 'entered' ?
                                'Popup__visible' :
                                'Popup__invisible',

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
                        <StopPropagationDispatcher {...{ parentThis: this }} />
                    </div>
                )}
            </Transition>
        )
    }
}

export default Popup
