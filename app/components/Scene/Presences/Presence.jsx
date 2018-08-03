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

import { getTileCentreForPresence } from '../Cubes/cubeRenderHelper'

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
    xFloat: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired,
    zOffset: PropTypes.number,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    cubesKey: PropTypes.string.isRequired
}

const Presence = ({

    name,
    type,
    xFloat,
    yIndex,
    zOffset,
    width,
    height,
    cubesKey

}) => {

    const {
            floor,
            slantDirection = ''
        } = getCubesForKey(cubesKey),

        {
            /**
             * Presence needs to know the floor zIndex for positioning.
             */
            zIndices
        } = floor,

        tileCentre = getTileCentreForPresence({
            xFloat,

            // Pass yFloat from presence. If there isn't one, use yIndex.
            yIndex,
            zOffset,

            zIndices,
            slantDirection
        }),

        {
            xPercentage,
            yPercentage
        } = tileCentre,

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
