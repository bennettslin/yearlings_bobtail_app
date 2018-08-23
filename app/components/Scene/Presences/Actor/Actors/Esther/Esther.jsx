import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Curious from './Instances/Curious'
import Snickering from './Instances/Snickering'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    CURIOUS,
    SNICKERING
} from 'scene/actors/esther'

const INSTANCES_MAP = {
    [CURIOUS]: Curious,
    [SNICKERING]: Snickering
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Esther = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Esther',
                className
            )}
        />
    )
}

Esther.propTypes = propTypes;

export default Esther
