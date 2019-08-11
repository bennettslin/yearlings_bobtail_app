import {
    YOUNG_BENNETT,
    BENNETT_STEPHANIE,
    ANITA,
    ESTHER,
    WILLY
} from '../../../constants/scene/actors'
import { YOUNG_CHILD } from '../../../constants/scene/actors/instances/songs'
import { DRYING_TEARS } from '../../../constants/scene/actors/instances/bennettStephanie'
import { CROSSING_GUARD } from '../../../constants/scene/actors/instances/willy'

const ARRANGEMENTS_ACTORS = {
    [YOUNG_BENNETT]: {
        [YOUNG_CHILD]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [BENNETT_STEPHANIE]: {
        [DRYING_TEARS]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [ANITA]: {
        [YOUNG_CHILD]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [ESTHER]: {
        [YOUNG_CHILD]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [WILLY]: {
        [CROSSING_GUARD]: {
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
