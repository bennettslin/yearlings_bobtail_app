import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getChildClassNameForFaceLogic } from './helpers/faceHelper'
import { getCharStringForNumber } from '../../../../helpers/formatHelper'

import {
    FLOOR,
    CEILING,
    TILE
} from '../../sceneConstants'

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
                    'Face__path',
                    'Face__undercoat'
                )}
            />
            <path
                className={cx(
                    floorFaceClassName,
                    'Face__path',
                    'Face__undercoat'
                )}
            />

            {/* Single polygon for the overlying shade. */}
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
