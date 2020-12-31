import {
    BENNETT,
    KHARI_LIZ,
    KHARI_LIZ_REFLECTION,
} from '../../../../../../app/constants/scene/actors'
import { BROKEN_HEARTED } from '../../../../../../app/constants/scene/actors/bennett'
import {
    CARESS,
    CARESS_REFLECTION,
} from '../../../../../../app/constants/scene/actors/khariLiz'

export default {
    [BENNETT]: {
        [BROKEN_HEARTED]: {
            yIndex: 4,
            xPosition: 9,
            zOffset: -0.09,
            layerYIndex: 5,
        },
    },
    [KHARI_LIZ]: {
        [CARESS]: {
            yIndex: 4,
            xPosition: 5,
        },
    },
    [KHARI_LIZ_REFLECTION]: {
        [CARESS_REFLECTION]: {
            yIndex: 2,
            xPosition: 5,
        },
    },
}
