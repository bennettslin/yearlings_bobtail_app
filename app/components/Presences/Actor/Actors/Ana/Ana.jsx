import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Roaring from './Instances/Roaring'
import Eating from './Instances/Eating'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    ROARING,
} from 'scene/actors/ana'

import {
    EATING,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [ROARING]: Roaring,
    [EATING]: Eating,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Ana = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Ana',
                className
            )}
        />
    )
}

Ana.propTypes = propTypes;

export default Ana
