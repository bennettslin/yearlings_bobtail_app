import PropTypes from 'prop-types'

import CaressReflection from './Instances/CaressReflection'

import { CARESS_REFLECTION } from 'scene/actors/keys/instances/khariLiz'

export const propTypes = {
    [CARESS_REFLECTION]: PropTypes.bool
}

export default {
    [CARESS_REFLECTION]: CaressReflection
}
