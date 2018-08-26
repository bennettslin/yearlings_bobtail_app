import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Panicked from './Instances/Panicked'
import Flustered from './Instances/Flustered'
import Bathing from './Instances/Bathing'
import Singing from './Instances/Singing'
import YoungChild from './Instances/YoungChild'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING,
} from 'scene/actors/youngBennett'

import {
    YOUNG_CHILD,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [PANICKED]: Panicked,
    [FLUSTERED]: Flustered,
    [BATHING]: Bathing,
    [SINGING]: Singing,
    [YOUNG_CHILD]: YoungChild,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const YoungBennett = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'YoungBennett',
                className
            )}
        />
    )
}

YoungBennett.propTypes = propTypes;

export default YoungBennett
