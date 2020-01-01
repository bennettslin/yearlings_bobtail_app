import {
    BENNETT,
    LIZ,
    BENNETT_REFLECTION,
    LIZ_REFLECTION
} from 'constants/scene/actors'
import {
    REMOVING_SHOES,
    SHOES_REFLECTION
} from 'constants/scene/actors/bennett'
import {
    ASLEEP_REACHING,
    REACHING_REFLECTION
} from 'constants/scene/actors/liz'

export default {
    [BENNETT]: {
        [REMOVING_SHOES]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [LIZ]: {
        [ASLEEP_REACHING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [BENNETT_REFLECTION]: {
        [SHOES_REFLECTION]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [LIZ_REFLECTION]: {
        [REACHING_REFLECTION]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}
