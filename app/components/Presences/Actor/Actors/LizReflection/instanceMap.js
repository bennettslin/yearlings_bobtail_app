import PropTypes from 'prop-types'

import ReachingReflection from './Instances/ReachingReflection'

import {
    REACHING_REFLECTION
} from 'scene/instanceKeys/liz'

export const propTypes = {
    [REACHING_REFLECTION]: PropTypes.bool
}

export { propTypes }

export default {
    [REACHING_REFLECTION]: ReachingReflection
}
