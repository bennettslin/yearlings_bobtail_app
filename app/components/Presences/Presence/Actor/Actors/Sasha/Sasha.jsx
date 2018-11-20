import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Indignant from './Instances/Indignant'
import PopularGirl from './Instances/PopularGirl'

import {
    INDIGNANT,
    POPULAR_GIRL
} from '../../../../../../scene/instanceKeys/sasha'

const INSTANCES_MAP = {
    [INDIGNANT]: Indignant,
    [POPULAR_GIRL]: PopularGirl
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Sasha = ({

    className,
    instanceKey,

    ...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Sasha',
                className
            )}
        />
    )
}

Sasha.propTypes = propTypes

export default Sasha
