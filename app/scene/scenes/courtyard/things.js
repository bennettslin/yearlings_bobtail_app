import {
    CUTOUT,
    DOOR
} from '../../../constants/scene/things'
import {
    RECYCLABLES,
    BUSH_SINGLE__COURTYARD,
    BUSH_DOUBLE__COURTYARD
} from '../../../constants/scene/things/cutouts'
import {
    BLINDS_OUTSIDE__BENNETT,
    BENNETT_DOOR_OUTSIDE,
    BENNETT_GATE_SIDE
} from '../../../constants/scene/things/doors'
import {
    BENNETT_GATE__SHARED,
    DOOR__SHARED,
    WINDOW__SHARED
} from '../../shared/home'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [RECYCLABLES]: {
            yIndex: 2,
            xPosition: 5,
            scaleFactor: 0.4
        },
        [BUSH_SINGLE__COURTYARD]: {
            yIndex: 2,
            xPosition: 10.5,
            scaleFactor: 0.3
        },
        [BUSH_DOUBLE__COURTYARD]: {
            yIndex: 2,
            xPosition: 2.25,
            scaleFactor: 0.25
        }
    },
    [DOOR]: {
        [BLINDS_OUTSIDE__BENNETT]: {
            yIndex: 2,
            xPosition: 3.5,
            zOffset: 2.5,
            scaleFactor: 0.575,
            sharedStyle: WINDOW__SHARED
        },
        [BENNETT_DOOR_OUTSIDE]: {
            yIndex: 2,
            xPosition: 8,
            sharedStyle: DOOR__SHARED
        },
        [BENNETT_GATE_SIDE]: {
            yIndex: 5,
            xPosition: 0.85,
            sharedStyle: BENNETT_GATE__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
