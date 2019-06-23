import PropTypes from 'prop-types'

import Tantrum from './Instances/Tantrum'
import Sobbing from './Instances/Sobbing'
import Staring from './Instances/Staring'

import {
    TANTRUM,
    SOBBING,
    STARING
} from 'constants/scene/actors/instances/christopher'

export const propTypes = {
    [TANTRUM]: PropTypes.bool,
    [SOBBING]: PropTypes.bool,
    [STARING]: PropTypes.bool
}

export default {
    [TANTRUM]: Tantrum,
    [SOBBING]: Sobbing,
    [STARING]: Staring
}
