import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Prologue from './Instances/Prologue'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    PROLOGUE,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [PROLOGUE]: Prologue,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const OldBennett = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'OldBennett',
                className
            )}
        />
    )
}

OldBennett.propTypes = propTypes;

export default OldBennett
