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
            arrangement: {
                xFloat,
                zOffset,
                xWidth,
                zHeight
            }
        } = arrangement,
        xYWidthAndHeight = getPresenceXYWidthAndHeight({
            cubesKey,
            yIndex,
            xFloat,
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
