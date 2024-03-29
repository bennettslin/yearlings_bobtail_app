import {
    CUTOUT,
    DOOR,
    FIXTURE,
} from '../../../../../src/constants/scene/things'
import {
    PEACH_TREE,
    ROSEBUSH_DOUBLE_BASEMENT,
    ROSEBUSH_SINGLE_BASEMENT,
} from '../../../../../src/constants/scene/things/cutouts'
import { BASEMENT_DOOR } from '../../../../../src/constants/scene/things/doors'
import {
    BUDWEISER_EMPTIER__MIRIAM,
    BUDWEISER_FULLER__MIRIAM,
    CRACKED_PICTURE,
    GHOST_SHACKLES,
} from '../../../../../src/constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [PEACH_TREE]: {
            yIndex: 0,
            xPosition: 4.5,
        },
        [ROSEBUSH_DOUBLE_BASEMENT]: {
            yIndex: 0,
            xPosition: 9.5,
        },
        [ROSEBUSH_SINGLE_BASEMENT]: {
            yIndex: 0,
            xPosition: 0.5,
        },
    },
    [DOOR]: {
        [BASEMENT_DOOR]: {
            yIndex: 2,
            xPosition: 2.5,
            zOffset: 0.5,
        },
    },
    [FIXTURE]: {
        [BUDWEISER_EMPTIER__MIRIAM]: {
            yIndex: 5,
            xPosition: 2.1,
        },
        [BUDWEISER_FULLER__MIRIAM]: {
            yIndex: 5,
            xPosition: 0.7,
        },
        [CRACKED_PICTURE]: {
            yIndex: 4,
            xPosition: 0.2,
            zOffset: 2.7,
        },
        [GHOST_SHACKLES]: {
            yIndex: 4,
            xPosition: 6.2,
            zOffset: 2.8,
        },
    },
}
