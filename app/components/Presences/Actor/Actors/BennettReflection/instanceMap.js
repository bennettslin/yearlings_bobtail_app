import PropTypes from 'prop-types'

import ShoesReflection from './Instances/ShoesReflection'

import {
    SHOES_REFLECTION
} from 'scene/instanceKeys/bennett'

export const propTypes = {
    [SHOES_REFLECTION]: PropTypes.bool
}

export default {
    [SHOES_REFLECTION]: ShoesReflection
}
