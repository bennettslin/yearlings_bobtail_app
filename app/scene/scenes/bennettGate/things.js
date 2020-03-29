import {
    CARDBOARD,
    CUTOUT,
    DOOR
} from '../../../constants/scene/things'
import { CODE_BOX } from '../../../constants/scene/things/cardboards'
import {
    APARTMENT_PLANT,
    BUSH_SINGLE__BENNETT_GATE,
    BUSH_DOUBLE__BENNETT_GATE
} from '../../../constants/scene/things/cutouts'
import { BENNETT_GATE_FRONT } from '../../../constants/scene/things/doors'

export default {
    [CARDBOARD]: {
        [CODE_BOX]: {
            yIndex: 2,
            xPosition: 4,
            zOffset: 3,
            scaleFactor: 0.275
        }
    },
    [CUTOUT]: {
        [APARTMENT_PLANT]: {
            yIndex: 3,
            xPosition: 1,
            scaleFactor: 0.35
        },
        [BUSH_SINGLE__BENNETT_GATE]: {
            yIndex: 3,
            xPosition: 10.4,
            scaleFactor: 0.3
        },
        [BUSH_DOUBLE__BENNETT_GATE]: {
            yIndex: 2,
            xPosition: 3.9,
            scaleFactor: 0.23
        }
    },
    [DOOR]: {
        [BENNETT_GATE_FRONT]: {
            yIndex: 2,
            xPosition: 7
        }
    }
}
