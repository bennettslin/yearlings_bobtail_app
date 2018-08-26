import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import { EPILOGUE } from 'scene/actors/songs'

const INSTANCES_MAP = {
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Liz = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Liz',
                className
            )}
        />
    )
}

Liz.propTypes = propTypes;

export default Liz
