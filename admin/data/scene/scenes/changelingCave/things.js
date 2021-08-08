import {
    CUTOUT,
    FLAT,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { CAMPFIRE } from '../../../../../src/constants/scene/things/cutouts'
import { FAMILY_HOUSE } from '../../../../../src/constants/scene/things/flats'
import {
    CAVE_SHADOWS,
    STALACTITES,
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    TROLL_SHADOW_FAR,
} from '../../../../../src/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [CAMPFIRE]: {
            yIndex: 5,
            xPosition: 2.5,
        },
    },
    [FLAT]: {
        [FAMILY_HOUSE]: {
            yIndex: 1,
            xPosition: 1.8,
        },
    },
    [PANEL]: {
        [CAVE_SHADOWS]: {
            yIndex: 2,
            xPosition: 5.9,
        },
        [STALACTITES]: {
            yIndex: 5,
            xPosition: 2,
            zOffset: 6,
        },
        [TROLL_SHADOW_LEFT]: {
            yIndex: 5,
            xPosition: 1,
        },
        [TROLL_SHADOW_RIGHT]: {
            yIndex: 5,
            xPosition: 9.9,
        },
        [TROLL_SHADOW_FAR]: {
            yIndex: 4,
            xPosition: 9.9,
        },
    },
}
