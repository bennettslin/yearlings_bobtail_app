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

import {
    STOOPING,
    COMFORTING,
    ARGUING,
    CONSOLING,
    SHIELDING
} from '../../../../../scene/instanceKeys/mother'

import {
    PRESENT,
    FUTURE,
    EPILOGUE
} from '../../../../../scene/instanceKeys/songs'

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

    const InstanceComponent = INSTANCES_MAP[instanceKey]

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
