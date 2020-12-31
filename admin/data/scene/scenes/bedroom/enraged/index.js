import {
    PRETEEN_BENNETT,
    FATHER,
    CHRISTOPHER,
} from '../../../../../../app/constants/scene/actors'
import { SOBBING } from '../../../../../../app/constants/scene/actors/christopher'
import { ROARING } from '../../../../../../app/constants/scene/actors/father'
import { ENRAGED } from '../../../../../../app/constants/scene/actors/preteenBennett'

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
