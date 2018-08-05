/**
 * A single row of presences. A presences is any actor, fixture or prop on the
 * stage for any given scene. I really couldn't think of a better word...
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import Actor from './Actor/Actor'
import Cutout from './Cutout/Cutout'
import Fixture from './Fixture/Fixture'

import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

import { getPresenceXYWidthAndHeight } from './presenceHelper'

import {
    ACTORS,
    CUTOUTS,
    FIXTURES
} from '../sceneConstants'

const PRESENCE_TYPE_COMPONENTS = {
    [ACTORS]: Actor,
    [CUTOUTS]: Cutout,
    [FIXTURES]: Fixture
}

const propTypes = {
    // From parent.
    type: PropTypes.string.isRequired,
    presenceKey: PropTypes.string.isRequired,
    presence: PropTypes.shape({
        instance: PropTypes.string.isRequired,
        xFloat: PropTypes.number.isRequired,
        zOffset: PropTypes.number.isRequired,
        xWidth: PropTypes.number.isRequired,
        zHeight: PropTypes.number.isRequired
    }).isRequired,
    cubesKey: PropTypes.string.isRequired,
    yIndex: PropTypes.number.isRequired
}

class Presence extends Component {

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps

        }) || !getPropsAreShallowEqual({
            props: this.props.presence,
            nextProps: nextProps.presence
        })
    }

    render() {
        const {
                type,
                presenceKey,
                presence: {
                    instance: instanceKey,
                    xFloat,
                    zOffset,
                    xWidth,
                    zHeight
                },
                cubesKey,
                yIndex
            } = this.props,

            PresenceComponent = PRESENCE_TYPE_COMPONENTS[type],

            xYWidthAndHeight = getPresenceXYWidthAndHeight({
                xFloat,
                zOffset,
                xWidth,
                zHeight,
                cubesKey,
                yIndex
            })

        return (
            <PresenceComponent
                {...{
                    presenceKey,
                    instanceKey,
                }}
                {...xYWidthAndHeight}
            />
        )
    }
}

Presence.propTypes = propTypes;

export default Presence
