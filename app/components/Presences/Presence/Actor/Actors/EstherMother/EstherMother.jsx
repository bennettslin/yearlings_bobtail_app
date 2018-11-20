import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import HurtConsoling from './Instances/HurtConsoling'
import SobbingShielding from './Instances/SobbingShielding'

import {
    HURT_CONSOLING,
    SOBBING_SHIELDING
} from '../../../../../../scene/instanceKeys/estherMother'

const INSTANCES_MAP = {
    [HURT_CONSOLING]: HurtConsoling,
    [SOBBING_SHIELDING]: SobbingShielding
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const EstherMother = ({

    className,
    instanceKey,

    ...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'EstherMother',
                className
            )}
        />
    )
}

EstherMother.propTypes = propTypes

export default EstherMother
