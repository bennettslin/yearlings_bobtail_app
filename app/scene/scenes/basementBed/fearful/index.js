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
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [FATHER]: {
        [ACCUSATORY]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [MIRIAM_BENNETT]: {
        [ASLEEP]: {
            yIndex: 5,
            xPosition: 5.5
        },
        [ASLEEP_FEARFUL]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}
