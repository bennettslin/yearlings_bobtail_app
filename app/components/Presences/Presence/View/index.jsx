import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isString from 'lodash/isstring'

import PresenceSvg from 'modules/PresenceSvg'
import LegacyPresenceSvg from 'modules/LegacyPresenceSvg'

import { getArrangementForPresenceType } from '../helper'
import { getMapForActorKey } from '../../Actor/helper'
import { getMapForPresenceType } from '../../Thing/helper'

import { getPresenceXY } from './helper'
import { capitaliseForClassName } from 'helpers/format'

import { ACTOR } from 'constants/scene'

const propTypes = {
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
        presencesMap = presenceType === ACTOR ?
            getMapForActorKey(actorKey) :
            getMapForPresenceType(presenceType),

        presenceComponent = presencesMap[presenceKey]

    // TODO: Get rid of this conditional once they are all asset svgs.
    if (!isString(presenceComponent)) {
        return (
            <LegacyPresenceSvg
                {...{
                    cubesKey,
                    presenceType,
                    actorKey,
                    presenceKey
                }}
            />
        )
    }

    const {
            yIndex,
            xPosition,
            zOffset,
            scaleFactor,
            alignLeft,
            alignRight,
            flipHorizontal,
            rotate,
            noShadow,
            style
        } = getArrangementForPresenceType({
            presenceType,
            presenceKey,
            actorKey
        }),

        // TODO: Move this to PresenceSvg?
        presenceXY = getPresenceXY({
            cubesKey,
            yIndex,
            xPosition,
            zOffset
        })

    return (
        <PresenceSvg
            {...{
                className: cx(
                    'Presence',
                    capitaliseForClassName(presenceType),
                    capitaliseForClassName(presenceKey),
                    capitaliseForClassName(style),
                    noShadow && 'Presence__noShadow',
                    'abF'
                ),
                scaleFactor,
                alignLeft,
                alignRight,
                flipHorizontal,
                rotate,
                yIndex,
                ...presenceXY
            }}
        >
            {presenceComponent}
        </PresenceSvg>
    )
}

PresenceView.propTypes = propTypes

export default memo(PresenceView)
