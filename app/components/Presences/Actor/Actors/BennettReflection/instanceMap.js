import PropTypes from 'prop-types'

import ShoesReflection from './Instances/ShoesReflection'

import {
    SHOES_REFLECTION
} from 'scene/instanceKeys/bennett'

const propTypes = {
    [SHOES_REFLECTION]: PropTypes.bool
}

export { propTypes }

export default {
    [SHOES_REFLECTION]: ShoesReflection
}
