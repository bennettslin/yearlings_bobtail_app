import {
    CARDBOARD,
    DOOR,
} from '../../../../../src/constants/scene/things'
import {
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE,
} from '../../../../../src/constants/scene/things/cardboards'
import { IRON_GATE_LOW } from '../../../../../src/constants/scene/things/doors'

export default {
    [CARDBOARD]: {
        [BENNETT_TAIWAN_GATE]: {
            yIndex: 2,
            xPosition: 4.75,
            zOffset: 0.8,
        },
        [ODIN_TAIWAN_GATE]: {
            yIndex: 1,
            xPosition: 6.25,
        },
    },
    [DOOR]: {
        [IRON_GATE_LOW]: {
            yIndex: 1,
            xPosition: 4,
            zOffset: -2.83,
        },
    },
}
