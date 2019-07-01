import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isFinite from 'lodash.isfinite'
import isString from 'lodash.isstring'

import PresenceSvg from 'modules/PresenceSvg'
import Svg from 'modules/Svg'

import { getArrangementForPresenceType } from '../helper'
import { getMapForActorKey } from '../../Actor/helper'
import { getMapForPresenceType } from '../../Thing/helper'

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
        xPosition = isFinite(xPosition1) ? xPosition1 : xPosition2,
        zOffset = isFinite(zOffset1) ? zOffset1 : zOffset2,

        // TODO: Move this to PresenceSvg?
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

        presenceComponent = presencesMap[presenceKey]

    // TODO: Get rid of this conditional once they are all asset svgs.
    return isString(presenceComponent) ? (
        <PresenceSvg
            {...{
                className: cx(
                    'Presence',
                    capitaliseForClassName(presenceType),
                    capitaliseForClassName(presenceKey),
                    'abF'
                ),
                scaleFactor,
                flipHorizontal,
                yIndex,
                ...presenceXY
            }}
        >
            {presenceComponent}
        </PresenceSvg>
    ) : (
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
                    `${capitaliseForClassName(presenceType)}__temporaryRect`
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

PresenceView.propTypes = viewPropTypes

export default memo(PresenceView)
