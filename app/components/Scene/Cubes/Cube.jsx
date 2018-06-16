// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Face from './Face/Face'

import { getComponentShouldUpdate } from '../../../helpers/generalHelper'
import { getStageCubeCornerPercentages } from '../sceneHelper'

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

            cubeCorners = getStageCubeCornerPercentages({
                xIndex, yIndex, zIndex, isFloor, slantDirection
            })

        return (
            <g
                className={cx(
                    `Cube__x${xIndex}`,
                    `Cube__z${parseInt(zIndex)}`
                )}
            >

                {/* Don't render tiles if ceiling and floor tiles meet. */}
                {!tilesMeet && (
                    <Face {...other}
                        face="tile"
                        cubeCorners={cubeCorners}
                    />
                )}

                <Face {...other}
                    face="side"
                    cubeCorners={cubeCorners}
                />

                <Face {...other}
                    face="front"
                    cubeCorners={cubeCorners}
                />

            </g>
        )
    }
}

export default Cube
