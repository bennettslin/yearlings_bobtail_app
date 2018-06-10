// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../../DynamicSvg/DynamicSvg'

import { getTileCentreForAction } from '../sceneHelper'

import { CUBE_ROWS_LENGTH } from '../../../constants/stage'

const defaultProps = {
    presence: []
}

const propTypes = {
    yIndex: PropTypes.number.isRequired,
    presence: PropTypes.array.isRequired,
    zIndices: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number
        ).isRequired
    ).isRequired,
    slantDirection: PropTypes.string.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

class Presence extends Component {

    render() {

        const { yIndex,
                presence,
                zIndices,
                slantDirection,
                stageWidth,
                stageHeight } = this.props

        return (
            <DynamicSvg
                className={cx(
                    'Presence',
                    `Presence__row__${yIndex}`,
                    'absoluteFullContainer'
                )}
                viewBoxWidth={stageWidth}
                viewBoxHeight={stageHeight}
            >
                {presence.map((presenceEntry, index) => {

                    const { name,
                            type,
                            xIndex,
                            width,
                            height } = presenceEntry,

                        invertedYIndex = CUBE_ROWS_LENGTH - yIndex - 1,

                        /**
                         * Either indices or raw coordinates are given. If it's
                         * indices, then only the xIndex is provided, since
                         * presence already knows its yIndex.
                         */
                        coordinates = isNaN(xIndex) ?
                            presenceEntry : getTileCentreForAction({
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
                                    `PresenceEntry__${type}`
                                )}
                                x={`${adjustedX}%`}
                                y={`${adjustedY}%`}
                                width={`${width}%`}
                                height={`${height}%`}
                            />
                            <text
                                className="PresenceTemporaryText"
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

Presence.defaultProps = defaultProps
Presence.propTypes = propTypes

export default Presence
