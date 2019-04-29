import PropTypes from 'prop-types'

import Asleep from './Instances/Asleep'
import AsleepFearful from './Instances/AsleepFearful'
import FendingOff from './Instances/FendingOff'
import Cowgirl from './Instances/Cowgirl'
import Blowjob from './Instances/Blowjob'

import {
    ASLEEP_FEARFUL,
    FENDING_OFF,
    COWGIRL,
    BLOWJOB
} from 'scene/actors/keys/instances/miriamBennett'

import { ASLEEP } from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [ASLEEP]: PropTypes.bool,
    [ASLEEP_FEARFUL]: PropTypes.bool,
    [FENDING_OFF]: PropTypes.bool,
    [COWGIRL]: PropTypes.bool,
    [BLOWJOB]: PropTypes.bool
}

export default {
    [ASLEEP]: Asleep,
    [ASLEEP_FEARFUL]: AsleepFearful,
    [FENDING_OFF]: FendingOff,
    [COWGIRL]: Cowgirl,
    [BLOWJOB]: Blowjob
}
