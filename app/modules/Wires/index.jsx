// Component to safely render an svg by ensuring that all values are valid.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getWires } from '../../api/scene/wires'
import './style'

const defaultProps = {
    adjustedTop: 0,
    adjustedLeft: 0,
    adjustedWidth: 0
}

const propTypes = {
    actorKey: PropTypes.string,
    presenceType: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
    adjustedTop: PropTypes.number.isRequired,
    adjustedLeft: PropTypes.number.isRequired,
    adjustedWidth: PropTypes.number.isRequired,
    adjustedHeight: PropTypes.number.isRequired
}

const Wires = ({
    actorKey,
    presenceType,
    presenceKey,

    adjustedTop,
    adjustedLeft,
    adjustedWidth,
    adjustedHeight

}) => {
    const wires = getWires({
        actorKey,
        presenceType,
        presenceKey
    })

    return Boolean(wires) && (
        <>
            {wires.map((config, index) => {
                const { x = 0.5, y = 0.2 } = config,
                    left =
                        adjustedLeft +
                        // 0.5 is centre.
                        adjustedWidth * (x - 0.5),
                    top =
                        adjustedTop -
                        // 0 is very top, 1 is very bottom.
                        adjustedHeight * (1 - y)

                return (
                    <div
                        {...{
                            key: index,
                            className: cx(
                                'Wire',
                                'presence__position'
                            ),
                            style: {
                                left: `${left.toFixed(2)}%`,
                                top: `${top.toFixed(2)}%`
                            }
                        }}
                    />
                )
            })}
        </>
    )
}

Wires.defaultProps = defaultProps
Wires.propTypes = propTypes

export default memo(Wires)
