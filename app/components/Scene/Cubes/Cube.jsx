// A single cube, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Face from './Face/Face'

import { getCharStringForNumber } from '../../../helpers/formatHelper'
import { getStageCubeCornerPercentages } from '../sceneHelper'
import { getCubesForKey } from '../sceneDataHelper'
import { getSideDirection } from './cubeHelper'
import {
    getPropsAreShallowEqual,
    getValueInAbridgedMatrix
} from '../../../helpers/generalHelper'

import {
    FRONT,
    SIDE,
    TILE
} from '../constants'

class Cube extends Component {

    static propTypes = {

        // From parent.
        isFloor: PropTypes.bool,
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        cubesKey: PropTypes.string.isRequired,
        slantDirection: PropTypes.string.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
                cubesKey,
                ...other
            } = this.props,

            {
                isFloor,
                xIndex,
                yIndex,
                slantDirection
            } = other,

            {
                ceiling,
                floor
            } = getCubesForKey(cubesKey),

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
                        zIndex
                    }}
                />
                <Face {...other}
                    {...{
                        face: SIDE,
                        bitmapKey,
                        cubeCorners,
                        sideDirection,
                        zIndex,
                        zIndices
                    }}
                />
                <Face {...other}
                    {...{
                        face: FRONT,
                        bitmapKey,
                        cubeCorners,
                        zIndex,
                        zIndices
                    }}
                />
            </g>
        )
    }
}

export default Cube
