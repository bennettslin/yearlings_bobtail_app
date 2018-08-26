import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Collecting from './Instances/Collecting'
import Ducking from './Instances/Ducking'
import Fighting from './Instances/Fighting'
import Greeting from './Instances/Greeting'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    COLLECTING,
    DUCKING,
    FIGHTING,
    GREETING
} from 'scene/actors/willy'

const INSTANCES_MAP = {
    [COLLECTING]: Collecting,
    [DUCKING]: Ducking,
    [FIGHTING]: Fighting,
    [GREETING]: Greeting,
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Willy = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Willy',
                className
            )}
        />
    )
}

Willy.propTypes = propTypes;

export default Willy
