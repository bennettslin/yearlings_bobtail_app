// A single row of tiles.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPathString } from '../helpers/polygonHelper'

const propTypes = {
    uniqueId: PropTypes.string.isRequired,
    fill: PropTypes.string,
    customFill: PropTypes.string,
    polygonPoints: PropTypes.array,
    pathString: PropTypes.string
}

const Pixel = ({

    uniqueId,
    fill,
    customFill,
    polygonPoints,
    pathString

}) => Boolean(fill || customFill) && (
    <path
        className={cx(
            'Pixel',
            `Pixel__${uniqueId}`
        )}
        fill={fill ? `#${fill}` : customFill}
        d={pathString || getPathString(
            polygonPoints
        )}
    />
)

Pixel.propTypes = propTypes

export default Pixel
