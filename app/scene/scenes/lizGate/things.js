import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    DOOR,
    FLAT
} from '../../../constants/scene/things'
import { OAKLAND_FRONT__LIZ_GATE } from '../../../constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__GO_KART,
    BUBBLE_MEDIUM__GO_KART,
    GO_KART_THOUGHT
} from '../../../constants/scene/things/bubbles'
import {
    CYPRESS_TREE,
    CACTUS_SINGLE__LIZ_ENDING,
    CACTUS_SINGLE__LIZ_ENDED,
    CACTUS_DOUBLE__LIZ_GATE,
    TRAFFIC_LIGHT
} from '../../../constants/scene/things/cutouts'
import {
    LIZ_BLINDS_OUTSIDE__ENDING,
    LIZ_BLINDS_OUTSIDE__ENDED,
    LIZ_GATE_OUTSIDE__ENDING,
    LIZ_GATE_OUTSIDE__ENDED
} from '../../../constants/scene/things/doors'
import {
    PUBLIC_FAR__LIZ_GATE,
    PUBLIC_NEAR__LIZ_GATE
} from '../../../constants/scene/things/flats'
import { OAKLAND_HOUSE__SHARED } from '../../sharedStyles/buildings'
import {
    LIZ_GATE__SHARED,
    WINDOW__SHARED
} from '../../sharedStyles/home'

export const THINGS_LIZ_GATE_DATE_ENDED = {
    [BACKDROP]: {
        [OAKLAND_FRONT__LIZ_GATE]: {
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.3
        }
    },
    [BUBBLE]: {
        [BUBBLE_SMALL__GO_KART]: {
            yIndex: 5,
            xPosition: 7.5,
            zOffset: 4,
            scaleFactor: 0.4
        },
        [BUBBLE_MEDIUM__GO_KART]: {
            yIndex: 5,
            xPosition: 7,
            zOffset: 3.75,
            scaleFactor: 0.4
        },
        [GO_KART_THOUGHT]: {
            yIndex: 5,
            xPosition: 6,
            zOffset: 4,
            scaleFactor: 0.4
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
            xPosition: 10.5,
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
            xPosition: 6.5,
            scaleFactor: 0.3
        },
        [TRAFFIC_LIGHT]: {
            yIndex: 5,
            xPosition: 7.5,
            scaleFactor: 0.3
        }
    },
    [DOOR]: {
        [LIZ_BLINDS_OUTSIDE__ENDING]: {
            yIndex: 2,
            xPosition: 7,
            zOffset: 2.25,
            sharedStyle: WINDOW__SHARED
        },
        [LIZ_BLINDS_OUTSIDE__ENDED]: {
            yIndex: 2,
            xPosition: 3,
            zOffset: 2.25,
            sharedStyle: WINDOW__SHARED
        },
        [LIZ_GATE_OUTSIDE__ENDING]: {
            yIndex: 4,
            xPosition: 7,
            sharedStyle: LIZ_GATE__SHARED
        },
        [LIZ_GATE_OUTSIDE__ENDED]: {
            yIndex: 4,
            xPosition: 3,
            sharedStyle: LIZ_GATE__SHARED
        }
    },
    [FLAT]: {
        [PUBLIC_FAR__LIZ_GATE]: {
            yIndex: 1,
            xPosition: 9.5,
            scaleFactor: 0.4,
            flipHorizontal: true,
            sharedStyle: OAKLAND_HOUSE__SHARED
        },
        [PUBLIC_NEAR__LIZ_GATE]: {
            yIndex: 3,
            xPosition: 11,
            scaleFactor: 0.5,
            flipHorizontal: true,
            sharedStyle: OAKLAND_HOUSE__SHARED
        }
    }
}
