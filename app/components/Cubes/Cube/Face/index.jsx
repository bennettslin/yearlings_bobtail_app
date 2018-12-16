import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getChildClassNameForCube,
    getChildClassNameForFace
} from '../helper'

import { getCharStringForNumber } from 'helpers/format'

import {
    FLOOR,
    CEILING
} from 'constants/scene'

const propTypes = {
    // From parent.
    face: PropTypes.string.isRequired,
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
}

const Face = memo(({

    face,
    xIndex,
    yIndex

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
                className={cx(
                    'Square',
                    'ceiling',
                    ceilingFaceClassName,
                    ceilingCubeClassName
                )}
            />
            <path
                className={cx(
                    'Square',
                    'ceiling',
                    ceilingFaceClassName,
                    'shade'
                )}
            />

            <path
                className={cx(
                    'Square',
                    'floor',
                    floorFaceClassName,
                    floorCubeClassName
                )}
            />
            <path
                className={cx(
                    'Square',
                    'floor',
                    floorFaceClassName,
                    'shade'
                )}
            />
        </g>
    )
})

Face.propTypes = propTypes

export default Face
