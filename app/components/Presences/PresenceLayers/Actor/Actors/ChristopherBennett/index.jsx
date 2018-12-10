import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ReassuringEnchanted from './Instances/ReassuringEnchanted'
import BlissfulGuilty from './Instances/BlissfulGuilty'

import {
    REASSURING_ENCHANTED,
    BLISSFUL_GUILTY
} from '../../../../../../scene/instanceKeys/christopherBennett'

const INSTANCES_MAP = {
    [REASSURING_ENCHANTED]: ReassuringEnchanted,
    [BLISSFUL_GUILTY]: BlissfulGuilty
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const ChristopherBennett = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'ChristopherBennett',
                className
            )}
        />
    )
}

ChristopherBennett.propTypes = propTypes

export default ChristopherBennett
