import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AsleepFearful from './Instances/AsleepFearful'
import FendingOff from './Instances/FendingOff'
import Cowgirl from './Instances/Cowgirl'
import Blowjob from './Instances/Blowjob'

import {
    ASLEEP_FEARFUL,
    FENDING_OFF,
    COWGIRL,
    BLOWJOB
} from '../../../../../scene/instanceKeys/miriamBennett'

const INSTANCES_MAP = {
    [ASLEEP_FEARFUL]: AsleepFearful,
    [FENDING_OFF]: FendingOff,
    [COWGIRL]: Cowgirl,
    [BLOWJOB]: Blowjob
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const MiriamBennett = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'MiriamBennett',
                className
            )}
        />
    )
}

MiriamBennett.propTypes = propTypes

export default MiriamBennett
