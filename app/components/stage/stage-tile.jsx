// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getComponentShouldUpdate } from '../../helpers/general-helper'
import { getTileCornersForXYAndZ } from '../../helpers/stage-helper'

class StageTile extends Component {

    static propTypes = {
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        zIndex: PropTypes.number.isRequired,
        isDiagonal: PropTypes.bool,
        colour: PropTypes.string.isRequired
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
                    'isDiagonal',
                    'colour'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { colour,
                isDiagonal,
                xIndex,
                yIndex,
                zIndex } = this.props,

            corners = getTileCornersForXYAndZ(
                xIndex, yIndex, zIndex, isDiagonal
            )

        return (
            <div
                className="stage-tile"
            >
                {corners.map((corner, cornerIndex) => {
                    const { xPercentage,
                            yPercentage } = corner

                    console.error('xPercentage, yPercentage', xPercentage, yPercentage)

                    return (
                        <div
                            key={cornerIndex}
                            className="test-tile-corner-pixel"
                            style={{
                                left: xPercentage + '%',
                                bottom: yPercentage + '%',
                                backgroundColor: colour
                            }}
                        />
                    )
                })}
            </div>
        )

    }
}

export default StageTile
