import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Principal from './Instances/Principal'
import Punching from './Instances/Punching'
import Noogie from './Instances/Noogie'
import Introducing from './Instances/Introducing'
import Epilogue from './Instances/Epilogue'

import {
    PRINCIPAL,
    PUNCHING,
    INTRODUCING
} from 'scene/actors/tristan'

import {
    NOOGIE,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [PRINCIPAL]: Principal,
    [PUNCHING]: Punching,
    [NOOGIE]: Noogie,
    [INTRODUCING]: Introducing,
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

...other }) => {

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

Tristan.propTypes = propTypes;

export default Tristan
