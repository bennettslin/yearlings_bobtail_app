import {
    CUTOUT,
    DOOR,
    FIXTURE
} from '../../../constants/scene/things'
import {
    BUSH_SINGLE__PORCH_LEFT,
    BUSH_SINGLE__PORCH_RIGHT
} from '../../../constants/scene/things/cutouts'
import { PORCH_DOOR } from '../../../constants/scene/things/doors'
import { HAIRCUT_SCISSORS } from '../../../constants/scene/things/fixtures'
import { DOOR__SHARED } from '../../shared/home'
import { SCISSORS__SHARED } from '../../shared/household'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [BUSH_SINGLE__PORCH_LEFT]: {
            yIndex: 2,
            xPosition: 1.5,
            scaleFactor: 0.3
        },
        [BUSH_SINGLE__PORCH_RIGHT]: {
            yIndex: 2,
            xPosition: 10.5,
            scaleFactor: 0.3
        }
    },
    [DOOR]: {
        [PORCH_DOOR]: {
            yIndex: 2,
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
