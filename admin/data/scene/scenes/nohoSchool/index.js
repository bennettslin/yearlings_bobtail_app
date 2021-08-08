import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER,
} from '../../../../../src/constants/scene/actors'
import { CONCERNED } from '../../../../../src/constants/scene/actors/anita'
import { SNICKERING } from '../../../../../src/constants/scene/actors/esther'
import { FLUSTERED } from '../../../../../src/constants/scene/actors/youngBennett'

export default {
    [YOUNG_BENNETT]: {
        [FLUSTERED]: {
            yIndex: 4,
            xPosition: 9.6,
            zOffset: -1.02,
        },
    },
    [ANITA]: {
        [CONCERNED]: {
            yIndex: 4,
            xPosition: 2.5,
        },
    },
    [ESTHER]: {
        [SNICKERING]: {
            yIndex: 4,
            xPosition: 4.7,
        },
    },
}
