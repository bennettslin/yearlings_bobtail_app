import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Panicked from './Instances/Panicked'
import Flustered from './Instances/Flustered'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    PANICKED,
    FLUSTERED
} from 'scene/actors/youngBennett'

const INSTANCES_MAP = {
    [PANICKED]: Panicked,
    [FLUSTERED]: Flustered
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const YoungBennett = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'YoungBennett',
                className
            )}
        />
    )
}

YoungBennett.propTypes = propTypes;

export default YoungBennett
