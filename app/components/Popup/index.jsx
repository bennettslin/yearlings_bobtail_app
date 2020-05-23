import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'

import StopPropagationDispatcher from '../../dispatchers/StopPropagation'

import PopupView from './View'

import { populateRefs } from '../../helpers/ref'

/*************
 * CONTAINER *
 *************/

class Popup extends PureComponent {

    static propTypes = {
        popupName: PropTypes.string.isRequired,
        isVisible: PropTypes.bool.isRequired,
        doMountonEnter: PropTypes.bool,
        doUnmountOnExit: PropTypes.bool,
        isFullHeight: PropTypes.bool,
        noFlexCentre: PropTypes.bool,
        noAbsoluteFull: PropTypes.bool,
        displaysInOverlay: PropTypes.bool,
        handleCloseClick: PropTypes.func,
        handlePreviousClick: PropTypes.func,
        handleNextClick: PropTypes.func
    }

    handleContainerClick = (e) => {
        const { popupName } = this.props
        logEvent({ e, componentName: popupName })
        this.dispatchStopPropagation(e)
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        const {
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
            } = this.props,

            { isFullHeight } = other

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
                            'flexCentreContainer': !noFlexCentre,
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
