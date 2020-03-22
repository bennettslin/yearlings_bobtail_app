import {
    ESTHER_MOTHER,
    FATHER,
    MIRIAM_BENNETT
} from 'constants/scene/actors'
import { ASLEEP } from 'constants/scene/actors/songs'
import { ASLEEP_FEARFUL } from 'constants/scene/actors/miriamBennett'
import { HURT_CONSOLING } from 'constants/scene/actors/estherMother'
import { ACCUSATORY } from 'constants/scene/actors/father'

export default {
    [ESTHER_MOTHER]: {
        [HURT_CONSOLING]: {
            yIndex: 4,
            xPosition: 2,
            zOffset: 2
        }
    },
    [FATHER]: {
        [ACCUSATORY]: {
            yIndex: 4,
            xPosition: 5,
            zOffset: 0.5
        }
    },
    [MIRIAM_BENNETT]: {
        [ASLEEP]: {
            yIndex: 4,
            xPosition: 7.25,
            zOffset: -0.2
        },
        [ASLEEP_FEARFUL]: {
            yIndex: 4,
            xPosition: 7.25,
            zOffset: -0.2
        }
    }
}
