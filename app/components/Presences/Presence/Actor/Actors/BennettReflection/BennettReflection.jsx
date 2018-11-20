import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ShoesReflection from './Instances/ShoesReflection'

import {
    SHOES_REFLECTION
} from '../../../../../../scene/instanceKeys/bennett'

const INSTANCES_MAP = {
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
