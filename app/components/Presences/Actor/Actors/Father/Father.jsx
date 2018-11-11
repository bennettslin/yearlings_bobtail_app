import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Roaring from './Instances/Roaring'
import Accusatory from './Instances/Accusatory'
import Past from './Instances/Past'
import Present from './Instances/Present'
import Future from './Instances/Future'
import Reeling from './Instances/Reeling'
import Epilogue from './Instances/Epilogue'

import {
    ROARING,
    ACCUSATORY,
    REELING
} from '../../../../../scene/instanceKeys/father'

import {
    PAST,
    PRESENT,
    FUTURE,
    EPILOGUE
} from '../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [ROARING]: Roaring,
    [ACCUSATORY]: Accusatory,
    [PAST]: Past,
    [PRESENT]: Present,
    [FUTURE]: Future,
    [REELING]: Reeling,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Father = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Father',
                className
            )}
        />
    )
}

Father.propTypes = propTypes;

export default Father
