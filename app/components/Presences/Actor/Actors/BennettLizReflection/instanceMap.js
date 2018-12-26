import PropTypes from 'prop-types'

import HardOnReflection from './Instances/HardOnReflection'
import MissionaryReflection from './Instances/MissionaryReflection'
import AfterglowReflection from './Instances/AfterglowReflection'

import {
    HARD_ON_REFLECTION,
    MISSIONARY_REFLECTION,
    AFTERGLOW_REFLECTION
} from 'scene/instanceKeys/bennettLiz'

const propTypes = {
    [HARD_ON_REFLECTION]: PropTypes.bool,
    [MISSIONARY_REFLECTION]: PropTypes.bool,
    [AFTERGLOW_REFLECTION]: PropTypes.bool
}

export { propTypes }

export default {
    [HARD_ON_REFLECTION]: HardOnReflection,
    [MISSIONARY_REFLECTION]: MissionaryReflection,
    [AFTERGLOW_REFLECTION]: AfterglowReflection
}
