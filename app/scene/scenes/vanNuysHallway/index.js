import {
    PRETEEN_BENNETT,
    MOTHER,
    CHRISTOPHER,
    TRISTAN
} from '../../../constants/scene/actors'
import { STARING } from '../../../constants/scene/actors/christopher'
import { ARGUING } from '../../../constants/scene/actors/mother'
import { SHEEPISH } from '../../../constants/scene/actors/preteenBennett'
import { PRINCIPAL } from '../../../constants/scene/actors/tristan'

export default {
    [PRETEEN_BENNETT]: {
        [SHEEPISH]: {
            yIndex: 4,
            xPosition: 8.25,
            zOffset: -1.25
        }
    },
    [CHRISTOPHER]: {
        [STARING]: {
            yIndex: 4,
            xPosition: 6.75,
            zOffset: -0.95
        }
    },
    [MOTHER]: {
        [ARGUING]: {
            yIndex: 2,
            xPosition: 2
        }
    },
    [TRISTAN]: {
        [PRINCIPAL]: {
            yIndex: 2,
            xPosition: 3.5
        }
    }
}
