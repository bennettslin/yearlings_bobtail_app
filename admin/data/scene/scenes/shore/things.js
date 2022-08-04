import {
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { DREAM_SHORE } from '../../../../../src/constants/scene/things/bubbles'
import { BENNETT_ODIN_BUOY } from '../../../../../src/constants/scene/things/cardboards'
import { YELLOW_TAPED_GRILL } from '../../../../../src/constants/scene/things/cutouts'
import {
    FERRIS_WHEEL,
    ROLLER_COASTER,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [BUBBLE]: {
        [DREAM_SHORE]: {
            yIndex: 5,
            xPosition: 5.5,
        },
    },
    [CARDBOARD]: {
        [BENNETT_ODIN_BUOY]: {
            yIndex: 1,
            xPosition: 8,
            scaleFactor: 0.6,
        },
    },
    [CUTOUT]: {
        [YELLOW_TAPED_GRILL]: {
            yIndex: 5,
            xPosition: 9.5,
        },
    },
    [FLAT]: {
        [FERRIS_WHEEL]: {
            yIndex: 2,
            xPosition: 2,
        },
        [ROLLER_COASTER]: {
            yIndex: 1,
            xPosition: 1.1,
        },
    },
}
