import {
    YOUNG_BENNETT,
    BENNETT_STEPHANIE,
    ANITA,
    ESTHER,
    WILLY,
} from '../../../../../src/constants/scene/actors'
import { YOUNG_CHILD } from '../../../../../src/constants/scene/actors/songs'
import { DRYING_TEARS } from '../../../../../src/constants/scene/actors/bennettStephanie'
import { CROSSING_GUARD } from '../../../../../src/constants/scene/actors/willy'

export default {
    [BENNETT_STEPHANIE]: {
        [DRYING_TEARS]: {
            yIndex: 5,
            xPosition: 3.1,
        },
    },
    [YOUNG_BENNETT]: {
        [YOUNG_CHILD]: {
            yIndex: 2,
            xPosition: 4.9,
        },
    },
    [ESTHER]: {
        [YOUNG_CHILD]: {
            yIndex: 2,
            xPosition: 6.8,
        },
    },
    [WILLY]: {
        [CROSSING_GUARD]: {
            yIndex: 1,
            xPosition: 7.7,
        },
    },
    [ANITA]: {
        [YOUNG_CHILD]: {
            yIndex: 2,
            xPosition: 8.9,
        },
    },
}
