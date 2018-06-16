// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Face from './Face/Face'

import { getComponentShouldUpdate } from '../../../helpers/generalHelper'
import { getStageCubeCornerPercentages } from '../sceneHelper'

import { CUBE_X_AXIS_LENGTH } from '../../../constants/stage'

class Cube extends Component {

    static propTypes = {
        isFloor: PropTypes.bool,
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        zIndex: PropTypes.number.isRequired,
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
                    'bitmapKey',
                    'slantDirection',
                    'stageWidth',
                    'stageHeight'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { slantDirection,
                xIndex,
                yIndex,

                ...other } = this.props,

            { isFloor,
              zIndex } = other,

            cubeCorners = getStageCubeCornerPercentages({
                xIndex, yIndex, zIndex, isFloor, slantDirection
            }),

            isLeft = xIndex < CUBE_X_AXIS_LENGTH / 2;

        return (
            <g
                className={cx(
                    `Cube__x${xIndex}`,
                    `Cube__z${parseInt(zIndex)}`
                )}
            >

                <Face {...other}
                    face="tile"
                    cubeCorners={cubeCorners}
                    slantDirection={slantDirection}
                />

                <Face {...other}
                    face="side"
                    isLeft={isLeft}
                    cubeCorners={cubeCorners}
                    slantDirection={slantDirection}
                />

                <Face {...other}
                    face="front"
                    cubeCorners={cubeCorners}
                    slantDirection={slantDirection}
                />

            </g>
        )
    }
}

export default Cube
