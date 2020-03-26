import {
    ESTHER_MOTHER,
    FATHER,
    MIRIAM_BENNETT
} from '../../../../constants/scene/actors'
import { SOBBING_SHIELDING } from '../../../../constants/scene/actors/estherMother'
import { REELING } from '../../../../constants/scene/actors/father'
import { FENDING_OFF } from '../../../../constants/scene/actors/miriamBennett'

export default {
    [ESTHER_MOTHER]: {
        [SOBBING_SHIELDING]: {
            yIndex: 4,
            xPosition: 2,
            zOffset: 2.5
        }
    },
    [FATHER]: {
        [REELING]: {
            yIndex: 4,
            xPosition: 4,
            zOffset: 2
        }
    },
    [MIRIAM_BENNETT]: {
        [FENDING_OFF]: {
            yIndex: 4,
            xPosition: 7.25
        }
    }
}
