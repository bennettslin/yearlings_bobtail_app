import {
    ESTHER_MOTHER,
    FATHER,
    MIRIAM_BENNETT
} from '../../../keys'
import { SOBBING_SHIELDING } from '../../../keys/instances/estherMother'
import { REELING } from '../../../keys/instances/father'
import { FENDING_OFF } from '../../../keys/instances/miriamBennett'

const ARRANGEMENTS_ACTORS = {
    [ESTHER_MOTHER]: {
        [SOBBING_SHIELDING]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [FATHER]: {
        [REELING]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MIRIAM_BENNETT]: {
        [FENDING_OFF]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
