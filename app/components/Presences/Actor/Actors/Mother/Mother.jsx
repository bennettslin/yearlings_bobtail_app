import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Stooping from './Instances/Stooping'
import Comforting from './Instances/Comforting'
import Arguing from './Instances/Arguing'
import Consoling from './Instances/Consoling'
import Present from './Instances/Present'
import Future from './Instances/Future'
import Shielding from './Instances/Shielding'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    STOOPING,
    COMFORTING,
    ARGUING,
    CONSOLING,
    SHIELDING
} from 'scene/actors/mother'

import {
    PRESENT,
    FUTURE,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [STOOPING]: Stooping,
    [COMFORTING]: Comforting,
    [ARGUING]: Arguing,
    [CONSOLING]: Consoling,
    [PRESENT]: Present,
    [FUTURE]: Future,
    [SHIELDING]: Shielding,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Mother = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Mother',
                className
            )}
        />
    )
}

Mother.propTypes = propTypes;

export default Mother
