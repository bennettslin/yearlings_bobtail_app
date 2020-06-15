import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'
import './style'

const Tracker = ({ isVertical, trackerLength }) => (
    <CSSTransition
        appear
        unmountOnExit
        mountOnEnter
        {...{
            in: Number.isFinite(trackerLength),
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
                    [isVertical ? 'height' : 'width']: `${trackerLength}%`
                }
            }}
        />
    </CSSTransition>
)

Tracker.propTypes = {
    isVertical: PropTypes.bool,
    trackerLength: PropTypes.number
}

export default memo(Tracker)
