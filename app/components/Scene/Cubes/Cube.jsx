// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Face from './Face/Face'

import { getComponentShouldUpdate } from '../../../helpers/generalHelper'
import { getStageCubeCornerPercentages } from '../sceneHelper'

import { getMaxFaceHeight,
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
        tilesMeet: PropTypes.bool.isRequired,
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
                    'tilesMeet',
                    'bitmapKey',
                    'slantDirection',
                    'stageWidth',
                    'stageHeight'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { yIndex,
                tilesMeet,
                ...other } = this.props,

            { isFloor,
              xIndex,
              zIndex,
              slantDirection } = other,

            maxFaceHeight = getMaxFaceHeight({
                isFloor,
                zIndex
            }),

            sideDirection = getSideDirection({
                xIndex,
                slantDirection
            }),

            /**
             * Putting logic to render face here, because if none of the faces
             * are rendered, then we won't render the cube at all.
             */

            doRenderFront = doRenderFrontOrSideFace({
                maxFaceHeight
            }),

            doRenderSide = doRenderFrontOrSideFace({
                xIndex,
                sideDirection,
                maxFaceHeight
            }),

            doRenderTile = doRenderTileFace({
                tilesMeet,
                maxFaceHeight
            })

        if (!doRenderTile && !doRenderFront && !doRenderSide) {
            return null
        }

        const
            cubeCorners = getStageCubeCornerPercentages({
                xIndex, yIndex, zIndex, isFloor, slantDirection
            }),

            faceProps = {
                maxFaceHeight,
                cubeCorners
            }

        return (
            <g
                className={cx(
                    `Cube__x${xIndex}`,
                    `Cube__z${parseInt(zIndex)}`
                )}
            >
                {doRenderTile && (
                    <Face {...other} {...faceProps}
                        face={TILE}
                    />
                )}

                {doRenderSide && (
                    <Face {...other} {...faceProps}
                        face={SIDE}
                        sideDirection={sideDirection}
                    />
                )}

                {doRenderFront && (
                    <Face {...other} {...faceProps}
                        face={FRONT}
                    />
                )}
            </g>
        )
    }
}

export default Cube
