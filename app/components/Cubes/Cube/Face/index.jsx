import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getFacePath } from '../../../../faces'
import {
    getChildClassNameForCube,
    getChildClassNameForFace
} from '../../helper'

import { getCharStringForNumber } from 'helpers/format'

import {
    FLOOR,
    CEILING
} from 'constants/scene'

const propTypes = {
    // From parent.
    face: PropTypes.string.isRequired,
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired,
    ceilingZIndex: PropTypes.number.isRequired,
    floorZIndex: PropTypes.number.isRequired,
    slantDirection: PropTypes.string.isRequired
}

const Face = memo(({
    face,
    xIndex,
    yIndex,
    ceilingZIndex,
    floorZIndex,
    slantDirection
}) => {

    const
        ceilingFaceClassName = getChildClassNameForFace({
            face,
            level: CEILING,
            xIndex,
            yIndex
        }),

        floorFaceClassName = getChildClassNameForFace({
            face,
            level: FLOOR,
            xIndex,
            yIndex
        }),

        ceilingCubeClassName = getChildClassNameForCube({
            level: CEILING,
            xIndex,
            yIndex
        }),

        floorCubeClassName = getChildClassNameForCube({
            level: FLOOR,
            xIndex,
            yIndex
        }),

        xCharIndex = getCharStringForNumber(xIndex),
        faceInitial = face[0].toUpperCase()

    // This component never updates because its parent never updates.
    return (
        <g className={cx(
            'Face',
            face,

            // Used just to find in the DOM.
            `${faceInitial}${yIndex}${xCharIndex}`
        )}>

            <path
                {...{
                    className: cx(
                        'Square',
                        'ceiling',
                        face,
                        ceilingFaceClassName,
                        ceilingCubeClassName
                    ),
                    d: getFacePath({
                        slantDirection,
                        level: CEILING,
                        yIndex,
                        xIndex,
                        zIndex: ceilingZIndex,
                        face
                    })
                }}
            />
            <path
                {...{
                    className: cx(
                        'Square',
                        'ceiling',
                        face,
                        ceilingFaceClassName,
                        'shade'
                    ),
                    d: getFacePath({
                        slantDirection,
                        level: CEILING,
                        yIndex,
                        xIndex,
                        zIndex: ceilingZIndex,
                        face
                    })
                }}
            />

            <path
                {...{
                    className: cx(
                        'Square',
                        'floor',
                        face,
                        floorFaceClassName,
                        floorCubeClassName
                    ),
                    d: getFacePath({
                        slantDirection,
                        level: FLOOR,
                        yIndex,
                        xIndex,
                        zIndex: floorZIndex,
                        face
                    })
                }}
            />
            <path
                {...{
                    className: cx(
                        'Square',
                        'floor',
                        face,
                        floorFaceClassName,
                        'shade'
                    ),
                    d: getFacePath({
                        slantDirection,
                        level: FLOOR,
                        yIndex,
                        xIndex,
                        zIndex: floorZIndex,
                        face
                    })
                }}
            />
        </g>
    )
})

Face.propTypes = propTypes

export default Face
