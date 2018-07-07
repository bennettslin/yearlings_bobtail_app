/**
 * A single row of presences. A presences is any actor, fixture or prop on the
 * stage for any given scene. I really couldn't think of a better word...
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getTileCentreForPresence } from '../sceneHelper'

const propTypes = {
    // From parent.
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    xOffset: PropTypes.number,
    yOffset: PropTypes.number,
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    zIndices: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number
        ).isRequired
    ).isRequired,
    slantDirection: PropTypes.string.isRequired
}

const Presence = ({

    name,
    type,
    xOffset = 0,
    yOffset = 0,
    xIndex,
    yIndex,
    width,
    height,
    zIndices,
    slantDirection

}) => {

    const { xPercentage, yPercentage } = getTileCentreForPresence({
            xIndex,
            yIndex,
            zIndices,
            slantDirection
        }),

        adjustedX = xPercentage + xOffset - width / 2,
        adjustedY = yPercentage + yOffset - height

    return (
        <g
            className={cx(
                name
            )}
        >
            <rect
                className={cx(
                    'Presence',
                    `Presence__${type}`,
                    `Presence__y${yIndex}`
                )}
                x={adjustedX}
                y={adjustedY}
                width={width}
                height={height}
            />
            <text
                className="PresenceTemporaryText"
                x={adjustedX}
                y={adjustedY}
                width={width}
                height={height}
            >
                {name}
            </text>
        </g>
    )
}

Presence.propTypes = propTypes;

export default Presence
