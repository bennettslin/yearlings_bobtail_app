import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

import { getArrangementForPresenceType } from 'components/Presences/Presence/helper'
import { getPresenceXYWidthHeight } from 'components/Presences/Presence/View/helper'
import { capitaliseForClassName } from 'helpers/format'

const LegacyPresenceSvg  = ({
    cubesKey,
    presenceType,
    actorKey,
    presenceKey
}) => {
    const
        arrangement = getArrangementForPresenceType({
            presenceType,
            presenceKey,
            actorKey
        }),
        {
            yIndex,

            // Begin process to not nest.
            xPosition: xPosition1,
            zOffset: zOffset1,

            arrangement: {
                // Allow older configurations to still nest.
                xPosition: xPosition2,
                zOffset: zOffset2,

                // TODO: Get rid of xWidth and zHeight completely.
                xWidth,
                zHeight
            } = {}
        } = arrangement,

        // TODO: Get rid of this logic when no longer nested.
        xPosition = isFinite(xPosition1) ? xPosition1 : xPosition2,
        zOffset = isFinite(zOffset1) ? zOffset1 : zOffset2,

        // TODO: Move this to PresenceSvg?
        presenceXY = getPresenceXYWidthHeight({
            cubesKey,
            yIndex,
            xPosition,
            zOffset,
            xWidth,
            zHeight
        })

    return (
        <Svg
            className={cx(
                'Presence',
                capitaliseForClassName(presenceType),
                capitaliseForClassName(presenceKey),
                'abF'
            )}
        >
            <rect
                className={cx(
                    `${capitaliseForClassName(presenceType)}__temporaryRect`,
                    'Presence__temporaryRect'
                )}
                {...presenceXY}
            />
            <text
                className={cx(
                    'Presence__temporaryText'
                )}
                {...presenceXY}
            >
                {capitaliseForClassName(presenceKey)}
            </text>
        </Svg>
    )
}

LegacyPresenceSvg.propTypes = {
    // From parent.
    cubesKey: PropTypes.string.isRequired,
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired
}

export default LegacyPresenceSvg
