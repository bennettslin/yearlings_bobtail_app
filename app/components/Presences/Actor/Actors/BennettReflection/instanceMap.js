import PropTypes from 'prop-types'

import ShoesReflection from './Instances/ShoesReflection'

import {
    SHOES_REFLECTION
} from 'constants/scene/actors/instances/bennett'

export const propTypes = {
    [SHOES_REFLECTION]: PropTypes.bool
}

export default {
    [SHOES_REFLECTION]: ShoesReflection
}
