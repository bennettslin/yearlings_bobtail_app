import React, { memo } from 'react'
import PropTypes from 'prop-types'

import CSSTransition from 'react-transition-group/CSSTransition'
import PresenceView from '../View'

const transitionPropTypes = {
    // From parent.
    dynamicPresenceValue: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    resetRenderedState: PropTypes.func.isRequired
}

const PresenceTransition = ({
    dynamicPresenceValue,
    resetRenderedState,
    ...other

}) => {
    return (
        <CSSTransition
            unmountOnExit
            mountOnEnter
            {...{
                in: Boolean(dynamicPresenceValue),
                timeout: 200,
                classNames: { enterDone: 'Presence__visible' },
                onExited: resetRenderedState
            }}
        >
            <PresenceView {...other} />
        </CSSTransition>
    )
}

PresenceTransition.propTypes = transitionPropTypes

export default memo(PresenceTransition)
