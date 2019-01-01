import PropTypes from 'prop-types'

import AsleepFearful from './Instances/AsleepFearful'
import FendingOff from './Instances/FendingOff'
import Cowgirl from './Instances/Cowgirl'
import Blowjob from './Instances/Blowjob'

import {
    ASLEEP_FEARFUL,
    FENDING_OFF,
    COWGIRL,
    BLOWJOB
} from 'scene/instanceKeys/miriamBennett'

export const propTypes = {
    [ASLEEP_FEARFUL]: PropTypes.bool,
    [FENDING_OFF]: PropTypes.bool,
    [COWGIRL]: PropTypes.bool,
    [BLOWJOB]: PropTypes.bool
}

export default {
    [ASLEEP_FEARFUL]: AsleepFearful,
    [FENDING_OFF]: FendingOff,
    [COWGIRL]: Cowgirl,
    [BLOWJOB]: Blowjob
}
