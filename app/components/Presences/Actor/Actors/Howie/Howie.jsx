import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Gangbanger from './Instances/Gangbanger'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    GANGBANGER,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [GANGBANGER]: Gangbanger,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Howie = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Howie',
                className
            )}
        />
    )
}

Howie.propTypes = propTypes;

export default Howie
