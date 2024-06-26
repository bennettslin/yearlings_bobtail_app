import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'
import getDidMountHoc from '../../hocs/DidMountHoc'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import PopupView from './View'
import './style'

const Popup = ({
    didMount,
    popupName,
    isVisible,
    appear,
    mountOnEnter,
    unmountOnExit,
    noFlexCentre,
    noAbsoluteFull,
    displaysInOverlay,
    handlePreviousClick,
    handleNextClick,
    onExited,
    ...other

}) => {
    const
        stopPropagation = useRef(),
        { isFullPopup } = other

    const handleContainerClick = e => {
        stopPropagation.current(e)
    }

    return (
        <CSSTransition
            {...{
                in: isVisible,
                timeout: 200,
                classNames: {
                    exitActive: 'Popup__exiting',
                    enterDone: 'Popup__visible',
                },
                appear,
                mountOnEnter,
                unmountOnExit,
                onExited,
            }}
        >
            <div
                {...{
                    className: cx(
                        'Popup',
                        popupName,
                        didMount && [
                            isFullPopup && 'Popup__fullHeight',

                            // For animation styling.
                            {
                                Popup__notInOverlay: !displaysInOverlay,
                                fCC: !noFlexCentre,
                                abF: !noAbsoluteFull,
                            },
                        ],
                    ),
                }}
            >
                <PopupView {...other}
                    {...{
                        popupName,
                        displaysInOverlay,
                        handlePreviousClick,
                        handleNextClick,
                        handleContainerClick,
                    }}
                />
                <StopPropagationDispatcher {...{ ref: stopPropagation }} />
            </div>
        </CSSTransition>
    )
}

Popup.propTypes = {
    didMount: PropTypes.bool.isRequired,
    popupName: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    appear: PropTypes.bool,
    mountOnEnter: PropTypes.bool,
    unmountOnExit: PropTypes.bool,
    isFullPopup: PropTypes.bool,
    noFlexCentre: PropTypes.bool,
    noAbsoluteFull: PropTypes.bool,
    displaysInOverlay: PropTypes.bool,
    handlePreviousClick: PropTypes.func,
    handleNextClick: PropTypes.func,
    onExited: PropTypes.func,
}

export default memo(getDidMountHoc(Popup))
