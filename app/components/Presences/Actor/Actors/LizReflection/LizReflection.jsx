import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ReachingReflection from './Instances/ReachingReflection';

import {
    REACHING_REFLECTION
} from '../../../../../scene/instanceKeys/liz'

const INSTANCES_MAP = {
    [REACHING_REFLECTION]: ReachingReflection,
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
