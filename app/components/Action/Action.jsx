// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'

const defaultProps = {
    action: []
}

const actionPropTypes = {
    action: PropTypes.array.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

class Action extends Component {

    render() {

        const { action,
                stageWidth,
                stageHeight } = this.props

        return (
            <DynamicSvg
                className={cx(
                    'Action',
                    'absoluteFullContainer'
                )}
                viewBoxWidth={stageWidth}
                viewBoxHeight={stageHeight}
            >
                {action.map((actionEntry, index) => {

                    const { name,
                            type,
                            x,
                            y,
                            width,
                            height } = actionEntry

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
                                x={`${x}%`}
                                y={`${y}%`}
                                width={`${width}%`}
                                height={`${height}%`}
                            />
                            <text
                                className="ActionTemporaryText"
                                x={`${x}%`}
                                y={`${y}%`}
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
