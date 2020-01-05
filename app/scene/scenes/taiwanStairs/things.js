import {
    CARDBOARD,
    DOOR
} from '../../../constants/scene/things'
import {
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE
} from '../../../constants/scene/things/cardboards'
import { IRON_GATE_LOW } from '../../../constants/scene/things/doors'

export default {
    [CARDBOARD]: {
        [BENNETT_TAIWAN_GATE]: {
            yIndex: 2,
            xPosition: 5,
            scaleFactor: 0.2,
            zOffset: 0.875
        },
        [ODIN_TAIWAN_GATE]: {
            yIndex: 1,
            xPosition: 6,
            scaleFactor: 0.2
        }
    },
    [DOOR]: {
        [IRON_GATE_LOW]: {
            yIndex: 0,
            xPosition: 4,
            zOffset: -2.2
        }
    }
}
