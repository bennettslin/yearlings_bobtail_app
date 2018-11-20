import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Noogie from './Instances/Noogie'
import Greeting from './Instances/Greeting'

import {
    NOOGIE
} from '../../../../../../scene/instanceKeys/miriamTristan'

import {
    GREETING
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [NOOGIE]: Noogie,
    [GREETING]: Greeting
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const MiriamTristan = ({

    className,
    instanceKey,

    ...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'MiriamTristan',
                className
            )}
        />
    )
}

MiriamTristan.propTypes = propTypes

export default MiriamTristan
