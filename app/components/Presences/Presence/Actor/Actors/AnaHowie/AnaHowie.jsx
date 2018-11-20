import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Cemetery from './Instances/Cemetery'

import {
    CEMETERY
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [CEMETERY]: Cemetery
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const AnaHowie = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'AnaHowie',
                className
            )}
        />
    )
}

AnaHowie.propTypes = propTypes

export default AnaHowie
