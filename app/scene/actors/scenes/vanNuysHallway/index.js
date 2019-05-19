import {
    PRETEEN_BENNETT,
    MOTHER,
    CHRISTOPHER,
    TRISTAN
} from '../../keys'
import { STARING } from '../../keys/instances/christopher'
import { ARGUING } from '../../keys/instances/mother'
import { SHEEPISH } from '../../keys/instances/preteenBennett'
import { PRINCIPAL } from '../../keys/instances/tristan'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [SHEEPISH]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MOTHER]: {
        [ARGUING]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [CHRISTOPHER]: {
        [STARING]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [TRISTAN]: {
        [PRINCIPAL]: {
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
