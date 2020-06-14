import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'
import './style'

const Tracker = ({
    cursorWidth,
    className

}) => (
    <CSSTransition
        appear
        unmountOnExit
        mountOnEnter
        {...{
            in: Number.isFinite(cursorWidth),
            timeout: 200,
            classNames: { enterDone: 'Tracker__visible' }
        }}
    >
        <div
            {...{
                className: cx(
                    'Tracker',
                    'abF',
                    className
                ),
                style: {
                    width: `${cursorWidth}%`
                }
            }}
        />
    </CSSTransition>
)

Tracker.propTypes = {
    cursorWidth: PropTypes.number,
    className: PropTypes.string
}

export default memo(Tracker)
