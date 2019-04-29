import PropTypes from 'prop-types'

import Horsing from './Instances/Horsing'
import DryingTears from './Instances/DryingTears'

import {
    HORSING,
    DRYING_TEARS
} from 'scene/actors/keys/instances/bennettStephanie'

export const propTypes = {
    [HORSING]: PropTypes.bool,
    [DRYING_TEARS]: PropTypes.bool
}

export default {
    [HORSING]: Horsing,
    [DRYING_TEARS]: DryingTears
}
