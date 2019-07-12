import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    FLAT
} from 'constants/scene'
import { SHORE_BUOY_BACKDROP } from 'constants/scene/things/backdrops'
import { BENNETT_ODIN_BUOY } from 'constants/scene/things/cardboards'
import { YELLOW_TAPED_GRILL } from 'constants/scene/things/cutouts'
import {
    FERRIS_WHEEL,
    ROLLER_COASTER
} from 'constants/scene/things/flats'
import { BENNETT_ODIN } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [SHORE_BUOY_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CARDBOARD]: {
        [BENNETT_ODIN_BUOY]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.2,
            style: BENNETT_ODIN
        }
    },
    [CUTOUT]: {
        [YELLOW_TAPED_GRILL]: {
            yIndex: 4,
            xPosition: 7,
            scaleFactor: 0.3
        }
    },
    [FLAT]: {
        [FERRIS_WHEEL]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2,
                xWidth: 5,
                zHeight: 3
            }
        },
        [ROLLER_COASTER]: {
            yIndex: 1,
            xPosition: 2,
            scaleFactor: 0.4
        }
    }
}

export default ARRANGEMENTS_THINGS
