import {
    CARDBOARD,
    CUTOUT,
    DOOR,
} from '../../../../../app/constants/scene/things'
import { CODE_BOX } from '../../../../../app/constants/scene/things/cardboards'
import {
    APARTMENT_PLANT,
    BUSH_SINGLE__BENNETT_GATE,
    BUSH_DOUBLE__BENNETT_GATE,
} from '../../../../../app/constants/scene/things/cutouts'
import { BENNETT_GATE_FRONT } from '../../../../../app/constants/scene/things/doors'

export default {
    [CARDBOARD]: {
        [CODE_BOX]: {
            yIndex: 2,
            xPosition: 4,
            zOffset: 3,
        },
    },
    [CUTOUT]: {
        [APARTMENT_PLANT]: {
            yIndex: 3,
            xPosition: 1,
        },
        [BUSH_SINGLE__BENNETT_GATE]: {
            yIndex: 3,
            xPosition: 10.4,
        },
        [BUSH_DOUBLE__BENNETT_GATE]: {
            yIndex: 2,
            xPosition: 3.9,
            scaleFactor: 0.92,
        },
    },
    [DOOR]: {
        [BENNETT_GATE_FRONT]: {
            yIndex: 2,
            xPosition: 7,
        },
    },
}
