import PropTypes from 'prop-types'

import ReachingReflection from './Instances/ReachingReflection'

import {
    REACHING_REFLECTION
} from 'constants/scene/actors/instances/liz'

export const propTypes = {
    [REACHING_REFLECTION]: PropTypes.bool
}

export default {
    [REACHING_REFLECTION]: ReachingReflection
}
