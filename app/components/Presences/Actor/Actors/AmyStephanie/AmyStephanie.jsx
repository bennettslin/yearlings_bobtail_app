import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Squeezing from './Instances/Squeezing'

import {
    SQUEEZING
} from '../../../../../scene/instanceKeys/amyStephanie'

const INSTANCES_MAP = {
    [SQUEEZING]: Squeezing
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const AmyStephanie = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'AmyStephanie',
                className
            )}
        />
    )
}

AmyStephanie.propTypes = propTypes;

export default AmyStephanie
