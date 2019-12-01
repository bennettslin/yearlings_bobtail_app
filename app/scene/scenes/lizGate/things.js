import {
    BUBBLE,
    CUTOUT,
    DOOR
} from '../../../constants/scene/things'
import {
    BUBBLE_SMALL__GO_KART,
    BUBBLE_MEDIUM__GO_KART,
    GO_KART_THOUGHT
} from '../../../constants/scene/things/bubbles'
import {
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
    LIZ_GATE__SHARED,
    WINDOW__SHARED
} from '../../shared/home'
import { BUBBLE__SHARED } from '../../shared/props'

export const THINGS_LIZ_GATE_DATE_ENDED = {
    [BUBBLE]: {
        [BUBBLE_SMALL__GO_KART]: {
            yIndex: 5,
            xPosition: 7.5,
            zOffset: 4,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE__SHARED
        },
        [BUBBLE_MEDIUM__GO_KART]: {
            yIndex: 5,
            xPosition: 7,
            zOffset: 3.75,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE__SHARED
        },
        [GO_KART_THOUGHT]: {
            yIndex: 5,
            xPosition: 6,
            zOffset: 4,
            scaleFactor: 0.4
        }
    },
    [CUTOUT]: {
        [CACTUS_SINGLE__LIZ_ENDING]: {
            yIndex: 4,
            xPosition: 9.5,
            scaleFactor: 0.3
        },
        [CACTUS_DOUBLE__LIZ_GATE]: {
            yIndex: 4,
            xPosition: 1.5,
            scaleFactor: 0.3
        },
        [CACTUS_SINGLE__LIZ_ENDED]: {
            yIndex: 4,
            xPosition: 6.5,
            scaleFactor: 0.3
        },
        [TRAFFIC_LIGHT]: {
            yIndex: 5,
            xPosition: 9.5,
            scaleFactor: 0.3
        }
    },
    [DOOR]: {
        [LIZ_BLINDS_OUTSIDE__ENDING]: {
            yIndex: 2,
            xPosition: 6,
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
            xPosition: 6,
            sharedStyle: LIZ_GATE__SHARED
        },
        [LIZ_GATE_OUTSIDE__ENDED]: {
            yIndex: 4,
            xPosition: 3,
            sharedStyle: LIZ_GATE__SHARED
        }
    }
}
