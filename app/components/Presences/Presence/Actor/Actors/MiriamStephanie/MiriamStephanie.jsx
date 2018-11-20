import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MischievousBanjo from './Instances/MischievousBanjo'

import {
    MISCHIEVOUS_BANJO
} from '../../../../../../scene/instanceKeys/miriamStephanie'

const INSTANCES_MAP = {
    [MISCHIEVOUS_BANJO]: MischievousBanjo
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const MiriamStephanie = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'MiriamStephanie',
                className
            )}
        />
    )
}

MiriamStephanie.propTypes = propTypes;

export default MiriamStephanie
