import {
    CUTOUT,
    DOOR,
    FIXTURE
} from '../../../../../app/constants/scene/things'
import {
    CACTUS_DOUBLE__PORCH,
    CACTUS_SINGLE__PORCH
} from '../../../../../app/constants/scene/things/cutouts'
import { PORCH_DOOR } from '../../../../../app/constants/scene/things/doors'
import { HAIRCUT_SCISSORS } from '../../../../../app/constants/scene/things/fixtures'

export default {
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
