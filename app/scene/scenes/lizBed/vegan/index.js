import {
    BENNETT,
    KHARI_LIZ,
    KHARI_LIZ_REFLECTION
} from 'constants/scene/actors'
import { BROKEN_HEARTED } from 'constants/scene/actors/instances/bennett'
import {
    CARESS,
    CARESS_REFLECTION
} from 'constants/scene/actors/instances/khariLiz'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [BROKEN_HEARTED]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [KHARI_LIZ]: {
        [CARESS]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [KHARI_LIZ_REFLECTION]: {
        [CARESS_REFLECTION]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
