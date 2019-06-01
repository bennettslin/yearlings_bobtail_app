import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getClassNameForPresenceType,
    getMapForPresenceType,
    getArrangementForPresenceType
} from '../../helper'

import { getMapForActorKey } from '../../Actor/helper'

import { getPresenceXYWidthAndHeight } from './helper'

import { ACTORS } from 'constants/scene'

const viewPropTypes = {
    // From parent.
    cubesKey: PropTypes.string.isRequired,
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired
}

const PresenceHocView = memo(({
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
            // Begin process to not nest xPosition.
            xPosition: xPosition1,
            arrangement: {
                // Allow older configurations to have nested xPosition.
                xPosition: xPosition2,
                zOffset,

                // TODO: Get rid of xWidth and zHeight completely.
                xWidth,
                zHeight
            }
        } = arrangement,

        // TODO: Get rid of this logic when xPositions are no longer nested.
        xPosition = typeof xPosition1 === 'number' ? xPosition1 : xPosition2,

        xYWidthAndHeight = getPresenceXYWidthAndHeight({
            cubesKey,
            yIndex,
            xPosition,
            zOffset,
            xWidth,
            zHeight
        }),

        presencesMap = presenceType === ACTORS ?
            getMapForActorKey(actorKey) :
            getMapForPresenceType(presenceType),

        PresenceComponent = presencesMap[presenceKey]

    return (
        <PresenceComponent
            {...{
                className: cx(
                    'Presence',
                    getClassNameForPresenceType(presenceType),
                    'abF'
                ),
                ...xYWidthAndHeight
            }}
        />
    )
})

PresenceHocView.propTypes = viewPropTypes

export default PresenceHocView
