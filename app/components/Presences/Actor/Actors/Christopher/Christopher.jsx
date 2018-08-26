import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Tantrum from './Instances/Tantrum'
import Sobbing from './Instances/Sobbing'
import Reassuring from './Instances/Reassuring'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    TANTRUM,
    SOBBING,
    REASSURING
} from 'scene/actors/christopher'

const INSTANCES_MAP = {
    [TANTRUM]: Tantrum,
    [SOBBING]: Sobbing,
    [REASSURING]: Reassuring,
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Christopher = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Christopher',
                className
            )}
        />
    )
}

Christopher.propTypes = propTypes;

export default Christopher
