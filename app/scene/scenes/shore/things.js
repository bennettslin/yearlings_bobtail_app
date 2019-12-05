import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import { SHORE_BUOY_BACKDROP } from '../../../constants/scene/things/backdrops'
import { BENNETT_ODIN_BUOY } from '../../../constants/scene/things/cardboards'
import { YELLOW_TAPED_GRILL } from '../../../constants/scene/things/cutouts'
import {
    FERRIS_WHEEL,
    ROLLER_COASTER
} from '../../../constants/scene/things/flats'
import { ODIN__SHARED } from '../../shared/animals'
import { BENNETT } from '../../../constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../shared/people'
import { TAIWAN_BUOY__SHARED } from '../../shared/taiwan'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [SHORE_BUOY_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.7
        }
    },
    [CARDBOARD]: {
        [BENNETT_ODIN_BUOY]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.2,
            sharedStyle: [
                ALL_PEOPLE__SHARED,
                BENNETT,
                ODIN__SHARED,
                TAIWAN_BUOY__SHARED
            ]
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
            scaleFactor: 0.4
        },
        [ROLLER_COASTER]: {
            yIndex: 1,
            xPosition: 2,
            scaleFactor: 0.4
        }
    }
}

export default ARRANGEMENTS_THINGS
