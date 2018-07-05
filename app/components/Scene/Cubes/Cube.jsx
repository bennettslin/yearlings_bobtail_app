// A single cube, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Face from './Face/Face'

import { getCharStringForNumber } from '../../../helpers/formatHelper'
import { getStageCubeCornerPercentages } from '../sceneHelper'

import {
    getRelativeZHeight,
    getSideDirection
} from './cubeHelper'

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
        zIndex: PropTypes.number.isRequired,

        frontCubeZIndex: PropTypes.number.isRequired,
        sideCubeZIndex: PropTypes.number.isRequired,

        bitmapKey: PropTypes.string.isRequired,
        slantDirection: PropTypes.string.isRequired
    }

    render() {
        const {
                xIndex,
                yIndex,
                frontCubeZIndex,
                sideCubeZIndex,
                ...other
            } = this.props,

            { isFloor,
              zIndex,
              slantDirection } = other,

            sideDirection = getSideDirection({
                xIndex,
                slantDirection
            }),

            /**
             * TODO: For now, we are putting logic to render face here, because,
             * if none of the faces are rendered, then we won't render the cube
             * at all. I may revisit this decision, as it might make the
             * animation ugly.
             */

            frontRelativeZHeight = getRelativeZHeight({
                isFloor,
                zIndex,
                subtractedZIndex: frontCubeZIndex,
                doLog: isFloor && xIndex === 0 && yIndex === 1
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
            })

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
                        cubeCorners,
                        yIndex
                    }}
                />
                <Face {...other}
                    {...{
                        face: SIDE,
                        cubeCorners,
                        sideDirection,
                        yIndex,
                        relativeZHeight: sideRelativeZHeight
                    }}
                />
                <Face {...other}
                    {...{
                        face: FRONT,
                        cubeCorners,
                        yIndex,
                        relativeZHeight: frontRelativeZHeight
                    }}
                />
            </g>
        )
    }
}

export default Cube
