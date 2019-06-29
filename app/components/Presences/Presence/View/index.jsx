import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PresenceSvg from 'modules/PresenceSvg'

import {
    getMapForPresenceType,
    getArrangementForPresenceType
} from '../../helper'

import { getMapForActorKey } from '../../Actor/helper'

import { getPresenceXY, getPresenceXYWidthHeight } from './helper'
import { capitaliseForClassName } from 'helpers/format'

import { ACTOR } from 'constants/scene'

const viewPropTypes = {
    // From parent.
    cubesKey: PropTypes.string.isRequired,
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired
}

const PresenceView = ({
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
            scaleFactor,
            flipHorizontal,

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
        xPosition = typeof xPosition1 === 'number' ? xPosition1 : xPosition2,
        zOffset = typeof zOffset1 === 'number' ? zOffset1 : zOffset2,

        presenceXY = xWidth && zHeight ? getPresenceXYWidthHeight({
            cubesKey,
            yIndex,
            xPosition,
            zOffset,
            xWidth,
            zHeight
        }) : getPresenceXY({
            cubesKey,
            yIndex,
            xPosition,
            zOffset
        }),

        presencesMap = presenceType === ACTOR ?
            getMapForActorKey(actorKey) :
            getMapForPresenceType(presenceType),

        PresenceComponent = presencesMap[presenceKey],

        presenceProps = {
            className: cx(
                'Presence',
                capitaliseForClassName(presenceType),
                capitaliseForClassName(presenceKey),
                'abF'
            ),
            scaleFactor,
            flipHorizontal,
            ...presenceXY
        }

    // TODO: Get rid of this conditional once they are all asset svgs.
    return typeof PresenceComponent === 'string' ? (
        <PresenceSvg
            {...presenceProps}
        >
            {PresenceComponent}
        </PresenceSvg>
    ) : (
        <PresenceComponent
            {...presenceProps}
        />
    )
}

PresenceView.propTypes = viewPropTypes

export default memo(PresenceView)
