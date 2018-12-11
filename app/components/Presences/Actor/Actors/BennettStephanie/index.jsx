import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Horsing from './Instances/Horsing'
import DryingTears from './Instances/DryingTears'

import {
    HORSING,
    DRYING_TEARS
} from '../../../../../scene/instanceKeys/bennettStephanie'

const INSTANCES_MAP = {
    [HORSING]: Horsing,
    [DRYING_TEARS]: DryingTears
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const BennettStephanie = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'BennettStephanie',
                className
            )}
        />
    )
}

BennettStephanie.propTypes = propTypes

export default BennettStephanie
