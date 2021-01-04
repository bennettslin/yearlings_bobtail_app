import {
    CARDBOARD,
    CUTOUT,
    DOOR,
} from '../../../../../app/constants/scene/things'
import { EL_TORITO_SIGN } from '../../../../../app/constants/scene/things/cardboards'
import {
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    HOSTESS_STAND,
} from '../../../../../app/constants/scene/things/cutouts'
import { EL_TORITO_DOORS } from '../../../../../app/constants/scene/things/doors'

export default {
    [CARDBOARD]: {
        [EL_TORITO_SIGN]: {
            yIndex: 2,
            xPosition: 5.675,
            zOffset: -0.035,
        },
    },
    [CUTOUT]: {
        [DISPENSER_LEFT]: {
            yIndex: 5,
            xPosition: 1,
            scaleFactor: 0.3,
        },
        [DISPENSER_RIGHT]: {
            yIndex: 5,
            xPosition: 10,
            scaleFactor: 0.3,
        },
        [HOSTESS_STAND]: {
            yIndex: 1,
            xPosition: 5.3,
        },
    },
    [DOOR]: {
        [EL_TORITO_DOORS]: {
            yIndex: 2,
            xPosition: 5.675,
            zOffset: -0.035,
        },
    },
}
