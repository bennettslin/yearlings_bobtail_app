import {
    ESTHER_MOTHER,
    FATHER,
    MIRIAM_BENNETT
} from 'constants/scene/actors'
import { SOBBING_SHIELDING } from 'constants/scene/actors/instances/estherMother'
import { REELING } from 'constants/scene/actors/instances/father'
import { FENDING_OFF } from 'constants/scene/actors/instances/miriamBennett'

const ARRANGEMENTS_ACTORS = {
    [ESTHER_MOTHER]: {
        [SOBBING_SHIELDING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [FATHER]: {
        [REELING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MIRIAM_BENNETT]: {
        [FENDING_OFF]: {
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
