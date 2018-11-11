import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import HardOnReflection from './Instances/HardOnReflection'
import MissionaryReflection from './Instances/MissionaryReflection'
import AfterglowReflection from './Instances/AfterglowReflection'
import ReachingReflection from './Instances/ReachingReflection';
import CaressedReflection from './Instances/CaressedReflection'

import {
    REACHING_REFLECTION,
    CARESSED_REFLECTION
} from '../../../../../scene/instanceKeys/liz'

import {
    HARD_ON_REFLECTION,
    MISSIONARY_REFLECTION,
    AFTERGLOW_REFLECTION
} from '../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [HARD_ON_REFLECTION]: HardOnReflection,
    [MISSIONARY_REFLECTION]: MissionaryReflection,
    [AFTERGLOW_REFLECTION]: AfterglowReflection,
    [REACHING_REFLECTION]: ReachingReflection,
    [CARESSED_REFLECTION]: CaressedReflection
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Liz = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Liz',
                className
            )}
        />
    )
}

Liz.propTypes = propTypes;

export default Liz
