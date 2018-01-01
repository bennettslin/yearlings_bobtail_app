// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getComponentShouldUpdate } from '../../helpers/general-helper'
import { getTileCornersForXYAndZ } from '../../helpers/tiles-helper'

class StageTile extends Component {

    static propTypes = {
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        zIndex: PropTypes.number.isRequired,
        slantDirection: PropTypes.string.isRequired,
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
                    'slantDirection',
                    'colour'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { colour,
                slantDirection,
                xIndex,
                yIndex,
                zIndex } = this.props,

            corners = getTileCornersForXYAndZ(
                xIndex, yIndex, zIndex, slantDirection
            )

        return (
            <div
                className="stage-tile"
            >
                {corners.map((corner, cornerIndex) => {
                    const { xPercentage,
                            yPercentage } = corner

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
