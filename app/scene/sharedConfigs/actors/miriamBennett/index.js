import asleep from 'assets/svgs/actors/miriamBennett/asleep'
import asleepFearful from 'assets/svgs/actors/miriamBennett/asleepFearful'
import fendingOff from 'assets/svgs/actors/miriamBennett/fendingOff'
import cowgirl from 'assets/svgs/actors/miriamBennett/cowgirl'
import blowjob from 'assets/svgs/actors/miriamBennett/blowjob'

import {
    ASLEEP_FEARFUL,
    FENDING_OFF,
    COWGIRL,
    BLOWJOB
} from 'constants/scene/actors/miriamBennett'

import { ASLEEP } from 'constants/scene/actors/songs'

export default {
    [ASLEEP]: asleep,
    [ASLEEP_FEARFUL]: asleepFearful,
    [FENDING_OFF]: fendingOff,
    [COWGIRL]: cowgirl,
    [BLOWJOB]: blowjob
}
