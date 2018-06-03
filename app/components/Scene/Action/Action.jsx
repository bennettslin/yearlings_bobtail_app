// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../../DynamicSvg/DynamicSvg'

import { getTileCentreForAction } from '../../../helpers/tilesHelper'

import { TILE_ROWS_LENGTH } from '../../../constants/stage'

const defaultProps = {
    action: []
}

const actionPropTypes = {
    yIndex: PropTypes.number.isRequired,
    action: PropTypes.array.isRequired,
    zIndices: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number
        ).isRequired
    ).isRequired,
    slantDirection: PropTypes.string.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

class Action extends Component {

    render() {

        const { yIndex,
                action,
                zIndices,
                slantDirection,
                stageWidth,
                stageHeight } = this.props

        return (
            <DynamicSvg
                className={cx(
                    'Action',
                    `Action__row__${yIndex}`,
                    'absoluteFullContainer'
                )}
                viewBoxWidth={stageWidth}
                viewBoxHeight={stageHeight}
            >
                {action.map((actionEntry, index) => {

                    const { name,
                            type,
                            xIndex,
                            width,
                            height } = actionEntry,

                        invertedYIndex = TILE_ROWS_LENGTH - yIndex - 1,

                        /**
                         * Either indices or raw coordinates are given. If it's
                         * indices, then only xIndex is provided, since action
                         * already knows its yIndex.
                         */
                        coordinates = isNaN(xIndex) ?
                            actionEntry : getTileCentreForAction({
                                xIndex,
                                yIndex: invertedYIndex,
                                zIndices,
                                slantDirection
                            }),

                        // These are percentages in both cases.
                        { x, y } = coordinates,

                        adjustedX = x - width / 2,
                        adjustedY = y - height

                    return (
                        <g
                            key={index}
                            className={cx(
                                name
                            )}
                        >
                            <rect
                                className={cx(
                                    `ActionEntry__${type}`
                                )}
                                x={`${adjustedX}%`}
                                y={`${adjustedY}%`}
                                width={`${width}%`}
                                height={`${height}%`}
                            />
                            <text
                                className="ActionTemporaryText"
                                x={`${adjustedX}%`}
                                y={`${adjustedY}%`}
                            >
                                {name}
                            </text>
                        </g>
                    )
                })}
            </DynamicSvg>
        )
    }
}

Action.defaultProps = defaultProps
Action.propTypes = actionPropTypes

export default Action
