import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Squeezing from './Instances/Squeezing'
import Flirting from './Instances/Flirting'
import Mingling from './Instances/Mingling'
import Protester from './Instances/Protester'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    SQUEEZING,
    FLIRTING,
    MINGLING,
    PROTESTER,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [SQUEEZING]: Squeezing,
    [FLIRTING]: Flirting,
    [MINGLING]: Mingling,
    [PROTESTER]: Protester,
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

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

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
