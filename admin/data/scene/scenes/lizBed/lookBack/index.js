import {
    BENNETT,
    LIZ,
    BENNETT_REFLECTION,
    LIZ_REFLECTION,
} from '../../../../../../src/constants/scene/actors'
import {
    REMOVING_SHOES,
    SHOES_REFLECTION,
} from '../../../../../../src/constants/scene/actors/bennett'
import {
    ASLEEP_REACHING,
    REACHING_REFLECTION,
} from '../../../../../../src/constants/scene/actors/liz'

export default {
    [LIZ]: {
        [ASLEEP_REACHING]: {
            yIndex: 4,
            xPosition: 5,
        },
    },
    [LIZ_REFLECTION]: {
        [REACHING_REFLECTION]: {
            yIndex: 2,
            xPosition: 5,
            zOffset: 1,
        },
    },
    [BENNETT]: {
        [REMOVING_SHOES]: {
            yIndex: 3,
            xPosition: 8,
            layerYIndex: 4,
        },
    },
    [BENNETT_REFLECTION]: {
        [SHOES_REFLECTION]: {
            yIndex: 2,
            xPosition: 8,
            zOffset: 4,
        },
    },
}
