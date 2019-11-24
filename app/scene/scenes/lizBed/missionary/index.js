import {
    BENNETT_LIZ,
    BENNETT_LIZ_REFLECTION
} from 'constants/scene/actors'
import {
    MISSIONARY,
    MISSIONARY_REFLECTION
} from 'constants/scene/actors/instances/bennettLiz'

const ARRANGEMENTS_ACTORS = {
    [BENNETT_LIZ]: {
        [MISSIONARY]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [BENNETT_LIZ_REFLECTION]: {
        [MISSIONARY_REFLECTION]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
