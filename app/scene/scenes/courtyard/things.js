import {
    BACKDROP,
    CUTOUT,
    DOOR
} from '../../../constants/scene/things'
import { BRICK_WALL__COURTYARD } from '../../../constants/scene/things/backdrops'
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
    [BACKDROP]: {
        [BRICK_WALL__COURTYARD]: {
            yIndex: 0,
            xPosition: 17.5,
            scaleFactor: 0.66,
            trimBottom: 0.05
        }
    },
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
            zOffset: 2.25,
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
