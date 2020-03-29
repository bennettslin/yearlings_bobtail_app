import {
    BUBBLE,
    FIXTURE,
    FLAT,
    PANEL
} from '../../../constants/scene/things'
import {
    TARPIT_CONSTELLATION,
    SIBLING_CONSTELLATION
} from '../../../constants/scene/things/bubbles'
import { EVIAN_BOTTLES } from '../../../constants/scene/things/fixtures'
import { DRIVING_HOUSE__SINGLE } from '../../../constants/scene/things/flats'
import {
    SATURN_INTERIOR,
    SATURN_EXTERIOR,
    SATURN_SEAT,
    SATURN_SEAT_DOWN
} from '../../../constants/scene/things/panels'

export default {
    [BUBBLE]: {
        [TARPIT_CONSTELLATION]: {
            yIndex: 5,
            xPosition: 2.7,
            zOffset: 4.8,
            scaleFactor: 0.35
        },
        [SIBLING_CONSTELLATION]: {
            yIndex: 1,
            xPosition: 9.5,
            zOffset: 4.5,
            scaleFactor: 0.4
        }
    },
    [FIXTURE]: {
        [EVIAN_BOTTLES]: {
            yIndex: 3,
            xPosition: 1.2
        }
    },
    [FLAT]: {
        [DRIVING_HOUSE__SINGLE]: {
            yIndex: 1,
            xPosition: 6.5,
            scaleFactor: 0.6
        }
    },
    [PANEL]: {
        [SATURN_INTERIOR]: {
            yIndex: 1,
            xPosition: 5.7,
            scaleFactor: 0.5
        },
        [SATURN_SEAT]: {
            yIndex: 4,
            xPosition: 2.8,
            zOffset: 0.8,
            scaleFactor: 0.4
        },
        [SATURN_SEAT_DOWN]: {
            yIndex: 4,
            xPosition: 5.8,
            zOffset: 0.8,
            scaleFactor: 0.4
        },
        [SATURN_EXTERIOR]: {
            yIndex: 4,
            xPosition: 5.7,
            scaleFactor: 0.5
        }
    }
}
