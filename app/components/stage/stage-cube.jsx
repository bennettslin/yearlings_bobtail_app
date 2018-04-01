// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getStageCubeCornerFractions } from '../../helpers/tiles-helper'

import StageCubeFace from './stage-cube-face'

class StageCube extends Component {

    static propTypes = {
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        zIndex: PropTypes.number.isRequired,
        colour: PropTypes.string.isRequired,
        isFloor: PropTypes.bool.isRequired,
        slantDirection: PropTypes.string.isRequired,
        stageWidth: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired
    }

    // constructor(props) {
    //     super(props)

    //     const { xIndex,
    //             yIndex,
    //             isFloor,
    //             slantDirection } = props

    //     /**
    //      * Set the wood fractions in state here, because they will only change
    //      * when slant direction is changed.
    //      */
    //     this.state = {
    //         woodFractions: get2DFractionsForWoodIndices(
    //             xIndex, yIndex, isFloor, slantDirection
    //         )
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.slantDirection !== this.props.slantDirection) {

    //         const { xIndex,
    //                 yIndex,
    //                 isFloor,
    //                 slantDirection } = nextProps

    //         this.setState({
    //             woodFractions: get2DFractionsForWoodIndices(
    //                 xIndex, yIndex, isFloor, slantDirection
    //             )
    //         })
    //     }
    // }

    render() {
        const { isFloor,
                xIndex,
                yIndex,
                zIndex,
                stageWidth,
                stageHeight
            } = this.props,

            cubeCorners = getStageCubeCornerFractions({
                xIndex, yIndex, zIndex, isFloor
            })

        if (isFloor) {
            console.error(xIndex, yIndex, zIndex, cubeCorners)
        }

        return (
            <g className="stage-cube">

                <StageCubeFace
                    face="tile"
                    cubeCorners={cubeCorners}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />
            </g>
        )
    }
}

export default StageCube
