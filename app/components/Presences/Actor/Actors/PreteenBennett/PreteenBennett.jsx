import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Cautious from './Instances/Cautious'
import Enraged from './Instances/Enraged'
import Fearful from './Instances/Fearful'
import Enchanted from './Instances/Enchanted'
import Panicked from './Instances/Panicked'
import Mat from './Instances/Mat'
import Stairs from './Instances/Stairs'
import Gate from './Instances/Gate'
import Rickshaw from './Instances/Rickshaw'
import Shore from './Instances/Shore'
import Buoy from './Instances/Buoy'
import Sinking from './Instances/Sinking'
import OceanFloor from './Instances/OceanFloor'
import GuiltRidden from './Instances/GuiltRidden'
import FeigningSick from './Instances/FeigningSick'
import Asleep from './Instances/Asleep'
import Shaken from './Instances/Shaken'
import Stoic from './Instances/Stoic'
import Wistful from './Instances/Wistful'
import Sheepish from './Instances/Sheepish'
import Humiliated from './Instances/Humiliated'
import Epilogue from './Instances/Epilogue'

import {
    CAUTIOUS,
    ENRAGED,
    FEARFUL,
    ENCHANTED,
    PANICKED,
    MAT,
    STAIRS,
    GATE,
    RICKSHAW,
    SHORE,
    BUOY,
    SINKING,
    OCEAN_FLOOR,
    GUILT_RIDDEN,
    FEIGNING_SICK,
    ASLEEP,
    SHAKEN,
    STOIC,
    WISTFUL,
    SHEEPISH,
    HUMILIATED
} from '../../../../../scene/instanceKeys/preteenBennett'

import { EPILOGUE } from '../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [CAUTIOUS]: Cautious,
    [ENRAGED]: Enraged,
    [FEARFUL]: Fearful,
    [ENCHANTED]: Enchanted,
    [PANICKED]: Panicked,
    [MAT]: Mat,
    [STAIRS]: Stairs,
    [GATE]: Gate,
    [RICKSHAW]: Rickshaw,
    [SHORE]: Shore,
    [BUOY]: Buoy,
    [SINKING]: Sinking,
    [OCEAN_FLOOR]: OceanFloor,
    [GUILT_RIDDEN]: GuiltRidden,
    [FEIGNING_SICK]: FeigningSick,
    [ASLEEP]: Asleep,
    [SHAKEN]: Shaken,
    [STOIC]: Stoic,
    [WISTFUL]: Wistful,
    [SHEEPISH]: Sheepish,
    [HUMILIATED]: Humiliated,
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

    const InstanceComponent = INSTANCES_MAP[instanceKey]

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
