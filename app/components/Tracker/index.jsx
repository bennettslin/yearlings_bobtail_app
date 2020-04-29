import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    cursorWidth: PropTypes.number,
    className: PropTypes.string
}

const Tracker = ({
    cursorWidth,
    className

}) => Boolean(cursorWidth) && (
    <div
        {...{
            className: cx(
                'Tracker',
                className,
                'abF'
            ),
            style: {
                width: `${cursorWidth}%`
            }
        }}
    />
)

Tracker.propTypes = propTypes

export default memo(Tracker)
