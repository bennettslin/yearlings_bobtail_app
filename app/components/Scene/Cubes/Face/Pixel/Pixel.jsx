// A single row of tiles.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPolygonPointsString } from '../helpers/polygonHelper'

const propTypes = {
    uniqueId: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
    polygonPoints: PropTypes.array,
    polygonPointsString: PropTypes.string
}

const Pixel = ({

    uniqueId,
    fill,
    polygonPoints,
    polygonPointsString

}) => (
    <polygon
        className={cx(
            'Pixel',
            `Pixel__${uniqueId}`
        )}
        fill={`#${fill}`}
        points={polygonPointsString || getPolygonPointsString(
            polygonPoints
        )}
    />
)

Pixel.propTypes = propTypes

export default Pixel
