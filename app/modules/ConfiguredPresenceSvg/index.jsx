import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PresenceSvg from 'modules/PresenceSvg'

import { getArrangementForPresenceType } from 'components/Presence/helper'

import { getPresenceXY } from './helper'
import { capitaliseForClassName } from 'helpers/format'

const propTypes = {
    // From parent.
    cubesKey: PropTypes.string.isRequired,
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

const ConfiguredPresenceSvg = ({
    cubesKey,
    presenceType,
    actorKey,
    presenceKey,
    children

}) => {
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
            {children}
        </PresenceSvg>
    )
}

ConfiguredPresenceSvg.propTypes = propTypes

export default memo(ConfiguredPresenceSvg)
