import {
    BACKDROP,
    CARDBOARD,
    DOOR
} from '../../../constants/scene/things'
import { TAIWAN_STAIRS_BACKDROP } from '../../../constants/scene/things/backdrops'
import {
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE
} from '../../../constants/scene/things/cardboards'
import { IRON_GATE_LOW } from '../../../constants/scene/things/doors'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [TAIWAN_STAIRS_BACKDROP]: {
            xPosition: 4.5,
            zOffset: 3,
            scaleFactor: 0.45,
            flipHorizontal: true
        }
    },
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
            yIndex: 2,
            xPosition: 4,
            zOffset: -2.5
        }
    }
}

export default ARRANGEMENTS_THINGS
