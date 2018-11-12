import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import JewishBoy from './Instances/JewishBoy'
import Gesturing from './Instances/Gesturing'
import Snacking from './Instances/Snacking'
import Epilogue from './Instances/Epilogue'

import {
    JEWISH_BOY,
    GESTURING,
    SNACKING
} from '../../../../../scene/instanceKeys/brad'

import { EPILOGUE } from '../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [JEWISH_BOY]: JewishBoy,
    [GESTURING]: Gesturing,
    [SNACKING]: Snacking,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Brad = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Brad',
                className
            )}
        />
    )
}

Brad.propTypes = propTypes;

export default Brad
