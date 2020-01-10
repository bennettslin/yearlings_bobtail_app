import {
    BENNETT_LIZ,
    BENNETT_LIZ_REFLECTION
} from 'constants/scene/actors'
import {
    AFTERGLOW,
    AFTERGLOW_REFLECTION
} from 'constants/scene/actors/bennettLiz'

export default {
    [BENNETT_LIZ]: {
        [AFTERGLOW]: {
            yIndex: 4,
            xPosition: 5
        }
    },
    [BENNETT_LIZ_REFLECTION]: {
        [AFTERGLOW_REFLECTION]: {
            yIndex: 2,
            xPosition: 5,
            zOffset: 0.5
        }
    }
}
