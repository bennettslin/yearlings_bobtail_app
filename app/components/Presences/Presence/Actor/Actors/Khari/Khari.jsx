import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DoubleAlbert from './Instances/DoubleAlbert'
import Arrived from './Instances/Arrived'
import Judgmental from './Instances/Judgmental'
import Concerned from './Instances/Concerned'
import Joking from '../KhariLiz/Instances/JokingLaughing'
import Protective from '../KhariLiz/Instances/ProtectiveConcerned'
import Caressing from '../KhariLiz/Instances/Caress'
import Epilogue from './Instances/Epilogue'

import {
    DOUBLE_ALBERT,
    ARRIVED,
    JUDGMENTAL,
    CONCERNED,
    JOKING_LAUGHING,
    PROTECTIVE_CONCERNED,
    CARESS
} from '../../../../../../scene/instanceKeys/khari'

import { EPILOGUE } from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [DOUBLE_ALBERT]: DoubleAlbert,
    [ARRIVED]: Arrived,
    [JUDGMENTAL]: Judgmental,
    [CONCERNED]: Concerned,
    [JOKING_LAUGHING]: Joking,
    [PROTECTIVE_CONCERNED]: Protective,
    [CARESS]: Caressing,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Khari = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Khari',
                className
            )}
        />
    )
}

Khari.propTypes = propTypes;

export default Khari
