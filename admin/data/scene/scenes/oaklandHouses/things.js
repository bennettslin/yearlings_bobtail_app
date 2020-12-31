import {
    BACKDROP,
    BUBBLE,
    FLAT,
    PANEL,
} from '../../../../../app/constants/scene/things'
import { THOUGHT_MEDIUM__GOLDEN } from '../../../../../app/constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__GOLDEN,
    BUBBLE_MEDIUM__GOLDEN,
    BUBBLE_LARGE__GOLDEN,
} from '../../../../../app/constants/scene/things/bubbles'
import {
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT,
} from '../../../../../app/constants/scene/things/flats'
import { VOLKSWAGEN } from '../../../../../app/constants/scene/things/panels'

export default {
    [FLAT]: {
        [OAKLAND_HOUSE_LEFT]: {
            yIndex: 1,
            xPosition: 2.25,
            scaleFactor: 0.5,
        },
        [OAKLAND_HOUSE_RIGHT]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.5,
        },
    },
}

export const THINGS_OAKLAND_HOUSES_GARRYOWEN = {
    [PANEL]: {
        [VOLKSWAGEN]: {
            yIndex: 3,
            xPosition: 7.5,
            scaleFactor: 0.45,
        },
    },
}

export const THINGS_OAKLAND_HOUSES_GOLDEN = {
    [BACKDROP]: {
        [THOUGHT_MEDIUM__GOLDEN]: {
            yIndex: 2,
            xPosition: 3.25,
            scaleFactor: 0.55,
        },
    },
    [BUBBLE]: {
        [BUBBLE_SMALL__GOLDEN]: {
            yIndex: 2,
            xPosition: 2.19,
            zOffset: 7.3,
        },
        [BUBBLE_MEDIUM__GOLDEN]: {
            yIndex: 2,
            xPosition: 1.65,
            zOffset: 7.3,
        },
        [BUBBLE_LARGE__GOLDEN]: {
            yIndex: 2,
            xPosition: 0.75,
            zOffset: 6.63,
        },
    },
}
