import {
    CUTOUT,
    DOOR,
    FIXTURE,
    PUPPET,
} from '../../../../../src/constants/scene/things'
import {
    CHUTE_GARBAGE,
    CHUTE_RECYCLING,
    DUMPSTER,
} from '../../../../../src/constants/scene/things/cutouts'
import { LOADING_DOCK_DOOR } from '../../../../../src/constants/scene/things/doors'
import { BALLED_FOIL__ALLEY, THROWN_FRUIT__ALLEY } from '../../../../../src/constants/scene/things/fixtures'
import { GHOST_ODIN_ALLEY } from '../../../../../src/constants/scene/things/puppets'

export default {
    [CUTOUT]: {
        [DUMPSTER]: {
            yIndex: 2,
            xPosition: 9,
        },
        [CHUTE_GARBAGE]: {
            yIndex: 2,
            xPosition: 9.95,
            zOffset: 4.5,
        },
        [CHUTE_RECYCLING]: {
            yIndex: 2,
            xPosition: 8.05,
            zOffset: 4.5,
        },
    },
    [DOOR]: {
        [LOADING_DOCK_DOOR]: {
            yIndex: 2,
            xPosition: 3.5,
        },
    },
    [FIXTURE]: {
        [BALLED_FOIL__ALLEY]: {
            yIndex: 4,
            zOffset: 2.5,
        },
        [THROWN_FRUIT__ALLEY]: {
            yIndex: 3,
            xPosition: 7,
            zOffset: -0.05,
        },
    },
    [PUPPET]: {
        [GHOST_ODIN_ALLEY]: {
            yIndex: 5,
            xPosition: 8,
        },
    },
}
