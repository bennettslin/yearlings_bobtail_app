import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getChildClassNameForCubeLogic,
    getChildClassNameForFaceLogic
} from 'helpers/className'

import { getCharStringForNumber } from 'helpers/formatHelper'

import {
    FLOOR,
    CEILING,
    TILE
} from 'constants/scene'

const propTypes = {
    // From parent.
    face: PropTypes.string.isRequired,
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
}

const Face = ({

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

            // Used just to find in the DOM.
            `Face__${faceInitial}${xCharIndex}${yIndex}`
        )}>

            <path
                className={cx(
                    ceilingFaceClassName,
                    ceilingCubeClassName,
                    'Face__path'
                )}
            />
            <path
                className={cx(
                    floorFaceClassName,
                    floorCubeClassName,
                    'Face__path'
                )}
            />

            {/* Single path for the overlying shade. */}
            <path
                className={cx(
                    ceilingFaceClassName,
                    'Face__path',
                    'Face__shade',
                    `Face__shade__${face}`,
                    face === TILE && 'Face__shade__ceilingTile'
                )}
            />
            <path
                className={cx(
                    floorFaceClassName,
                    'Face__path',
                    'Face__shade',
                    `Face__shade__${face}`,
                    face === TILE && 'Face__shade__floorTile'
                )}
            />
        </g>
    )
}

Face.propTypes = propTypes

export default Face
