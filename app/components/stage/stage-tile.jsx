// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { get2DFractionsForIndices,
         get2DFractionsForWoodIndices } from '../../helpers/tiles-helper'

import StageTileCubeFace from './stage-tile-cube-face'

class StageTile extends Component {

    static propTypes = {
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        zIndex: PropTypes.number.isRequired,
        isFloor: PropTypes.bool.isRequired,
        slantDirection: PropTypes.string.isRequired,
        colour: PropTypes.string.isRequired,
        stageWidth: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props)

        const { xIndex,
                yIndex,
                isFloor,
                slantDirection } = props

        /**
         * Set the wood fractions in state here, because they will only change
         * when slant direction is changed.
         */
        this.state = {
            woodFractions: get2DFractionsForWoodIndices(
                xIndex, yIndex, isFloor, slantDirection
            )
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.slantDirection !== this.props.slantDirection) {

            const { xIndex,
                    yIndex,
                    isFloor,
                    slantDirection } = nextProps

            this.setState({
                woodFractions: get2DFractionsForWoodIndices(
                    xIndex, yIndex, isFloor, slantDirection
                )
            })
        }
    }

    render() {
        const { colour,
                isFloor,
                slantDirection,
                xIndex,
                yIndex,
                zIndex,
                stageWidth,
                stageHeight
            } = this.props,

            // Get the tile fractions.
            tileFractions = get2DFractionsForIndices(
                xIndex, yIndex, zIndex, slantDirection
            ),

            { woodFractions } = this.state

        return (
            <g className="stage-tile">

                <StageTileCubeFace
                    className="front"
                    colour={colour}
                    isFloor={isFloor}
                    slantDirection={slantDirection}
                    woodFractions={woodFractions}
                    tileFractions={tileFractions}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />
                <StageTileCubeFace
                    className="top"
                    colour={colour}
                    isFloor={isFloor}
                    slantDirection={slantDirection}
                    woodFractions={woodFractions}
                    tileFractions={tileFractions}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />
                <StageTileCubeFace
                    className="side"
                    colour={colour}
                    isFloor={isFloor}
                    slantDirection={slantDirection}
                    woodFractions={woodFractions}
                    tileFractions={tileFractions}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />
            </g>
        )

    }
}

export default StageTile
