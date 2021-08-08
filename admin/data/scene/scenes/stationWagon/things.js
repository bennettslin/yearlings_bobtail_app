import {
    BUBBLE,
    FIXTURE,
    FLAT,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    CONSTELLATION_TARPIT,
    CONSTELLATION_SIBLING,
} from '../../../../../src/constants/scene/things/bubbles'
import { EVIAN_BOTTLES } from '../../../../../src/constants/scene/things/fixtures'
import { DRIVING_HOUSE__SINGLE } from '../../../../../src/constants/scene/things/flats'
import {
    SATURN_INTERIOR,
    SATURN_EXTERIOR,
    SATURN_SEAT,
    SATURN_SEAT_DOWN,
} from '../../../../../src/constants/scene/things/panels'

export default {
    [BUBBLE]: {
        [CONSTELLATION_TARPIT]: {
            yIndex: 1,
            xPosition: 2.2,
            zOffset: 4.6,
        },
        [CONSTELLATION_SIBLING]: {
            yIndex: 1,
            xPosition: 9.5,
            zOffset: 4.5,
        },
    },
    [FIXTURE]: {
        [EVIAN_BOTTLES]: {
            yIndex: 3,
            xPosition: 1.2,
        },
    },
    [FLAT]: {
        [DRIVING_HOUSE__SINGLE]: {
            yIndex: 1,
            xPosition: 6.5,
        },
    },
    [PANEL]: {
        [SATURN_INTERIOR]: {
            yIndex: 1,
            xPosition: 5.3,
        },
        [SATURN_SEAT]: {
            yIndex: 4,
            xPosition: 2.8,
            zOffset: 0.8,
        },
        [SATURN_SEAT_DOWN]: {
            yIndex: 4,
            xPosition: 5.39,
            zOffset: 0.8,
        },
        [SATURN_EXTERIOR]: {
            yIndex: 4,
            xPosition: 5.3,
        },
    },
}
