import PropTypes from 'prop-types'

import MischievousBanjo from './Instances/MischievousBanjo'

import {
    MISCHIEVOUS_BANJO
} from 'scene/instanceKeys/miriamStephanie'

export const propTypes = {
    [MISCHIEVOUS_BANJO]: PropTypes.bool
}

export default {
    [MISCHIEVOUS_BANJO]: MischievousBanjo
}
