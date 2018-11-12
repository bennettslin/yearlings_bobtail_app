import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Tantrum from './Instances/Tantrum'
import Sobbing from './Instances/Sobbing'
import Staring from './Instances/Staring'

import {
    TANTRUM,
    SOBBING,
    STARING
} from '../../../../../scene/instanceKeys/christopher'

const INSTANCES_MAP = {
    [TANTRUM]: Tantrum,
    [SOBBING]: Sobbing,
    [STARING]: Staring
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

    const InstanceComponent = INSTANCES_MAP[instanceKey]

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
