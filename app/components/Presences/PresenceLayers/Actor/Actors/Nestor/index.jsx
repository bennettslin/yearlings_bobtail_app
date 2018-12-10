import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Jogger from './Instances/Jogger'
import Injured from './Instances/Injured'
import Greeting from './Instances/Greeting'
import Epilogue from './Instances/Epilogue'

import {
    JOGGER,
    INJURED
} from '../../../../../../scene/instanceKeys/nestor'

import {
    GREETING,
    EPILOGUE
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [JOGGER]: Jogger,
    [INJURED]: Injured,
    [GREETING]: Greeting,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Nestor = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Nestor',
                className
            )}
        />
    )
}

Nestor.propTypes = propTypes

export default Nestor
