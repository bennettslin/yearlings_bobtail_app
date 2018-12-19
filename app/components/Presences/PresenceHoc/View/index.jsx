import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getClassNameForPresenceType,
    getMapForPresenceType,
    getArrangementForPresenceType
} from '../../helper'

import { getPresenceXYWidthAndHeight } from './helper'

import { ACTORS } from 'constants/scene'

const viewPropTypes = {
    // From parent.
    cubesKey: PropTypes.string.isRequired,
    presenceType: PropTypes.string.isRequired,
    presenceKey: PropTypes.string.isRequired,
    persistedPresenceValue: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
}

const PresenceHocView = memo(({
    cubesKey,
    presenceType,
    presenceKey,
    persistedPresenceValue

}) => {
    const
        arrangement = getArrangementForPresenceType({
            presenceType,
            presenceKey,
            presenceValue: persistedPresenceValue
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

        presencesMap = getMapForPresenceType(presenceType),
        PresenceComponent = presencesMap[presenceKey]

    return (
        <PresenceComponent
            {...{
                className: cx(
                    'Presence',
                    getClassNameForPresenceType(presenceType),
                    'abF'
                ),
                ...presenceType === ACTORS && {
                    instanceKey: persistedPresenceValue || ''
                },
                ...xYWidthAndHeight
            }}
        />
    )
})

PresenceHocView.propTypes = viewPropTypes

export default PresenceHocView
