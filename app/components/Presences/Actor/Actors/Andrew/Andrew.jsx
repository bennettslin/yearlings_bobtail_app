import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FeigningFear from './Instances/FeigningFear'
import Throwing from './Instances/Throwing'
import Noodling from './Instances/Noodling'
import Epilogue from './Instances/Epilogue'

import {
    FEIGNING_FEAR,
    THROWING,
    NOODLING
} from 'scene/actors/andrew'

import { EPILOGUE } from 'scene/actors/songs'

const INSTANCES_MAP = {
    [FEIGNING_FEAR]: FeigningFear,
    [THROWING]: Throwing,
    [NOODLING]: Noodling,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Andrew = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Andrew',
                className
            )}
        />
    )
}

Andrew.propTypes = propTypes;

export default Andrew
