import {
    PRETEEN_BENNETT,
    WILLY,
    MOTHER,
    CHRISTOPHER,
} from '../../../../../src/constants/scene/actors'
import { TANTRUM } from '../../../../../src/constants/scene/actors/christopher'
import { STOOPING } from '../../../../../src/constants/scene/actors/mother'
import { CAUTIOUS } from '../../../../../src/constants/scene/actors/preteenBennett'
import { DUCKING } from '../../../../../src/constants/scene/actors/willy'

export default {
    [PRETEEN_BENNETT]: {
        [CAUTIOUS]: {
            yIndex: 4,
            xPosition: 7.5,
            zOffset: -0.3,
        },
    },
    [WILLY]: {
        [DUCKING]: {
            yIndex: 5,
            xPosition: 2,
        },
    },
    [MOTHER]: {
        [STOOPING]: {
            yIndex: 3,
            xPosition: 6,
            zOffset: -0.05,
        },
    },
    [CHRISTOPHER]: {
        [TANTRUM]: {
            yIndex: 5,
            xPosition: 9.5,
        },
    },
}
