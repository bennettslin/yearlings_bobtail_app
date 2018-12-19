import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { CSSTransition } from 'react-transition-group'
import PresenceHocView from '../View'

const transitionPropTypes = {
    // From parent.
    dynamicPresenceValue: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    resetRenderedState: PropTypes.func.isRequired
}

const PresenceHocTransition = memo(({
    dynamicPresenceValue,
    resetRenderedState,
    ...other

}) => {
    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            {...{
                in: Boolean(dynamicPresenceValue),
                timeout: {
                    enter: 0,
                    exit: 200
                },
                classNames: {
                    enterDone: 'Presence__visible'
                },
                onExited: resetRenderedState
            }}
        >
            <PresenceHocView {...other} />
        </CSSTransition>
    )
})

PresenceHocTransition.propTypes = transitionPropTypes

export default PresenceHocTransition
