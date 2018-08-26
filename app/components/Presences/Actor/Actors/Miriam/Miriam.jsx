import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Roaring from './Instances/Roaring'
import Noogie from './Instances/Noogie'
import Cowgirl from './Instances/Cowgirl'
import Blowjob from './Instances/Blowjob'
import Greeting from './Instances/Greeting'
import Gopi from './Instances/Gopi'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    ROARING,
} from 'scene/actors/miriam'

import {
    NOOGIE,
    COWGIRL,
    BLOWJOB,
    GREETING,
    GOPI,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [ROARING]: Roaring,
    [NOOGIE]: Noogie,
    [COWGIRL]: Cowgirl,
    [BLOWJOB]: Blowjob,
    [GREETING]: Greeting,
    [GOPI]: Gopi,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Miriam = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Miriam',
                className
            )}
        />
    )
}

Miriam.propTypes = propTypes;

export default Miriam
