import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Tantrum from './Instances/Tantrum'
import Sobbing from './Instances/Sobbing'
import Reassuring from './Instances/Reassuring'
import Blissful from './Instances/Blissful'
import Staring from './Instances/Staring'
import Epilogue from './Instances/Epilogue'

import {
    TANTRUM,
    SOBBING,
    REASSURING,
    BLISSFUL,
    STARING
} from 'scene/actors/christopher'

import { EPILOGUE } from 'scene/actors/songs'

const INSTANCES_MAP = {
    [TANTRUM]: Tantrum,
    [SOBBING]: Sobbing,
    [REASSURING]: Reassuring,
    [BLISSFUL]: Blissful,
    [STARING]: Staring,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Christopher = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Christopher',
                className
            )}
        />
    )
}

Christopher.propTypes = propTypes;

export default Christopher
