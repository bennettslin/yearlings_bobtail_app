import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import CatholicGuy from './Instances/CatholicGuy'
import Watching from './Instances/Watching'
import Mingling from './Instances/Mingling'
import Protester from './Instances/Protester'
import Epilogue from './Instances/Epilogue'

import {
    CATHOLIC_GUY,
    WATCHING
} from '../../../../../../scene/instanceKeys/wade'

import {
    MINGLING,
    PROTESTER,
    EPILOGUE
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [CATHOLIC_GUY]: CatholicGuy,
    [WATCHING]: Watching,
    [MINGLING]: Mingling,
    [PROTESTER]: Protester,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Wade = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Wade',
                className
            )}
        />
    )
}

Wade.propTypes = propTypes

export default Wade
