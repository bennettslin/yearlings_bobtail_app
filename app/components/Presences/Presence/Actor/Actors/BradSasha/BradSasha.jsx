import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import CharmedSchoolbus from './Instances/CharmedSchoolbus'

import {
    CHARMED_SCHOOLBUS
} from '../../../../../../scene/instanceKeys/bradSasha'

const INSTANCES_MAP = {
    [CHARMED_SCHOOLBUS]: CharmedSchoolbus
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const BradSasha = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'BradSasha',
                className
            )}
        />
    )
}

BradSasha.propTypes = propTypes

export default BradSasha
