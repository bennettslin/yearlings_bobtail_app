import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { DREAM_SHORE } from '../../../../../src/constants/scene/things/backdrops'
import { BENNETT_ODIN_SHORE } from '../../../../../src/constants/scene/things/cardboards'
import { YELLOW_TAPED_GRILL } from '../../../../../src/constants/scene/things/cutouts'
import {
    FERRIS_WHEEL,
    ROLLER_COASTER,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [BACKDROP]: {
        [DREAM_SHORE]: {
            yIndex: 1,
            xPosition: 6.9,
            zOffset: 0.05,
        },
    },
    [CARDBOARD]: {
        [BENNETT_ODIN_SHORE]: {
            yIndex: 1,
            xPosition: 7.27,
            zOffset: -0.05,
        },
    },
    [CUTOUT]: {
        [YELLOW_TAPED_GRILL]: {
            yIndex: 5,
            xPosition: 9.75,
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
