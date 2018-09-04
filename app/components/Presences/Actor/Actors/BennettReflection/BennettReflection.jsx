import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import HardOnReflection from './Instances/HardOnReflection'
import MissionaryReflection from './Instances/MissionaryReflection'
import AfterglowReflection from './Instances/AfterglowReflection'
import ShoesReflection from './Instances/ShoesReflection'

import {
    SHOES_REFLECTION
} from 'scene/instanceKeys/bennett'

import {
    HARD_ON_REFLECTION,
    MISSIONARY_REFLECTION,
    AFTERGLOW_REFLECTION
} from 'scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [HARD_ON_REFLECTION]: HardOnReflection,
    [MISSIONARY_REFLECTION]: MissionaryReflection,
    [AFTERGLOW_REFLECTION]: AfterglowReflection,
    [SHOES_REFLECTION]: ShoesReflection
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const BennettReflection = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'BennettReflection',
                className
            )}
        />
    )
}

BennettReflection.propTypes = propTypes;

export default BennettReflection
