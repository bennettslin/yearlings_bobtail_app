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
import { TRAFFIC_LIGHT } from '../../../constants/scene/things/cutouts'
import {
    BLINDS_OUTSIDE__LIZ_ENDING,
    BLINDS_OUTSIDE__LIZ_ENDED,
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
        [TRAFFIC_LIGHT]: {
            yIndex: 5,
            xPosition: 9.5,
            scaleFactor: 0.3
        }
    },
    [DOOR]: {
        [BLINDS_OUTSIDE__LIZ_ENDING]: {
            yIndex: 2,
            xPosition: 6,
            scaleFactor: 0.575,
            zOffset: 2.5,
            sharedStyle: WINDOW__SHARED
        },
        [BLINDS_OUTSIDE__LIZ_ENDED]: {
            yIndex: 2,
            xPosition: 3,
            scaleFactor: 0.575,
            zOffset: 2.5,
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
