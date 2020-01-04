import {
    CARDBOARD,
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import { BENNETT_ODIN_BUOY } from '../../../constants/scene/things/cardboards'
import { YELLOW_TAPED_GRILL } from '../../../constants/scene/things/cutouts'
import {
    FERRIS_WHEEL,
    ROLLER_COASTER
} from '../../../constants/scene/things/flats'

export default {
    [CARDBOARD]: {
        [BENNETT_ODIN_BUOY]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.2
        }
    },
    [CUTOUT]: {
        [YELLOW_TAPED_GRILL]: {
            yIndex: 5,
            xPosition: 9.5,
            scaleFactor: 0.3
        }
    },
    [FLAT]: {
        [FERRIS_WHEEL]: {
            yIndex: 2,
            xPosition: 2,
            scaleFactor: 0.5
        },
        [ROLLER_COASTER]: {
            yIndex: 1,
            xPosition: 1.1,
            scaleFactor: 0.5
        }
    }
}
