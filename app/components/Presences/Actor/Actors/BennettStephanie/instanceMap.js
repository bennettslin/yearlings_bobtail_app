import PropTypes from 'prop-types'

import Horsing from './Instances/Horsing'
import DryingTears from './Instances/DryingTears'

import {
    HORSING,
    DRYING_TEARS
} from 'scene/instanceKeys/bennettStephanie'

const propTypes = {
    [HORSING]: PropTypes.bool,
    [DRYING_TEARS]: PropTypes.bool
}

export { propTypes }

export default {
    [HORSING]: Horsing,
    [DRYING_TEARS]: DryingTears
}
