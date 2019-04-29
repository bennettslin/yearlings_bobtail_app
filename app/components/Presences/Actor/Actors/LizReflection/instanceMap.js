import PropTypes from 'prop-types'

import ReachingReflection from './Instances/ReachingReflection'

import {
    REACHING_REFLECTION
} from 'scene/actors/keys/instances/liz'

export const propTypes = {
    [REACHING_REFLECTION]: PropTypes.bool
}

export default {
    [REACHING_REFLECTION]: ReachingReflection
}
