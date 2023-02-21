import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER,
} from '../../../../../../src/constants/scene/actors'
import { EXASPERATED } from '../../../../../../src/constants/scene/actors/anita'
import { CURIOUS } from '../../../../../../src/constants/scene/actors/esther'
import { PANICKED } from '../../../../../../src/constants/scene/actors/youngBennett'

export default {
    [YOUNG_BENNETT]: {
        [PANICKED]: {
            yIndex: 5,
            xPosition: 9,
        },
    },
    [ANITA]: {
        [EXASPERATED]: {
            yIndex: 5,
            xPosition: 4.5,
        },
    },
    [ESTHER]: {
        [CURIOUS]: {
            yIndex: 4,
            xPosition: 3.5,
        },
    },
}
