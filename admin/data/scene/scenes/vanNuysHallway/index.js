import {
    PRETEEN_BENNETT,
    MOTHER,
    CHRISTOPHER,
    TRISTAN
} from '../../../../../app/constants/scene/actors'
import { STARING } from '../../../../../app/constants/scene/actors/christopher'
import { ARGUING } from '../../../../../app/constants/scene/actors/mother'
import { SHEEPISH } from '../../../../../app/constants/scene/actors/preteenBennett'
import { PRINCIPAL } from '../../../../../app/constants/scene/actors/tristan'

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
            xPosition: 1.9
        }
    },
    [TRISTAN]: {
        [PRINCIPAL]: {
            yIndex: 2,
            xPosition: 3.7
        }
    }
}
