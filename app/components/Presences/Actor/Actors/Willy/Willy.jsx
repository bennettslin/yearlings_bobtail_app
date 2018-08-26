import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Collecting from './Instances/Collecting'
import Ducking from './Instances/Ducking'
import Fighting from './Instances/Fighting'
import Greeting from './Instances/Greeting'
import CrossingGuard from './Instances/CrossingGuard'
import Epilogue from './Instances/Epilogue'

import {
    COLLECTING,
    DUCKING,
    FIGHTING,
    GREETING,
    CROSSING_GUARD
} from 'scene/actors/willy'

import { EPILOGUE } from 'scene/actors/songs'

const INSTANCES_MAP = {
    [COLLECTING]: Collecting,
    [DUCKING]: Ducking,
    [FIGHTING]: Fighting,
    [GREETING]: Greeting,
    [CROSSING_GUARD]: CrossingGuard,
    [EPILOGUE]: Epilogue
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

    const InstanceComponent = INSTANCES_MAP[instanceKey]

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
