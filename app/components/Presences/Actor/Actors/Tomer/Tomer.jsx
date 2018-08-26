import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Gangbanger from './Instances/Gangbanger'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    GANGBANGER,
} from 'scene/actors/tomer'

const INSTANCES_MAP = {
    [GANGBANGER]: Gangbanger,
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Tomer = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Tomer',
                className
            )}
        />
    )
}

Tomer.propTypes = propTypes;

export default Tomer
