import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getFacePath } from '../../../../faces'
import {
    getChildClassNameForCube,
    getChildClassNameForFace
} from '../../helper'

import { getCharStringForNumber } from 'helpers/format'

const propTypes = {
    // From parent.
    slantDirection: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    yIndex: PropTypes.number.isRequired,
    xIndex: PropTypes.number.isRequired,
    zIndex: PropTypes.number.isRequired,
    face: PropTypes.string.isRequired
}

const Face = memo(({
    slantDirection,
    level,
    yIndex,
    xIndex,
    zIndex,
    face
}) => {

    const
        faceClassName = getChildClassNameForFace({
            face,
            level,
            xIndex,
            yIndex
        }),

        cubeClassName = getChildClassNameForCube({
            level,
            xIndex,
            yIndex
        }),

        xCharIndex = getCharStringForNumber(xIndex)

    return (
        <g className={cx(
            'Face',
            level,
            `y${yIndex}`,
            `x${xCharIndex}`,
            `z${zIndex}`,
            face
        )}>

            <path
                {...{
                    className: cx(
                        'Square',
                        level,
                        face,
                        faceClassName,
                        cubeClassName
                    ),
                    d: getFacePath({
                        slantDirection,
                        level,
                        yIndex,
                        xIndex,
                        zIndex,
                        face
                    })
                }}
            />
            <path
                {...{
                    className: cx(
                        'Square',
                        'shade',
                        level,
                        face,
                        faceClassName
                    ),
                    d: getFacePath({
                        slantDirection,
                        level,
                        yIndex,
                        xIndex,
                        zIndex,
                        face
                    })
                }}
            />
        </g>
    )
})

Face.propTypes = propTypes

export default Face
