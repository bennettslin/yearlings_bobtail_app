import {
    PRETEEN_BENNETT,
    BRAD,
    ANDREW,
} from '../../../../../src/constants/scene/actors'
import { THROWING } from '../../../../../src/constants/scene/actors/andrew'
import { GESTURING } from '../../../../../src/constants/scene/actors/brad'
import { STOIC } from '../../../../../src/constants/scene/actors/preteenBennett'

export default {
    [BRAD]: {
        [GESTURING]: {
            yIndex: 4,
            xPosition: 1.2,
        },
    },
    [ANDREW]: {
        [THROWING]: {
            yIndex: 4,
            xPosition: 3.8,
        },
    },
    [PRETEEN_BENNETT]: {
        [STOIC]: {
            yIndex: 4,
            xPosition: 7.3,
        },
    },
}
