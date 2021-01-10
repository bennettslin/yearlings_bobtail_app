import {
    ESTHER_MOTHER,
    FATHER,
    MIRIAM_BENNETT,
} from '../../../../../../app/constants/scene/actors'
import { SOBBING_SHIELDING } from '../../../../../../app/constants/scene/actors/estherMother'
import { REELING } from '../../../../../../app/constants/scene/actors/father'
import { FENDING_OFF } from '../../../../../../app/constants/scene/actors/miriamBennett'

export default {
    [ESTHER_MOTHER]: {
        [SOBBING_SHIELDING]: {
            yIndex: 4,
            xPosition: 2.2,
            zOffset: 2.6,
        },
    },
    [FATHER]: {
        [REELING]: {
            yIndex: 4,
            xPosition: 4.5,
            zOffset: 0.7,
        },
    },
    [MIRIAM_BENNETT]: {
        [FENDING_OFF]: {
            yIndex: 4,
            xPosition: 7.25,
            zOffset: -0.03,
        },
    },
}
