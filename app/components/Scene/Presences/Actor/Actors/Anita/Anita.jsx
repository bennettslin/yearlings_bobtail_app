import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Exasperated from './Instances/Exasperated'
import Concerned from './Instances/Concerned'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    EXASPERATED,
    CONCERNED
} from 'scene/actors/anita'

const INSTANCES_MAP = {
    [EXASPERATED]: Exasperated,
    [CONCERNED]: Concerned
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Anita = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Anita',
                className
            )}
        />
    )
}

Anita.propTypes = propTypes;

export default Anita
