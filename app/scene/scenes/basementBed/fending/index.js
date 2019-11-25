import {
    ESTHER_MOTHER,
    FATHER,
    MIRIAM_BENNETT
} from 'constants/scene/actors'
import { SOBBING_SHIELDING } from 'constants/scene/actors/estherMother'
import { REELING } from 'constants/scene/actors/father'
import { FENDING_OFF } from 'constants/scene/actors/miriamBennett'

const ARRANGEMENTS_ACTORS = {
    [ESTHER_MOTHER]: {
        [SOBBING_SHIELDING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [FATHER]: {
        [REELING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [MIRIAM_BENNETT]: {
        [FENDING_OFF]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
