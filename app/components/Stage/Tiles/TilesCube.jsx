// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TilesCubeFace from './TilesCubeFace'

import { getComponentShouldUpdate } from '../../../helpers/generalHelper'
import { getStageCubeCornerPercentages } from '../../../helpers/tilesHelper'

import { TILE_COLUMNS_LENGTH } from '../../../constants/stage'

class TilesCube extends Component {

    static propTypes = {
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        zIndex: PropTypes.number.isRequired,
        colour: PropTypes.string.isRequired,
        isFloor: PropTypes.bool,
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
                    'xIndex',
                    'yIndex',
                    'zIndex',
                    'colour',
                    'isFloor',
                    'slantDirection',
                    'stageWidth',
                    'stageHeight'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { isFloor,
                slantDirection,
                xIndex,
                yIndex,
                zIndex,
                stageWidth,
                stageHeight
            } = this.props,

            cubeCorners = getStageCubeCornerPercentages({
                xIndex, yIndex, zIndex, isFloor, slantDirection
            }),

            isLeft = xIndex < TILE_COLUMNS_LENGTH / 2;

        return (
            <g className="TilesCube">

                <TilesCubeFace
                    face="tile"
                    cubeCorners={cubeCorners}
                    slantDirection={slantDirection}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

                <TilesCubeFace
                    face="side"
                    isLeft={isLeft}
                    cubeCorners={cubeCorners}
                    slantDirection={slantDirection}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

                <TilesCubeFace
                    face="front"
                    cubeCorners={cubeCorners}
                    slantDirection={slantDirection}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />
            </g>
        )
    }
}

export default TilesCube
