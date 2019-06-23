import {
    BENNETT_LIZ,
    BENNETT_LIZ_REFLECTION
} from 'constants/scene/actors'
import {
    AFTERGLOW,
    AFTERGLOW_REFLECTION
} from 'constants/scene/actors/instances/bennettLiz'

const ARRANGEMENTS_ACTORS = {
    [BENNETT_LIZ]: {
        [AFTERGLOW]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [BENNETT_LIZ_REFLECTION]: {
        [AFTERGLOW_REFLECTION]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
