// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Face from './Face/Face'

import { getCharStringForNumber } from '../../../helpers/formatHelper'
import { getComponentShouldUpdate } from '../../../helpers/generalHelper'
import { getStageCubeCornerPercentages } from '../sceneHelper'

import { getRelativeZHeight,
         getSideDirection,
         doRenderFrontOrSideFace,
         doRenderTileFace } from './cubeHelper'

import { FRONT,
         SIDE,
         TILE } from '../constants'

class Cube extends Component {

    static propTypes = {
        isFloor: PropTypes.bool,
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        zIndex: PropTypes.number.isRequired,

        frontCubeZIndex: PropTypes.number.isRequired,
        sideCubeZIndex: PropTypes.number.isRequired,
        oppositeTilesMeet: PropTypes.bool.isRequired,

        bitmapKey: PropTypes.string.isRequired,
        slantDirection: PropTypes.string.isRequired,
        stageWidth: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isFloor',
                    'xIndex',
                    'yIndex',
                    'zIndex',
                    'frontCubeZIndex',
                    'sideCubeZIndex',
                    'oppositeTilesMeet',
                    'bitmapKey',
                    'slantDirection',
                    'stageWidth',
                    'stageHeight'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { xIndex,
                yIndex,
                frontCubeZIndex,
                sideCubeZIndex,
                oppositeTilesMeet,
                ...other } = this.props,

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

            doRenderFront = doRenderFrontOrSideFace({
                relativeZHeight: frontRelativeZHeight
            }),

            sideRelativeZHeight = getRelativeZHeight({
                isFloor,
                zIndex,
                subtractedZIndex: sideCubeZIndex,
                doLog: isFloor && xIndex === 0 && yIndex === 1
            }),

            doRenderSide = doRenderFrontOrSideFace({
                xIndex,
                sideDirection,
                relativeZHeight: sideRelativeZHeight
            }),

            doRenderTile = doRenderTileFace({
                isFloor,
                zIndex,
                oppositeTilesMeet
            })

        // if (!doRenderTile && !doRenderFront && !doRenderSide) {
        //     return null
        // }

        const cubeCorners = getStageCubeCornerPercentages({
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
                {(true || doRenderTile) && (
                    <Face {...other}
                        face={TILE}
                        cubeCorners={cubeCorners}
                    />
                )}

                {(true || doRenderSide) && (
                    <Face {...other}
                        face={SIDE}
                        sideDirection={sideDirection}
                        relativeZHeight={sideRelativeZHeight}
                        cubeCorners={cubeCorners}
                    />
                )}

                {(true || doRenderFront) && (
                    <Face {...other}
                        face={FRONT}
                        relativeZHeight={frontRelativeZHeight}
                        cubeCorners={cubeCorners}
                    />
                )}
            </g>
        )
    }
}

export default Cube
