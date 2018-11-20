import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Joking from './Instances/JokingLaughing'
import Protective from './Instances/ProtectiveConcerned'
import Caressing from './Instances/Caress'

import {
    JOKING_LAUGHING,
    PROTECTIVE_CONCERNED,
    CARESS
} from '../../../../../../scene/instanceKeys/khariLiz'

const INSTANCES_MAP = {
    [JOKING_LAUGHING]: Joking,
    [PROTECTIVE_CONCERNED]: Protective,
    [CARESS]: Caressing
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const KhariLiz = ({

    className,
    instanceKey,

    ...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'KhariLiz',
                className
            )}
        />
    )
}

KhariLiz.propTypes = propTypes

export default KhariLiz
