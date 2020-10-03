import {
    BUBBLE,
    CUTOUT,
    DOOR,
    FLAT
} from '../../../../../app/constants/scene/things'
import {
    BUBBLE_SMALL__GO_KART,
    BUBBLE_MEDIUM__GO_KART,
    BUBBLE_LARGE__GO_KART,
    THOUGHT_GO_KART
} from '../../../../../app/constants/scene/things/bubbles'
import {
    CYPRESS_TREE,
    CACTUS_SINGLE__LIZ_ENDING,
    CACTUS_SINGLE__LIZ_ENDED,
    CACTUS_DOUBLE__LIZ_GATE,
    LAMPPOST__LIZ_GATE,
    TRAFFIC_LIGHT
} from '../../../../../app/constants/scene/things/cutouts'
import {
    LIZ_BLINDS_OUTSIDE__ENDING,
    LIZ_BLINDS_OUTSIDE__ENDED,
    LIZ_GATE_OUTSIDE,
    LIZ_GATE_OUTSIDE_OPEN
} from '../../../../../app/constants/scene/things/doors'
import {
    PUBLIC_FAR__LIZ_GATE,
    PUBLIC_NEAR__LIZ_GATE
} from '../../../../../app/constants/scene/things/flats'

export const THINGS_LIZ_GATE_DATE_ENDED = {
    [BUBBLE]: {
        [BUBBLE_LARGE__GO_KART]: {
            yIndex: 5,
            xPosition: 6.9,
            zOffset: 5.4,
            scaleFactor: 0.3
        },
        [BUBBLE_MEDIUM__GO_KART]: {
            yIndex: 5,
            xPosition: 7.68,
            zOffset: 5.45,
            scaleFactor: 0.3
        },
        [BUBBLE_SMALL__GO_KART]: {
            yIndex: 5,
            xPosition: 8.1,
            zOffset: 5.4,
            scaleFactor: 0.3
        },
        [THOUGHT_GO_KART]: {
            yIndex: 5,
            xPosition: 5,
            zOffset: 4
        }
    },
    [CUTOUT]: {
        [CYPRESS_TREE]: {
            yIndex: 2,
            xPosition: 1.5,
            scaleFactor: 0.6
        },
        [CACTUS_SINGLE__LIZ_ENDING]: {
            yIndex: 4,
            xPosition: 10.2,
            scaleFactor: 0.3
        },
        [CACTUS_DOUBLE__LIZ_GATE]: {
            yIndex: 4,
            xPosition: 2.5,
            scaleFactor: 0.3,
            flipHorizontal: true
        },
        [CACTUS_SINGLE__LIZ_ENDED]: {
            yIndex: 4,
            xPosition: 6.2,
            scaleFactor: 0.3
        },
        [LAMPPOST__LIZ_GATE]: {
            yIndex: 3,
            xPosition: 11,
            scaleFactor: 0.15
        },
        [TRAFFIC_LIGHT]: {
            yIndex: 4,
            xPosition: 7.5,
            scaleFactor: 0.3
        }
    },
    [DOOR]: {
        [LIZ_BLINDS_OUTSIDE__ENDING]: {
            yIndex: 2,
            xPosition: 7,
            zOffset: 2.25
        },
        [LIZ_BLINDS_OUTSIDE__ENDED]: {
            yIndex: 2,
            xPosition: 3,
            zOffset: 2.25
        },
        [LIZ_GATE_OUTSIDE]: {
            yIndex: 4,
            xPosition: 7
        },
        [LIZ_GATE_OUTSIDE_OPEN]: {
            yIndex: 4,
            xPosition: 3.3,
            zOffset: -0.07
        }
    },
    [FLAT]: {
        [PUBLIC_FAR__LIZ_GATE]: {
            yIndex: 1,
            xPosition: 9.75,
            scaleFactor: 0.4,
            flipHorizontal: true
        },
        [PUBLIC_NEAR__LIZ_GATE]: {
            yIndex: 2,
            xPosition: 11,
            scaleFactor: 0.5,
            flipHorizontal: true
        }
    }
}
