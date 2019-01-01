import PropTypes from 'prop-types'

import Joking from './Instances/JokingLaughing'
import Protective from './Instances/ProtectiveConcerned'
import Caressing from './Instances/Caress'

import {
    JOKING_LAUGHING,
    PROTECTIVE_CONCERNED,
    CARESS
} from 'scene/instanceKeys/khariLiz'

export const propTypes = {
    [JOKING_LAUGHING]: PropTypes.bool,
    [PROTECTIVE_CONCERNED]: PropTypes.bool,
    [CARESS]: PropTypes.bool
}

export default {
    [JOKING_LAUGHING]: Joking,
    [PROTECTIVE_CONCERNED]: Protective,
    [CARESS]: Caressing
}
