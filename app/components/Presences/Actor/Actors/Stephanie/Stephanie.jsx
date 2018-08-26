import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Roaring from './Instances/Roaring'
import Squeezing from './Instances/Squeezing'
import Mingling from './Instances/Mingling'
import Protester from './Instances/Protester'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    ROARING,
} from 'scene/actors/stephanie'

import {
    SQUEEZING,
    MINGLING,
    PROTESTER,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [SQUEEZING]: Squeezing,
    [MINGLING]: Mingling,
    [ROARING]: Roaring,
    [PROTESTER]: Protester,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Stephanie = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Stephanie',
                className
            )}
        />
    )
}

Stephanie.propTypes = propTypes;

export default Stephanie
