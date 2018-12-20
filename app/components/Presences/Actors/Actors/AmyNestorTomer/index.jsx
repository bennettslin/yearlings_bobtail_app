import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Officer from './Instances/Officer'

import {
    OFFICER
} from '../../../../../scene/instanceKeys/amyNestorTomer'

const INSTANCES_MAP = {
    [OFFICER]: Officer
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const AmyNestorTomer = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'AmyNestorTomer',
                className
            )}
        />
    )
}

AmyNestorTomer.propTypes = propTypes

export default AmyNestorTomer
