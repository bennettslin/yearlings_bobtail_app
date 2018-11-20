import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Epilogue from './Instances/Epilogue'

import {
    EPILOGUE
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const AnitaBennett = ({

    className,
    instanceKey,

    ...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'AnitaBennett',
                className
            )}
        />
    )
}

AnitaBennett.propTypes = propTypes

export default AnitaBennett
