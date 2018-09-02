import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Weeping from './Instances/Weeping'
import Quipping from './Instances/Quipping'
import Puzzled from './Instances/Puzzled'
import Gopi from './Instances/Gopi'
import Epilogue from './Instances/Epilogue'

import {
    WEEPING,
    QUIPPING,
    PUZZLED
} from 'scene/instanceKeys/catherine'

import {
    GOPI,
    EPILOGUE
} from 'scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [WEEPING]: Weeping,
    [QUIPPING]: Quipping,
    [PUZZLED]: Puzzled,
    [GOPI]: Gopi,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Catherine = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Catherine',
                className
            )}
        />
    )
}

Catherine.propTypes = propTypes;

export default Catherine
