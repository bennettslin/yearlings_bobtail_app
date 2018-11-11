import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Curious from './Instances/Curious'
import Snickering from './Instances/Snickering'
import YoungChild from './Instances/YoungChild'
import SitaHurt from './Instances/SitaHurt'
import SitaSobbing from './Instances/SitaSobbing'
import Epilogue from './Instances/Epilogue'

import {
    CURIOUS,
    SNICKERING,
    SITA_HURT,
    SITA_SOBBING
} from '../../../../../scene/instanceKeys/esther'

import {
    YOUNG_CHILD,
    EPILOGUE
} from '../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [CURIOUS]: Curious,
    [SNICKERING]: Snickering,
    [YOUNG_CHILD]: YoungChild,
    [SITA_HURT]: SitaHurt,
    [SITA_SOBBING]: SitaSobbing,
    [EPILOGUE]: Epilogue
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

    const InstanceComponent = INSTANCES_MAP[instanceKey]

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
