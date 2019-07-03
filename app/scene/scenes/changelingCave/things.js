import {
    CUTOUT,
    FLAT,
    PANEL
} from 'constants/scene'
import { CAMPFIRE } from 'constants/scene/things/cutouts'
import { FAMILY_HOUSE } from 'constants/scene/things/flats'
import {
    CAVE_SHADOWS,
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    STALACTITES
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [CAMPFIRE]: {
            yIndex: 4,
            xPosition: 4,
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
        [TROLL_SHADOW_LEFT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 1.5,
                xWidth: 3,
                zHeight: 2
            }
        },
        [TROLL_SHADOW_RIGHT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 9,
                xWidth: 4,
                zHeight: 4
            }
        },
        [STALACTITES]: {
            yIndex: 4,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 1.5,
                zOffset: 6.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
