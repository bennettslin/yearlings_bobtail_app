import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'
import './style'

const Tracker = ({ trackerWidth }) => (
    <CSSTransition
        appear
        unmountOnExit
        mountOnEnter
        {...{
            in: Number.isFinite(trackerWidth),
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
                    width: `${trackerWidth}%`
                }
            }}
        />
    </CSSTransition>
)

Tracker.propTypes = {
    trackerWidth: PropTypes.number
}

export default memo(Tracker)
