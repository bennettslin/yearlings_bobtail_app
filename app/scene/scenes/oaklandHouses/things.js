import {
    BACKDROP,
    FLAT,
    PANEL
} from '../../../constants/scene/things'
import { OAKLAND_SIDE__CENTRED } from '../../../constants/scene/things/backdrops'
import {
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT
} from '../../../constants/scene/things/flats'
import { VOLKSWAGEN } from '../../../constants/scene/things/panels'
import {
    OAKLAND_HOUSE__SHARED,
    OAKLAND_HOUSE_LEFT__SHARED,
    OAKLAND_HOUSE_RIGHT__SHARED
} from '../../shared/buildings'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OAKLAND_SIDE__CENTRED]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.2
        }
    },
    [FLAT]: {
        [OAKLAND_HOUSE_LEFT]: {
            yIndex: 1,
            xPosition: 2.25,
            scaleFactor: 0.5,
            sharedStyle: [
                OAKLAND_HOUSE__SHARED,
                OAKLAND_HOUSE_LEFT__SHARED
            ]
        },
        [OAKLAND_HOUSE_RIGHT]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.5,
            sharedStyle: [
                OAKLAND_HOUSE__SHARED,
                OAKLAND_HOUSE_RIGHT__SHARED
            ]
        }
    }
}

export const THINGS_OAKLAND_HOUSES_GARRYOWEN = {
    [PANEL]: {
        [VOLKSWAGEN]: {
            yIndex: 3,
            xPosition: 6.5,
            scaleFactor: 0.45
        }
    }
}

export default ARRANGEMENTS_THINGS
