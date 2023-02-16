import {
    CUTOUT,
    DOOR,
    FIXTURE,
} from '../../../../../src/constants/scene/things'
import {
    CACTUS_DOUBLE__PORCH,
    CACTUS_SINGLE__PORCH,
    RECYCLING_BIN__PORCH,
} from '../../../../../src/constants/scene/things/cutouts'
import { PORCH_DOOR } from '../../../../../src/constants/scene/things/doors'
import { HAIRCUT_SCISSORS } from '../../../../../src/constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [CACTUS_DOUBLE__PORCH]: {
            yIndex: 2,
            xPosition: 1.25,
        },
        [CACTUS_SINGLE__PORCH]: {
            yIndex: 2,
            xPosition: 10.5,
        },
        [RECYCLING_BIN__PORCH]: {
            yIndex: 3,
            xPosition: 1.5,
        },
    },
    [DOOR]: {
        [PORCH_DOOR]: {
            yIndex: 2,
            xPosition: 6,
        },
    },
    [FIXTURE]: {
        [HAIRCUT_SCISSORS]: {
            yIndex: 4,
            xPosition: 5,
            zOffset: -0.15,
        },
    },
}
