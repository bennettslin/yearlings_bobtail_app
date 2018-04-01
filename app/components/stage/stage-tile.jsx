// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getTileCornersForXYAndZ } from '../../helpers/tiles-helper'

class StageTile extends Component {

    static propTypes = {
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        zIndex: PropTypes.number.isRequired,
        isFloor: PropTypes.bool.isRequired,
        isLeft: PropTypes.bool.isRequired,
        slantDirection: PropTypes.string.isRequired,
        colour: PropTypes.string.isRequired,
        stageWidth: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired
    }
    render() {
        /* eslint-disable no-unused-vars */
        const { colour,
                isLeft,
                isFloor,
                slantDirection,
                xIndex,
                yIndex,
                zIndex,
                stageWidth,
                stageHeight
            } = this.props,

            corners = getTileCornersForXYAndZ(
                xIndex, yIndex, zIndex, slantDirection
            )

        return (
            <g className="stage-tile">
                {corners.map((corner, cornerIndex) => {
                    const { xPercentage,
                            yPercentage } = corner,

                        xCoord = xPercentage * stageWidth * 0.01,
                        yCoord = yPercentage * stageHeight * 0.01

                    return (
                        <rect
                            key={cornerIndex}
                            x={xCoord}
                            y={yCoord}
                            width={1}
                            height={1}
                            fill={colour}
                        />
                    )
                })}
            </g>
        )

    }
}

export default StageTile
