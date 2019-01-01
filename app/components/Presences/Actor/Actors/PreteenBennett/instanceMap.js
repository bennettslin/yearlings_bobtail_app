import PropTypes from 'prop-types'

import Cautious from './Instances/Cautious'
import Enraged from './Instances/Enraged'
import Fearful from './Instances/Fearful'
import Panicked from './Instances/Panicked'
import Mat from './Instances/Mat'
import Stairs from './Instances/Stairs'
import Gate from './Instances/Gate'
import Rickshaw from './Instances/Rickshaw'
import Shore from './Instances/Shore'
import Buoy from './Instances/Buoy'
import OceanFloor from './Instances/OceanFloor'
import FeigningSick from './Instances/FeigningSick'
import Asleep from './Instances/Asleep'
import Shaken from './Instances/Shaken'
import Stoic from './Instances/Stoic'
import Wistful from './Instances/Wistful'
import Sheepish from './Instances/Sheepish'

import {
    CAUTIOUS,
    ENRAGED,
    FEARFUL,
    PANICKED,
    MAT,
    STAIRS,
    GATE,
    RICKSHAW,
    SHORE,
    BUOY,
    OCEAN_FLOOR,
    FEIGNING_SICK,
    ASLEEP,
    SHAKEN,
    STOIC,
    WISTFUL,
    SHEEPISH
} from 'scene/instanceKeys/preteenBennett'

export const propTypes = {
    [CAUTIOUS]: PropTypes.bool,
    [ENRAGED]: PropTypes.bool,
    [FEARFUL]: PropTypes.bool,
    [PANICKED]: PropTypes.bool,
    [MAT]: PropTypes.bool,
    [STAIRS]: PropTypes.bool,
    [GATE]: PropTypes.bool,
    [RICKSHAW]: PropTypes.bool,
    [SHORE]: PropTypes.bool,
    [BUOY]: PropTypes.bool,
    [OCEAN_FLOOR]: PropTypes.bool,
    [FEIGNING_SICK]: PropTypes.bool,
    [ASLEEP]: PropTypes.bool,
    [SHAKEN]: PropTypes.bool,
    [STOIC]: PropTypes.bool,
    [WISTFUL]: PropTypes.bool,
    [SHEEPISH]: PropTypes.bool
}

export default {
    [CAUTIOUS]: Cautious,
    [ENRAGED]: Enraged,
    [FEARFUL]: Fearful,
    [PANICKED]: Panicked,
    [MAT]: Mat,
    [STAIRS]: Stairs,
    [GATE]: Gate,
    [RICKSHAW]: Rickshaw,
    [SHORE]: Shore,
    [BUOY]: Buoy,
    [OCEAN_FLOOR]: OceanFloor,
    [FEIGNING_SICK]: FeigningSick,
    [ASLEEP]: Asleep,
    [SHAKEN]: Shaken,
    [STOIC]: Stoic,
    [WISTFUL]: Wistful,
    [SHEEPISH]: Sheepish
}
