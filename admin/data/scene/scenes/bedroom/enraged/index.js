import {
    PRETEEN_BENNETT,
    FATHER,
    CHRISTOPHER,
} from '../../../../../../src/constants/scene/actors'
import { SOBBING } from '../../../../../../src/constants/scene/actors/christopher'
import { ROARING } from '../../../../../../src/constants/scene/actors/father'
import { ENRAGED } from '../../../../../../src/constants/scene/actors/preteenBennett'

export default {
    [PRETEEN_BENNETT]: {
        [ENRAGED]: {
            yIndex: 5,
            xPosition: 1.5,
        },
    },
    [CHRISTOPHER]: {
        [SOBBING]: {
            yIndex: 5,
            xPosition: 3.9,
        },
    },
    [FATHER]: {
        [ROARING]: {
            yIndex: 5,
            xPosition: 8.1,
        },
    },
}
