import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Flirting from './Instances/Flirting'
import Carrying from './Instances/Carrying'
import Waiting from './Instances/Waiting'
import Gopi from './Instances/Gopi'
import Epilogue from './Instances/Epilogue'

import {
    FLIRTING,
    CARRYING,
    WAITING,
    GOPI,
    EPILOGUE
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [FLIRTING]: Flirting,
    [CARRYING]: Carrying,
    [WAITING]: Waiting,
    [GOPI]: Gopi,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Mara = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Mara',
                className
            )}
        />
    )
}

Mara.propTypes = propTypes

export default Mara
