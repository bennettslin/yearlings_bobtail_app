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

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [CODE_BOX]: {
            yIndex: 2,
            xPosition: 5,
            zOffset: 2.5,
            scaleFactor: 0.275
        }
    },
    [CUTOUT]: {
        [APARTMENT_PLANT]: {
            yIndex: 2,
            xPosition: 1,
            scaleFactor: 0.35
        },
        [BUSH_SINGLE__BENNETT_GATE]: {
            yIndex: 2,
            xPosition: 10.5,
            scaleFactor: 0.3
        },
        [BUSH_DOUBLE__BENNETT_GATE]: {
            yIndex: 2,
            xPosition: 3.25,
            scaleFactor: 0.25
        }
    },
    [DOOR]: {
        [BENNETT_GATE_FRONT]: {
            yIndex: 2,
            xPosition: 8
        }
    }
}

export default ARRANGEMENTS_THINGS
