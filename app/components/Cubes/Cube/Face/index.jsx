import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getCubeColour,
    getFacePath
} from '../helpers'

import { getCharStringForNumber } from 'helpers/format'

const propTypes = {
    // From parent.
    slantDirection: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    yIndex: PropTypes.number.isRequired,
    xIndex: PropTypes.number.isRequired,
    zIndex: PropTypes.number.isRequired,
    face: PropTypes.string.isRequired,
    hslaKey: PropTypes.string.isRequired
}

const Face = ({
    slantDirection,
    level,
    yIndex,
    xIndex,
    zIndex,
    face,
    hslaKey
}) => {

    const xCharIndex = getCharStringForNumber(xIndex)

    return (
        <path
            {...{
                className: cx(
                    'Face',
                    level,
                    face,
                    `y${yIndex}`,
                    `x${xCharIndex}`,
                    `z${zIndex}`
                ),
                d: getFacePath({
                    slantDirection,
                    level,
                    yIndex,
                    xIndex,
                    zIndex,
                    face
                }),
                fill: getCubeColour({
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
}

Face.propTypes = propTypes

export default memo(Face)
