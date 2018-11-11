import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Carrying from './Instances/Carrying'
import Flirting from './Instances/Flirting'
import Eating from './Instances/Eating'
import Epilogue from './Instances/Epilogue'

import {
    FLIRTING,
    EATING,
    CARRYING,
    EPILOGUE
} from '../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [CARRYING]: Carrying,
    [FLIRTING]: Flirting,
    [EATING]: Eating,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const JacobMara = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'JacobMara',
                className
            )}
        />
    )
}

JacobMara.propTypes = propTypes;

export default JacobMara
