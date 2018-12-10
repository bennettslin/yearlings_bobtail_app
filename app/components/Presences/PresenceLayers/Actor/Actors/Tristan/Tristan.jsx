import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Principal from './Instances/Principal'
import Punching from './Instances/Punching'
import Epilogue from './Instances/Epilogue'

import {
    PRINCIPAL,
    PUNCHING
} from '../../../../../../scene/instanceKeys/tristan'

import { EPILOGUE } from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [PRINCIPAL]: Principal,
    [PUNCHING]: Punching,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Tristan = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Tristan',
                className
            )}
        />
    )
}

Tristan.propTypes = propTypes

export default Tristan
