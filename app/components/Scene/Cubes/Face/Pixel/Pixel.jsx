// A single row of tiles.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    className: PropTypes.any,
    identifier: PropTypes.string.isRequired
}

const Pixel = ({
    className,
    identifier,
    pathString

}) => (
    <path
        className={cx(
            'Pixel',
            identifier,
            className
        )}
        {...pathString && {
            d: pathString
        }}
    />
)

Pixel.propTypes = propTypes

export default Pixel
