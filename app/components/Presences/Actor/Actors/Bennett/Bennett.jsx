import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Roaring from './Instances/Roaring'
import Eating from './Instances/Eating'
import Flirting from './Instances/Flirting'
import Past from './Instances/Past'
import Present from './Instances/Present'
import Future from './Instances/Future'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    ROARING,
} from 'scene/actors/bennett'

import {
    EATING,
    FLIRTING,
    PAST,
    PRESENT,
    FUTURE,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [ROARING]: Roaring,
    [EATING]: Eating,
    [FLIRTING]: Flirting,
    [PAST]: Past,
    [PRESENT]: Present,
    [FUTURE]: Future,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Bennett = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Bennett',
                className
            )}
        />
    )
}

Bennett.propTypes = propTypes;

export default Bennett
