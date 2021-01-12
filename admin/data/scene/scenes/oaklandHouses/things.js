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
import {
    BUBBLE_LARGE_CONFIG,
    BUBBLE_MEDIUM_CONFIG,
    BUBBLE_SMALL_CONFIG,
} from '../../sharedConfigs'

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
        },
    },
}

export const THINGS_OAKLAND_HOUSES_GOLDEN = {
    [BACKDROP]: {
        [THOUGHT_MEDIUM__GOLDEN]: {
            yIndex: 2,
            xPosition: 3.25,
        },
    },
    [BUBBLE]: {
        [BUBBLE_LARGE__GOLDEN]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 1.2,
            zOffset: 5.63,
        },
        [BUBBLE_MEDIUM__GOLDEN]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 1.86,
            zOffset: 6.3,
        },
        [BUBBLE_SMALL__GOLDEN]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 2.31,
            zOffset: 6.3,
        },
    },
}
