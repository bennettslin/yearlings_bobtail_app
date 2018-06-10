// A single row of tiles.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../../DynamicSvg/DynamicSvg'
import Cube from './Cube'

import { DEFAULT_X_AXIS_INDICES,
         SLANTED_LEFT_X_AXIS_INDICES,
         SLANTED_RIGHT_X_AXIS_INDICES } from '../constants'

import { CUBE_Y_AXIS_LENGTH } from '../../../constants/stage'

import { getValueInAbridgedMatrix } from '../../../helpers/generalHelper'

const propTypes = {
    yIndex: PropTypes.number.isRequired,
    isFloor: PropTypes.bool,
    zIndices: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    ).isRequired,
    bitmapKeys: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired
    ).isRequired,
    slantDirection: PropTypes.string.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const Cubes = ({

    yIndex,
    zIndices,
    bitmapKeys,
    isFloor,
    slantDirection,
    stageWidth,
    stageHeight

}) => {

    /**
     * Invert the rows, since top row in array should be top row
     * shown in floor field.
     */
    const invertedYIndex = CUBE_Y_AXIS_LENGTH - yIndex - 1

    let columnIndicesArray = DEFAULT_X_AXIS_INDICES

    if (slantDirection === 'left') {
        columnIndicesArray = SLANTED_LEFT_X_AXIS_INDICES;

    } else if (slantDirection === 'right') {
        columnIndicesArray = SLANTED_RIGHT_X_AXIS_INDICES
    }

    return (
        <DynamicSvg
            className={cx(
                isFloor ? 'FloorCubes' : 'CeilingCubes',
                `Cubes__row${yIndex}`,
                'absoluteFullContainer'
            )}
            viewBoxWidth={stageWidth}
            viewBoxHeight={stageHeight}
        >
            {columnIndicesArray.map(xIndex => {

                const
                    zIndex = getValueInAbridgedMatrix(
                        zIndices, xIndex, yIndex
                    ),

                    bitmapKey = getValueInAbridgedMatrix(
                        bitmapKeys, xIndex, yIndex
                    )

                return (
                    <Cube
                        key={`${xIndex}_${yIndex}`}
                        xIndex={xIndex}
                        yIndex={invertedYIndex}
                        zIndex={zIndex}
                        bitmapKey={bitmapKey}
                        isFloor={isFloor}
                        slantDirection={slantDirection}
                        stageWidth={stageWidth}
                        stageHeight={stageHeight}
                    />
                )
            })}
        </DynamicSvg>
    )
}

Cubes.propTypes = propTypes

export default Cubes
