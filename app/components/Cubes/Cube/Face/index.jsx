import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSvgFillForFace } from './helpers/colours'
import { getSvgDataPathForFace } from './helpers/paths'
import { getCharStringForNumber } from '../../../../helpers/format'
import './style'

const Face = ({
    slantDirection,
    level,
    yIndex,
    xIndex,
    zIndex,
    face,
    hslaKey

}) => (
    <path
        {...{
            className: cx(
                'Face',
                level,
                face,
                `y${yIndex}`,
                `x${getCharStringForNumber(xIndex)}`,
                `z${zIndex}`
            ),
            d: getSvgDataPathForFace({
                slantDirection,
                level,
                yIndex,
                xIndex,
                zIndex,
                face
            }),
            fill: getSvgFillForFace({
                hslaKey,
                level,
                yIndex,
                xIndex,
                zIndex,
                face
            })
        }}
    />
)

Face.propTypes = {
    slantDirection: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    yIndex: PropTypes.number.isRequired,
    xIndex: PropTypes.number.isRequired,
    zIndex: PropTypes.number.isRequired,
    face: PropTypes.string.isRequired,
    hslaKey: PropTypes.string.isRequired
}

export default memo(Face)
