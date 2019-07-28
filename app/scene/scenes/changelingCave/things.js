import {
    CUTOUT,
    FLAT,
    PANEL
} from 'constants/scene'
import { CAMPFIRE } from 'constants/scene/things/cutouts'
import { FAMILY_HOUSE } from 'constants/scene/things/flats'
import {
    CAVE_SHADOWS,
    STALACTITES,
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    TROLL_SHADOW_FAR
} from 'constants/scene/things/panels'
import { SHADOW_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [CAMPFIRE]: {
            yIndex: 4,
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
            scaleFactor: 0.7,
            sharedStyle: SHADOW_SHARED
        },
        [STALACTITES]: {
            yIndex: 5,
            xPosition: 2,
            zOffset: 6,
            scaleFactor: 0.35,
            sharedStyle: SHADOW_SHARED
        },
        [TROLL_SHADOW_LEFT]: {
            yIndex: 5,
            xPosition: -0.5,
            scaleFactor: 0.35,
            alignLeft: true,
            sharedStyle: SHADOW_SHARED
        },
        [TROLL_SHADOW_RIGHT]: {
            yIndex: 5,
            xPosition: 11.5,
            scaleFactor: 0.35,
            alignRight: true,
            sharedStyle: SHADOW_SHARED
        },
        [TROLL_SHADOW_FAR]: {
            yIndex: 4,
            xPosition: 11.625,
            zOffset: -0.25,
            scaleFactor: 0.35,
            alignRight: true,
            sharedStyle: SHADOW_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
