/**
 * A single row of presences. A presences is any actor, fixture or prop on the
 * stage for any given scene. I really couldn't think of a better word...
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Actor from './Actor'
import Backdrop from './Backdrop'
import Bubble from './Bubble'
import Cutout from './Cutout'
import Door from './Door'
import Fixture from './Fixture'
import Flat from './Flat'
import Furniture from './Furniture'
import Panel from './Panel'
import Puppet from './Puppet'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import {
    getNearestXIndex,
    getPresenceXYWidthAndHeight
} from './helper'

import {
    ACTORS,
    BACKDROPS,
    BUBBLES,
    CUTOUTS,
    DOORS,
    FIXTURES,
    FLATS,
    FURNITURES,
    PANELS,
    PUPPETS
} from 'constants/scene'

import {
    CUBE_X_AXIS_LENGTH
} from '../../../constants/cubeIndex'

const PRESENCE_TYPE_COMPONENTS = {
    [ACTORS]: Actor,
    [BACKDROPS]: Backdrop,
    [BUBBLES]: Bubble,
    [CUTOUTS]: Cutout,
    [DOORS]: Door,
    [FIXTURES]: Fixture,
    [FLATS]: Flat,
    [FURNITURES]: Furniture,
    [PANELS]: Panel,
    [PUPPETS]: Puppet
}

const propTypes = {
    // From parent.
    presenceType: PropTypes.string.isRequired,
    nameKey: PropTypes.string.isRequired,

    // Actors always have instanceKeys, other presences largely don't.
    instanceKey: PropTypes.string,
    cubesKey: PropTypes.string.isRequired,
    yIndex: PropTypes.number.isRequired,

    arrangement: PropTypes.shape({
        xFloat: PropTypes.number.isRequired,
        zOffset: PropTypes.number,
        xWidth: PropTypes.number.isRequired,
        zHeight: PropTypes.number.isRequired
    }).isRequired
}

class Presence extends Component {

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        }) || !getPropsAreShallowEqual({
            props: this.props.arrangement,
            nextProps: nextProps.arrangement
        })
    }

    render() {
        const {
                presenceType,
                nameKey,
                instanceKey,
                cubesKey,
                yIndex,
                arrangement: {
                    xFloat,
                    zOffset,
                    xWidth,
                    zHeight
                }
            } = this.props,

            PresenceComponent = PRESENCE_TYPE_COMPONENTS[presenceType],

            xYWidthAndHeight = getPresenceXYWidthAndHeight({
                cubesKey,
                yIndex,
                xFloat,
                zOffset,
                xWidth,
                zHeight
            }),

            nearestXIndex = getNearestXIndex(xFloat)

        return (
            <PresenceComponent
                className={cx(
                    presenceType === CUTOUTS &&
                        `Cutout__y${yIndex}`,

                    presenceType === FIXTURES && (
                        nearestXIndex < (CUBE_X_AXIS_LENGTH / 2) ?
                            `Fixture__left` :
                            `Fixture__right`
                    ),

                    'absoluteFullContainer'
                )}
                {...{
                    nameKey
                }}
                {...instanceKey && {
                    instanceKey
                }}
                {...xYWidthAndHeight}
            />
        )
    }
}

Presence.propTypes = propTypes

export default Presence
