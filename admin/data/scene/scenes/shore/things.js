import {
    CARDBOARD,
    CUTOUT,
    FLAT,
} from '../../../../../app/constants/scene/things'
import { BENNETT_ODIN_BUOY } from '../../../../../app/constants/scene/things/cardboards'
import { YELLOW_TAPED_GRILL } from '../../../../../app/constants/scene/things/cutouts'
import {
    FERRIS_WHEEL,
    ROLLER_COASTER,
} from '../../../../../app/constants/scene/things/flats'

export default {
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
