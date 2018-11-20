import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Smoker from './Instances/Smoker'
import Flirting from './Instances/Flirting'
import Mingling from './Instances/Mingling'
import Officer from '../AmyNestorTomer/Instances/Officer'
import Protester from './Instances/Protester'
import Doctor from './Instances/Doctor'
import Epilogue from './Instances/Epilogue'

import {
    SMOKER,
    OFFICER,
    DOCTOR
} from '../../../../../../scene/instanceKeys/amy'

import {
    FLIRTING,
    MINGLING,
    PROTESTER,
    EPILOGUE
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [SMOKER]: Smoker,
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

Amy.propTypes = propTypes

export default Amy
