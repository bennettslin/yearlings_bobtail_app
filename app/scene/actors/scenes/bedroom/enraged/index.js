import {
    PRETEEN_BENNETT,
    FATHER,
    CHRISTOPHER
} from '../../../keys'
import { SOBBING } from '../../../keys/instances/christopher'
import { ROARING } from '../../../keys/instances/father'
import { ENRAGED } from '../../../keys/instances/preteenBennett'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [ENRAGED]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [FATHER]: {
        [ROARING]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [CHRISTOPHER]: {
        [SOBBING]: {
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
