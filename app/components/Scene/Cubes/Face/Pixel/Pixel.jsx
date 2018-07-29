// A single row of tiles.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getClosedPathString } from '../helpers/polygonHelper'

const propTypes = {
    uniqueId: PropTypes.string.isRequired,
    fill: PropTypes.string,
    customFill: PropTypes.string,
    polygonPoints: PropTypes.array,
    polygonPointsString: PropTypes.string
}

const Pixel = ({

    uniqueId,
    fill,
    customFill,
    polygonPoints,
    polygonPointsString

}) => Boolean(fill || customFill) && (
    <path
        className={cx(
            'Pixel',
            `Pixel__${uniqueId}`
        )}
        fill={fill ? `#${fill}` : customFill}
        d={polygonPointsString || getClosedPathString(
            polygonPoints
        )}
    />
)

Pixel.propTypes = propTypes

export default Pixel
