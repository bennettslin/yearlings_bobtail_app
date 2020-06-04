import {
    CUTOUT,
    FLAT,
    PANEL
} from '../../../../../app/constants/scene/things'
import { CAMPFIRE } from '../../../../../app/constants/scene/things/cutouts'
import { FAMILY_HOUSE } from '../../../../../app/constants/scene/things/flats'
import {
    CAVE_SHADOWS,
    STALACTITES,
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    TROLL_SHADOW_FAR
} from '../../../../../app/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [CAMPFIRE]: {
            yIndex: 5,
            xPosition: 2.5,
            scaleFactor: 0.25
        }
    },
    [FLAT]: {
        [FAMILY_HOUSE]: {
            yIndex: 0,
            xPosition: 1.5,
            scaleFactor: 0.6
        }
    },
    [PANEL]: {
        [CAVE_SHADOWS]: {
            yIndex: 1,
            xPosition: 6,
            scaleFactor: 0.7
        },
        [STALACTITES]: {
            yIndex: 5,
            xPosition: 2,
            zOffset: 6,
            scaleFactor: 0.35
        },
        [TROLL_SHADOW_LEFT]: {
            yIndex: 5,
            xPosition: 1,
            scaleFactor: 0.35
        },
        [TROLL_SHADOW_RIGHT]: {
            yIndex: 5,
            xPosition: 9.3,
            scaleFactor: 0.35
        },
        [TROLL_SHADOW_FAR]: {
            yIndex: 4,
            xPosition: 10,
            scaleFactor: 0.35
        }
    }
}
