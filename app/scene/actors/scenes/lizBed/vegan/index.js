import {
    BENNETT,
    KHARI_LIZ,
    KHARI_LIZ_REFLECTION
} from '../../../keys'
import { BROKEN_HEARTED } from '../../../keys/instances/bennett'
import {
    CARESS,
    CARESS_REFLECTION
} from '../../../keys/instances/khariLiz'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [BROKEN_HEARTED]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [KHARI_LIZ]: {
        [CARESS]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [KHARI_LIZ_REFLECTION]: {
        [CARESS_REFLECTION]: {
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
