/**
 * A single row of presences. A presences is any actor, fixture or prop on the
 * stage for any given scene. I really couldn't think of a better word...
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Actor from './Actor/Actor'
import Cutout from './Cutout/Cutout'
import Fixture from './Fixture/Fixture'

import {
    getTileCentreForPresence,
    getCubeWidthAndHeightPercentages
} from './presenceHelper'
import { getCubesForKey } from '../sceneDataHelper'

const PRESENCE_TYPE_COMPONENTS = {
    actors: Actor,
    cutouts: Cutout,
    fixtures: Fixture
}

const propTypes = {
    // From parent.
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cubesKey: PropTypes.string.isRequired,

    // Where to centre on the xIndex axis. Can be a float.
    xFloat: PropTypes.number.isRequired,

    // Where to position on the yIndex axis.
    yIndex: PropTypes.number.isRequired,

    // Where to position above the given zIndex. Default is the zIndex.
    zOffset: PropTypes.number,

    // How many cube lengths wide. Assume cube is one foot wide.
    xWidth: PropTypes.number.isRequired,

    // How many cube lengths high.
    zHeight: PropTypes.number.isRequired
}

const Presence = ({

    name,
    type,
    cubesKey,

    xFloat,
    yIndex,
    zOffset,
    xWidth,
    zHeight

}) => {

    const {
            /**
             * Presence needs to know the floor zIndex for positioning.
             */
            floor: { zIndices },
            slantDirection = ''
        } = getCubesForKey(cubesKey),

        {
            xPercentage,
            yPercentage
        } = getTileCentreForPresence({
            xFloat,
            yIndex,
            zOffset,
            zIndices,
            slantDirection
        }),

        {
            width: cubeWidthPercentage,
            height: cubeHeightPercentage,
        } = getCubeWidthAndHeightPercentages(
            yIndex
        ),

        width = cubeWidthPercentage * xWidth,
        height = cubeHeightPercentage * zHeight,

        x = xPercentage - width / 2,
        y = yPercentage - height,

        PresenceComponent = PRESENCE_TYPE_COMPONENTS[type]

    return (
        <g
            className={cx(
                'Presence',
                `Presence__${type}`,
                `Presence__y${yIndex}`,
                name
            )}
        >
            <PresenceComponent
                {...{
                    x,
                    y,
                    width,
                    height,
                    name
                }}
            />
        </g>
    )
}

Presence.propTypes = propTypes;

export default Presence
