import {
    CUTOUT,
    DOOR,
} from '../../../../../src/constants/scene/things'
import {
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    HOSTESS_STAND,
} from '../../../../../src/constants/scene/things/cutouts'
import { EL_TORITO_DOORS } from '../../../../../src/constants/scene/things/doors'

export default {
    [CUTOUT]: {
        [DISPENSER_LEFT]: {
            yIndex: 5,
            xPosition: 1,
        },
        [DISPENSER_RIGHT]: {
            yIndex: 5,
            xPosition: 10,
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
