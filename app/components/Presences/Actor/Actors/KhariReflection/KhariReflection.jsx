import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import CaressingReflection from './Instances/CaressingReflection'

import { CARESSING_REFLECTION } from 'scene/instanceKeys/khari'

const INSTANCES_MAP = {
    [CARESSING_REFLECTION]: CaressingReflection
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Khari = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Khari',
                className
            )}
        />
    )
}

Khari.propTypes = propTypes;

export default Khari
