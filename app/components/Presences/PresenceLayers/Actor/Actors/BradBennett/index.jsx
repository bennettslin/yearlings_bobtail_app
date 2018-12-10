import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import TyingTether from './Instances/TyingTether'

import {
    TYING_TETHER
} from '../../../../../../scene/instanceKeys/bradBennett'

const INSTANCES_MAP = {
    [TYING_TETHER]: TyingTether
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const BradBennett = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'BradBennett',
                className
            )}
        />
    )
}

BradBennett.propTypes = propTypes

export default BradBennett
