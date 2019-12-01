import {
    CUTOUT,
    DOOR,
    FIXTURE
} from '../../../constants/scene/things'
import {
    CACTUS_DOUBLE__PORCH,
    CACTUS_SINGLE__PORCH
} from '../../../constants/scene/things/cutouts'
import { PORCH_DOOR } from '../../../constants/scene/things/doors'
import { HAIRCUT_SCISSORS } from '../../../constants/scene/things/fixtures'
import { DOOR__SHARED } from '../../shared/home'
import { SCISSORS__SHARED } from '../../shared/household'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [CACTUS_DOUBLE__PORCH]: {
            yIndex: 2,
            xPosition: 1.25,
            scaleFactor: 0.3
        },
        [CACTUS_SINGLE__PORCH]: {
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
