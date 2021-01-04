import {
    CUTOUT,
    DOOR,
} from '../../../../../app/constants/scene/things'
import {
    RECYCLING_BIN__BENNETT,
    BUSH_SINGLE__COURTYARD,
    BUSH_DOUBLE__COURTYARD,
} from '../../../../../app/constants/scene/things/cutouts'
import {
    BLINDS_OUTSIDE__BENNETT,
    BENNETT_DOOR_OUTSIDE,
    BENNETT_GATE_SIDE,
} from '../../../../../app/constants/scene/things/doors'

export default {
    [CUTOUT]: {
        [RECYCLING_BIN__BENNETT]: {
            yIndex: 2,
            xPosition: 5,
            scaleFactor: 0.35,
        },
        [BUSH_SINGLE__COURTYARD]: {
            yIndex: 2,
            xPosition: 10.5,
            scaleFactor: 0.3,
        },
        [BUSH_DOUBLE__COURTYARD]: {
            yIndex: 2,
            xPosition: 2.25,
            scaleFactor: 0.25,
        },
    },
    [DOOR]: {
        [BLINDS_OUTSIDE__BENNETT]: {
            yIndex: 2,
            xPosition: 3.5,
            zOffset: 2.25,
        },
        [BENNETT_DOOR_OUTSIDE]: {
            yIndex: 2,
            xPosition: 8,
        },
        [BENNETT_GATE_SIDE]: {
            yIndex: 5,
            xPosition: 0.85,
        },
    },
}
