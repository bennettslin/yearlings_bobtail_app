import {
    BENNETT_LIZ,
    BENNETT_LIZ_REFLECTION
} from '../../../../constants/scene/actors'
import {
    MISSIONARY,
    MISSIONARY_REFLECTION
} from '../../../../constants/scene/actors/bennettLiz'

export default {
    [BENNETT_LIZ]: {
        [MISSIONARY]: {
            yIndex: 4,
            xPosition: 5
        }
    },
    [BENNETT_LIZ_REFLECTION]: {
        [MISSIONARY_REFLECTION]: {
            yIndex: 2,
            xPosition: 5,
            zOffset: 3
        }
    }
}
