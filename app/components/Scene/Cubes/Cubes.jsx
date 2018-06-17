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
import { getFrontCubeZIndex,
         getSideCubeZIndex } from './cubeHelper'

const zIndicesPropTypes = PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    ).isRequired,

    propTypes = {
        yIndex: PropTypes.number.isRequired,
        isFloor: PropTypes.bool,
        zIndices: zIndicesPropTypes,
        oppositeZIndices: zIndicesPropTypes,
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
    oppositeZIndices,
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
                `Cubes__${isFloor ? 'floor' : 'ceiling'}`,
                `Cubes__y${yIndex}${yIndex === 0 ? '__back' : ''}${yIndex === CUBE_Y_AXIS_LENGTH - 1 ? '__front' : ''}`,
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

                    // Determine if ceiling and floor tiles meet.
                    oppositeCubeZIndex = getValueInAbridgedMatrix(
                        oppositeZIndices, xIndex, yIndex
                    ),
                    oppositeTilesMeet = zIndex === oppositeCubeZIndex,

                    // Allow cube to determine max height of front face.
                    frontCubeZIndex = getFrontCubeZIndex({
                        isFloor,
                        zIndices,
                        slantDirection,
                        xIndex,
                        yIndex
                    }),

                    // Allow cube to determine max height of side face.
                    sideCubeZIndex = getSideCubeZIndex({
                        isFloor,
                        zIndices,
                        slantDirection,
                        xIndex,
                        yIndex
                    }),

                    bitmapKey = getValueInAbridgedMatrix(
                        bitmapKeys, xIndex, yIndex
                    )

                return (
                    <Cube
                        key={`${xIndex}_${yIndex}`}
                        xIndex={xIndex}
                        yIndex={invertedYIndex}
                        zIndex={zIndex}
                        frontCubeZIndex={frontCubeZIndex}
                        sideCubeZIndex={sideCubeZIndex}
                        oppositeTilesMeet={oppositeTilesMeet}
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
