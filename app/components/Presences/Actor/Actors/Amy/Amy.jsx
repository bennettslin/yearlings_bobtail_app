import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Smoker from './Instances/Smoker'
import Squeezing from './Instances/Squeezing'
import Flirting from './Instances/Flirting'
import Mingling from './Instances/Mingling'
import Officer from './Instances/Officer'
import Protester from './Instances/Protester'
import Doctor from './Instances/Doctor'
import Epilogue from './Instances/Epilogue'

import {
    SMOKER,
    OFFICER,
    DOCTOR
} from 'scene/actors/amy'

import {
    SQUEEZING,
    FLIRTING,
    MINGLING,
    PROTESTER,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [SMOKER]: Smoker,
    [SQUEEZING]: Squeezing,
    [FLIRTING]: Flirting,
    [MINGLING]: Mingling,
    [OFFICER]: Officer,
    [PROTESTER]: Protester,
    [DOCTOR]: Doctor,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Amy = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Amy',
                className
            )}
        />
    )
}

Amy.propTypes = propTypes;

export default Amy
