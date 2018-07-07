// A single cube, whether ceiling or floor.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Face from './Face/Face'

import { getCharStringForNumber } from '../../../helpers/formatHelper'
import { getStageCubeCornerPercentages } from '../sceneHelper'

import {
    getRelativeZHeight,
    getSideDirection,
    getFrontCubeZIndex,
    getSideCubeZIndex
} from './cubeHelper'
import { getValueInAbridgedMatrix } from '../../../helpers/generalHelper'

import { CUBES } from '../../../constants/cubes/cubes'
import { DEFAULT_STAGE_KEY } from '../../../constants/cubes/cubesConstants'

import {
    FRONT,
    SIDE,
    TILE
} from '../constants'

class Cube extends PureComponent {

    static propTypes = {

        // From parent.
        isFloor: PropTypes.bool,
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        cubesKey: PropTypes.string.isRequired
    }

    render() {
        const {
                xIndex,
                yIndex,
                cubesKey,
                ...other
            } = this.props,

            {
                isFloor
            } = other,

            {
                ceiling = CUBES[DEFAULT_STAGE_KEY].ceiling,
                floor = CUBES[DEFAULT_STAGE_KEY].floor,
                slantDirection = ''
            } = CUBES[cubesKey],

            {
                zIndices,
                bitmapKeys
            } = isFloor ? floor : ceiling,

            zIndex = getValueInAbridgedMatrix(
                zIndices, xIndex, yIndex
            ),

            sideDirection = getSideDirection({
                xIndex,
                slantDirection
            }),

            frontCubeZIndex = getFrontCubeZIndex({
                isFloor,
                zIndices,
                slantDirection,
                xIndex,
                yIndex
            }),
            frontRelativeZHeight = getRelativeZHeight({
                isFloor,
                zIndex,
                subtractedZIndex: frontCubeZIndex,
                doLog: isFloor && xIndex === 0 && yIndex === 1
            }),

            sideCubeZIndex = getSideCubeZIndex({
                isFloor,
                zIndices,
                slantDirection,
                xIndex,
                yIndex
            }),
            sideRelativeZHeight = getRelativeZHeight({
                isFloor,
                zIndex,
                subtractedZIndex: sideCubeZIndex,
                doLog: isFloor && xIndex === 0 && yIndex === 1
            }),

            cubeCorners = getStageCubeCornerPercentages({
                xIndex,
                yIndex,
                zIndex,
                isFloor,
                slantDirection
            }),

            bitmapKey = getValueInAbridgedMatrix(
                bitmapKeys, xIndex, yIndex
            )

        return (
            <g
                className={cx(
                    `Cube__x${getCharStringForNumber(xIndex)}`,

                    // Determines shading of floor tile.
                    `Cube__z${getCharStringForNumber(parseInt(zIndex))}`
                )}
            >
                <Face {...other}
                    {...{
                        face: TILE,
                        bitmapKey,
                        cubeCorners,
                        yIndex,
                        zIndex,
                    }}
                />
                <Face {...other}
                    {...{
                        face: SIDE,
                        bitmapKey,
                        cubeCorners,
                        sideDirection,
                        yIndex,
                        zIndex,
                        relativeZHeight: sideRelativeZHeight
                    }}
                />
                <Face {...other}
                    {...{
                        face: FRONT,
                        bitmapKey,
                        cubeCorners,
                        yIndex,
                        zIndex,
                        relativeZHeight: frontRelativeZHeight
                    }}
                />
            </g>
        )
    }
}

export default Cube
