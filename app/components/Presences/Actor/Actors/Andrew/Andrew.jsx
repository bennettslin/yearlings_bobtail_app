import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Feigning from './Instances/Feigning'
import Throwing from './Instances/Throwing'
import Noodling from './Instances/Noodling'
import Epilogue from './Instances/Epilogue'

import {
    FEIGNING,
    THROWING,
    NOODLING
} from 'scene/actors/andrew'

import { EPILOGUE } from 'scene/actors/songs'

const INSTANCES_MAP = {
    [FEIGNING]: Feigning,
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
