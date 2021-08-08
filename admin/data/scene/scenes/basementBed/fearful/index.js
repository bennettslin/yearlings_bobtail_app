import {
    ESTHER_MOTHER,
    FATHER,
    MIRIAM_BENNETT,
} from '../../../../../../src/constants/scene/actors'
import { ASLEEP } from '../../../../../../src/constants/scene/actors/songs'
import { ASLEEP_FEARFUL } from '../../../../../../src/constants/scene/actors/miriamBennett'
import { HURT_CONSOLING } from '../../../../../../src/constants/scene/actors/estherMother'
import { ACCUSATORY } from '../../../../../../src/constants/scene/actors/father'

export default {
    [ESTHER_MOTHER]: {
        [HURT_CONSOLING]: {
            yIndex: 4,
            xPosition: 2.2,
            zOffset: 2,
        },
    },
    [FATHER]: {
        [ACCUSATORY]: {
            yIndex: 4,
            zOffset: 0.5,
        },
    },
    [MIRIAM_BENNETT]: {
        [ASLEEP]: {
            yIndex: 4,
            xPosition: 7.4,
            zOffset: -0.2,
            counterpart: ASLEEP_FEARFUL,
        },
        [ASLEEP_FEARFUL]: {
            yIndex: 4,
            xPosition: 7.4,
            zOffset: -0.2,
            counterpart: ASLEEP,
        },
    },
}
