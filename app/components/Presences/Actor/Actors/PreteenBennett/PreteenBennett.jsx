import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Cautious from './Instances/Cautious'
import Enraged from './Instances/Enraged'
import Fearful from './Instances/Fearful'
import Enchanted from './Instances/Enchanted'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    CAUTIOUS,
    ENRAGED,
    FEARFUL,
    ENCHANTED
} from 'scene/actors/preteenBennett'

import { EPILOGUE } from 'scene/actors/songs'

const INSTANCES_MAP = {
    [CAUTIOUS]: Cautious,
    [ENRAGED]: Enraged,
    [FEARFUL]: Fearful,
    [ENCHANTED]: Enchanted,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const PreteenBennett = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'PreteenBennett',
                className
            )}
        />
    )
}

PreteenBennett.propTypes = propTypes;

export default PreteenBennett
