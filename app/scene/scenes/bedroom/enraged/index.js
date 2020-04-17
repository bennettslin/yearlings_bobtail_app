import {
    PRETEEN_BENNETT,
    FATHER,
    CHRISTOPHER
} from '../../../../constants/scene/actors'
import { SOBBING } from '../../../../constants/scene/actors/christopher'
import { ROARING } from '../../../../constants/scene/actors/father'
import { ENRAGED } from '../../../../constants/scene/actors/preteenBennett'

export default {
    [PRETEEN_BENNETT]: {
        [ENRAGED]: {
            yIndex: 5,
            xPosition: 1.5
        }
    },
    [CHRISTOPHER]: {
        [SOBBING]: {
            yIndex: 5,
            xPosition: 3.9
        }
    },
    [FATHER]: {
        [ROARING]: {
            yIndex: 5,
            xPosition: 8.1
        }
    }
}
