import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

import { getArrangementForPresenceType } from 'components/Presence/helper'
import { getPresenceXYWidthHeight } from 'modules/ConfiguredPresenceSvg/helper'
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

            arrangement: {
                xPosition,
                zOffset,
                xWidth,
                zHeight
            } = {}
        } = arrangement,

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
