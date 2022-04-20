import {
    BUBBLE,
    CUTOUT,
    DOOR,
    FLAT,
} from '../../../../../src/constants/scene/things'
import {
    BUBBLE_SMALL__GO_KART,
    BUBBLE_MEDIUM__GO_KART,
    BUBBLE_LARGE__GO_KART,
    THOUGHT_GO_KART,
} from '../../../../../src/constants/scene/things/bubbles'
import {
    CACTUS_SINGLE__LIZ_ENDING,
    CACTUS_SINGLE__LIZ_ENDED,
    CACTUS_DOUBLE__LIZ_GATE,
    LAMPPOST__LIZ_GATE,
    TRAFFIC_LIGHT_FRONT,
    CYPRESS_DOUBLE__LIZ_GATE,
    CYPRESS_SINGLE__LIZ_ENDED,
    CYPRESS_SINGLE__LIZ_ENDING,
} from '../../../../../src/constants/scene/things/cutouts'
import {
    LIZ_BLINDS_OUTSIDE__ENDING,
    LIZ_BLINDS_OUTSIDE__ENDED,
    LIZ_GATE_OUTSIDE,
    LIZ_GATE_OUTSIDE_OPEN,
} from '../../../../../src/constants/scene/things/doors'
import {
    PUBLIC_FAR__LIZ_GATE,
    PUBLIC_NEAR__LIZ_GATE,
} from '../../../../../src/constants/scene/things/flats'
import {
    BUBBLE_LARGE_CONFIG,
    BUBBLE_MEDIUM_CONFIG,
    BUBBLE_SMALL_CONFIG,
} from '../../sharedConfigs'

export const THINGS_LIZ_GATE_DATE_ENDED = {
    [BUBBLE]: {
        [BUBBLE_LARGE__GO_KART]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 6.70,
            zOffset: 5.65,
        },
        [BUBBLE_MEDIUM__GO_KART]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 7.4,
            zOffset: 5.44,
        },
        [BUBBLE_SMALL__GO_KART]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 7.39,
            zOffset: 5.16,
        },
        [THOUGHT_GO_KART]: {
            yIndex: 5,
            xPosition: 4.8,
            zOffset: 4.3,
        },
    },
    [CUTOUT]: {
        [CYPRESS_DOUBLE__LIZ_GATE]: {
            yIndex: 2,
            xPosition: 0.5,
        },
        [CYPRESS_SINGLE__LIZ_ENDED]: {
            yIndex: 2,
            xPosition: 7.5,
        },
        [CYPRESS_SINGLE__LIZ_ENDING]: {
            yIndex: 2,
            xPosition: 10.5,
        },
        [CACTUS_SINGLE__LIZ_ENDING]: {
            yIndex: 4,
            xPosition: 10,
        },
        [CACTUS_DOUBLE__LIZ_GATE]: {
            yIndex: 4,
            xPosition: 1.5,
            flipHorizontal: true,
        },
        [CACTUS_SINGLE__LIZ_ENDED]: {
            yIndex: 4,
            xPosition: 7,
        },
        [LAMPPOST__LIZ_GATE]: {
            yIndex: 3,
            xPosition: 11,
            scaleFactor: 0.5,
        },
        [TRAFFIC_LIGHT_FRONT]: {
            yIndex: 5,
            xPosition: 8.5,
        },
    },
    [DOOR]: {
        [LIZ_BLINDS_OUTSIDE__ENDING]: {
            yIndex: 2,
            xPosition: 6,
            zOffset: 1.75,
        },
        [LIZ_BLINDS_OUTSIDE__ENDED]: {
            yIndex: 2,
            xPosition: 3,
            zOffset: 1.75,
        },
        [LIZ_GATE_OUTSIDE]: {
            yIndex: 4,
            xPosition: 6,
            zOffset: 0.09,
        },
        [LIZ_GATE_OUTSIDE_OPEN]: {
            yIndex: 4,
            xPosition: 3.3,
            zOffset: -0.07,
        },
    },
    [FLAT]: {
        [PUBLIC_FAR__LIZ_GATE]: {
            yIndex: 1,
            xPosition: 10.95,
            flipHorizontal: true,
        },
        [PUBLIC_NEAR__LIZ_GATE]: {
            yIndex: 2,
            xPosition: 12,
            flipHorizontal: true,
        },
    },
}
