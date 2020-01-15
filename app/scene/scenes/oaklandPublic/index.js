import {
    YOUNG_BENNETT,
    BENNETT_STEPHANIE,
    ANITA,
    ESTHER,
    WILLY
} from '../../../constants/scene/actors'
import { YOUNG_CHILD } from '../../../constants/scene/actors/songs'
import { DRYING_TEARS } from '../../../constants/scene/actors/bennettStephanie'
import { CROSSING_GUARD } from '../../../constants/scene/actors/willy'

export default {
    [YOUNG_BENNETT]: {
        [YOUNG_CHILD]: {
            yIndex: 2,
            xPosition: 4.5
        }
    },
    [BENNETT_STEPHANIE]: {
        [DRYING_TEARS]: {
            yIndex: 5,
            xPosition: 3
        }
    },
    [ANITA]: {
        [YOUNG_CHILD]: {
            yIndex: 2,
            xPosition: 8
        }
    },
    [ESTHER]: {
        [YOUNG_CHILD]: {
            yIndex: 2,
            xPosition: 6.5
        }
    },
    [WILLY]: {
        [CROSSING_GUARD]: {
            yIndex: 1,
            xPosition: 8
        }
    }
}
