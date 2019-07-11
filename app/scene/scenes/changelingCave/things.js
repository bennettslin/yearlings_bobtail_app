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

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [CAMPFIRE]: {
            yIndex: 4,
            xPosition: 3,
            scaleFactor: 0.25
        }
    },
    [FLAT]: {
        [FAMILY_HOUSE]: {
            yIndex: 0,
            arrangement: {
                xPosition: 1.5,
                xWidth: 3,
                zHeight: 2
            }
        }
    },
    [PANEL]: {
        [CAVE_SHADOWS]: {
            yIndex: 1,
            arrangement: {
                xPosition: 7,
                xWidth: 9,
                zHeight: 7
            }
        },
        [STALACTITES]: {
            yIndex: 5,
            xPosition: 2.5,
            zOffset: 6,
            scaleFactor: 0.35
        },
        [TROLL_SHADOW_LEFT]: {
            yIndex: 5,
            xPosition: -0.25,
            scaleFactor: 0.35,
            alignLeft: true
        },
        [TROLL_SHADOW_RIGHT]: {
            yIndex: 5,
            xPosition: 11.5,
            scaleFactor: 0.35,
            alignRight: true
        },
        [TROLL_SHADOW_FAR]: {
            yIndex: 4,
            xPosition: 11.5,
            scaleFactor: 0.35,
            alignRight: true
        }
    }
}

export default ARRANGEMENTS_THINGS
