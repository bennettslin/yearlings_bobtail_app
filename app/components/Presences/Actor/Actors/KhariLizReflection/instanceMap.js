import PropTypes from 'prop-types'

import CaressReflection from './Instances/CaressReflection'

import { CARESS_REFLECTION } from 'scene/instanceKeys/khariLiz'

export const propTypes = {
    [CARESS_REFLECTION]: PropTypes.bool
}

export { propTypes }

export default {
    [CARESS_REFLECTION]: CaressReflection
}
