import {
    CUTOUT,
    DOOR,
    FIXTURE
} from '../../../constants/scene'
import {
    PORCH_PLANT__LEFT,
    PORCH_PLANT__RIGHT
} from '../../../constants/scene/things/cutouts'
import { PORCH_DOOR } from '../../../constants/scene/things/doors'
import { HAIRCUT_SCISSORS } from '../../../constants/scene/things/fixtures'
import {
    DOOR__SHARED,
    SCISSORS__SHARED
} from '../../shared'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [PORCH_PLANT__LEFT]: {
            yIndex: 1,
            xPosition: 1.5,
            scaleFactor: 0.3
        },
        [PORCH_PLANT__RIGHT]: {
            yIndex: 1,
            xPosition: 10.5,
            scaleFactor: 0.3
        }
    },
    [DOOR]: {
        [PORCH_DOOR]: {
            yIndex: 1,
            xPosition: 6,
            sharedStyle: DOOR__SHARED
        }
    },
    [FIXTURE]: {
        [HAIRCUT_SCISSORS]: {
            yIndex: 3,
            xPosition: 5,
            sharedStyle: SCISSORS__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
