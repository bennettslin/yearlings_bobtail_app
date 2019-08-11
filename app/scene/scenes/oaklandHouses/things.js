import {
    BACKDROP,
    FLAT,
    PANEL
} from '../../../constants/scene'
import { OAKLAND_SIDE_BACKDROP } from '../../../constants/scene/things/backdrops'
import {
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT
} from '../../../constants/scene/things/flats'
import { VOLKSWAGEN } from '../../../constants/scene/things/panels'
import {
    OAKLAND_HOUSE_SHARED,
    OAKLAND_HOUSE_LEFT_SHARED,
    OAKLAND_HOUSE_RIGHT_SHARED
} from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OAKLAND_SIDE_BACKDROP]: {
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
                OAKLAND_HOUSE_SHARED,
                OAKLAND_HOUSE_LEFT_SHARED
            ]
        },
        [OAKLAND_HOUSE_RIGHT]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.5,
            sharedStyle: [
                OAKLAND_HOUSE_SHARED,
                OAKLAND_HOUSE_RIGHT_SHARED
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
