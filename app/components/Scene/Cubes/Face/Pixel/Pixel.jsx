// A single row of tiles.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    className: PropTypes.any,
    uniqueId: PropTypes.string.isRequired,
    fill: PropTypes.string,
    customFill: PropTypes.string,
    polygonPoints: PropTypes.array,
    pathString: PropTypes.string
}

const Pixel = ({
    className,
    uniqueId,
    fill,
    customFill,
    pathString

}) => Boolean(fill || customFill) && (
    <path
        className={cx(
            'Pixel',
            `Pixel__${uniqueId}`,
            className
        )}
        fill={fill ? `#${fill}` : customFill}
        {...pathString && {
            d: pathString
        }}
    />
)

Pixel.propTypes = propTypes

export default Pixel
