import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getChildClassNameForCubeLogic,
    getChildClassNameForFaceLogic
} from 'helpers/className'

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
        ceilingFaceClassName = getChildClassNameForFaceLogic({
            face,
            level: CEILING,
            xIndex,
            yIndex
        }),

        floorFaceClassName = getChildClassNameForFaceLogic({
            face,
            level: FLOOR,
            xIndex,
            yIndex
        }),

        ceilingCubeClassName = getChildClassNameForCubeLogic({
            level: CEILING,
            xIndex,
            yIndex
        }),

        floorCubeClassName = getChildClassNameForCubeLogic({
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
            `${faceInitial}${xCharIndex}${yIndex}`
        )}>

            <path
                className={cx(
                    'FacePath',
                    'ceiling',
                    ceilingFaceClassName,
                    ceilingCubeClassName
                )}
            />
            <path
                className={cx(
                    'FacePath',
                    'ceiling',
                    ceilingFaceClassName,
                    'shade'
                )}
            />

            <path
                className={cx(
                    'FacePath',
                    'floor',
                    floorFaceClassName,
                    floorCubeClassName
                )}
            />
            <path
                className={cx(
                    'FacePath',
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
