import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import PopupView from './View'
import './style'

const Popup = ({
    popupName,
    isVisible,
    doMountonEnter,
    doUnmountOnExit,
    noFlexCentre,
    noAbsoluteFull,
    displaysInOverlay,
    handlePreviousClick,
    handleNextClick,
    ...other

}) => {
    const
        stopPropagation = useRef(),
        { isFullHeight } = other

    const handleContainerClick = e => {
        logEvent({ e, componentName: popupName })
        stopPropagation.current(e)
    }

    return (
        <CSSTransition
            {...{
                in: isVisible,
                timeout: 200,
                classNames: {
                    exitActive: 'Popup__exiting',
                    enterDone: 'Popup__visible'
                },
                mountOnEnter: doMountonEnter,
                unmountOnExit: doUnmountOnExit
            }}
        >
            <div
                className={cx(
                    popupName,
                    'Popup',
                    isFullHeight && 'Popup__fullHeight',

                    // For animation styling.
                    {
                        'Popup__notInOverlay': !displaysInOverlay,
                        'fCC': !noFlexCentre,
                        'abF': !noAbsoluteFull
                    }
                )}
            >
                <PopupView {...other}
                    {...{
                        popupName,
                        displaysInOverlay,
                        handlePreviousClick,
                        handleNextClick,
                        handleContainerClick
                    }}
                />
                <StopPropagationDispatcher {...{ ref: stopPropagation }} />
            </div>
        </CSSTransition>
    )
}

Popup.propTypes = {
    popupName: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    doMountonEnter: PropTypes.bool,
    doUnmountOnExit: PropTypes.bool,
    isFullHeight: PropTypes.bool,
    noFlexCentre: PropTypes.bool,
    noAbsoluteFull: PropTypes.bool,
    displaysInOverlay: PropTypes.bool,
    handlePreviousClick: PropTypes.func,
    handleNextClick: PropTypes.func
}

export default Popup
