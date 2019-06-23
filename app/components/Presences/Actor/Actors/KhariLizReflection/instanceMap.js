import PropTypes from 'prop-types'

import CaressReflection from './Instances/CaressReflection'

import { CARESS_REFLECTION } from 'constants/scene/actors/instances/khariLiz'

export const propTypes = {
    [CARESS_REFLECTION]: PropTypes.bool
}

export default {
    [CARESS_REFLECTION]: CaressReflection
}
