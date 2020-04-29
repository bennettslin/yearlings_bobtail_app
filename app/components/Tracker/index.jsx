import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import CSSTransition from 'react-transition-group/CSSTransition'

const propTypes = {
    // From parent.
    cursorWidth: PropTypes.number
}

const Tracker = ({
    cursorWidth

}) => (
    <CSSTransition
        appear
        unmountOnExit
        mountOnEnter
        {...{
            in: Boolean(cursorWidth),
            timeout: 200,
            classNames: { enterDone: 'Tracker__visible' }
        }}
    >
        <div
            {...{
                className: cx(
                    'Tracker',
                    'abF'
                ),
                style: {
                    width: `${cursorWidth}%`
                }
            }}
        />
    </CSSTransition>
)

Tracker.propTypes = propTypes

export default memo(Tracker)
