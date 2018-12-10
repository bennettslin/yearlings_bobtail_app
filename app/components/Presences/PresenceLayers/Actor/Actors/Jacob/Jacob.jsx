import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Carrying from './Instances/Carrying'
import Flirting from './Instances/Flirting'
import Epilogue from './Instances/Epilogue'

import {
    FLIRTING,
    CARRYING,
    EPILOGUE
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [CARRYING]: Carrying,
    [FLIRTING]: Flirting,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Jacob = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Jacob',
                className
            )}
        />
    )
}

Jacob.propTypes = propTypes

export default Jacob
