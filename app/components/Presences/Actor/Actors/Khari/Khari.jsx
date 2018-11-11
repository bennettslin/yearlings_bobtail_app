import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DoubleAlbert from './Instances/DoubleAlbert'
import Arrived from './Instances/Arrived'
import Judgmental from './Instances/Judgmental'
import Concerned from './Instances/Concerned'
import Joking from './Instances/Joking'
import Protective from './Instances/Protective'
import Caressing from './Instances/Caressing'
import Epilogue from './Instances/Epilogue'

import {
    DOUBLE_ALBERT,
    ARRIVED,
    JUDGMENTAL,
    CONCERNED,
    JOKING,
    PROTECTIVE,
    CARESSING
} from '../../../../../scene/instanceKeys/khari'

import { EPILOGUE } from '../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [DOUBLE_ALBERT]: DoubleAlbert,
    [ARRIVED]: Arrived,
    [JUDGMENTAL]: Judgmental,
    [CONCERNED]: Concerned,
    [JOKING]: Joking,
    [PROTECTIVE]: Protective,
    [CARESSING]: Caressing,
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
