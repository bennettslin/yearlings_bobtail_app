import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Eating from './Instances/Eating'

import {
    EATING
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [EATING]: Eating
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const JacobMara = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'JacobMara',
                className
            )}
        />
    )
}

JacobMara.propTypes = propTypes;

export default JacobMara
