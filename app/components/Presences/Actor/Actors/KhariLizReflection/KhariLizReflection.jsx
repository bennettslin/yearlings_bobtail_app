import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import CaressReflection from './Instances/CaressReflection'

import { CARESS_REFLECTION } from '../../../../../scene/instanceKeys/khariLiz'

const INSTANCES_MAP = {
    [CARESS_REFLECTION]: CaressReflection
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
