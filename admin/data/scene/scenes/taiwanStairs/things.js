import {
    CARDBOARD,
    DOOR,
} from '../../../../../app/constants/scene/things'
import {
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE,
} from '../../../../../app/constants/scene/things/cardboards'
import { IRON_GATE_LOW } from '../../../../../app/constants/scene/things/doors'

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
            yIndex: 0,
            xPosition: 4,
            zOffset: -2.2,
        },
    },
}
