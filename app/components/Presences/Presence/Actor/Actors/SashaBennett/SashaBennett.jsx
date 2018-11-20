import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Mermaid from './Instances/Mermaid'
import ComfortingHumiliated from './Instances/ComfortingHumiliated'
import Epilogue from './Instances/Epilogue'

import {
    MERMAID,
    COMFORTING_HUMILIATED
} from '../../../../../../scene/instanceKeys/sashaBennett'

import { EPILOGUE } from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [MERMAID]: Mermaid,
    [COMFORTING_HUMILIATED]: ComfortingHumiliated,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const SashaBennett = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'SashaBennett',
                className
            )}
        />
    )
}

SashaBennett.propTypes = propTypes;

export default SashaBennett
