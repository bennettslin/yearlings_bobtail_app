import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Prologue from './Instances/Prologue'

import {
    PROLOGUE
} from '../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [PROLOGUE]: Prologue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const OldBennett = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'OldBennett',
                className
            )}
        />
    )
}

OldBennett.propTypes = propTypes

export default OldBennett
