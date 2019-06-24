import {
    ESTHER_MOTHER,
    FATHER,
    MIRIAM_BENNETT
} from 'constants/scene/actors'
import { ASLEEP } from 'constants/scene/actors/instances/songs'
import { ASLEEP_FEARFUL } from 'constants/scene/actors/instances/miriamBennett'
import { HURT_CONSOLING } from 'constants/scene/actors/instances/estherMother'
import { ACCUSATORY } from 'constants/scene/actors/instances/father'

const ARRANGEMENTS_ACTORS = {
    [ESTHER_MOTHER]: {
        [HURT_CONSOLING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [FATHER]: {
        [ACCUSATORY]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MIRIAM_BENNETT]: {
        [ASLEEP]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        },
        [ASLEEP_FEARFUL]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
