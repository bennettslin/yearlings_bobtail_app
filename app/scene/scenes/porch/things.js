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
            xPosition: 6
        }
    },
    [FIXTURE]: {
        [HAIRCUT_SCISSORS]: {
            yIndex: 4,
            xPosition: 5,
            zOffset: -0.15
        }
    }
}

export default ARRANGEMENTS_THINGS
