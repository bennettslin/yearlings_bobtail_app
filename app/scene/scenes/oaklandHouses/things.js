import {
    BACKDROP,
    FLAT,
    PANEL
} from 'constants/scene'
import { OAKLAND_SIDE_BACKDROP } from 'constants/scene/things/backdrops'
import {
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT
} from 'constants/scene/things/flats'
import { VOLKSWAGEN } from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OAKLAND_SIDE_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.7
        }
    },
    [FLAT]: {
        [OAKLAND_HOUSE_LEFT]: {
            yIndex: 1,
            xPosition: 2,
            scaleFactor: 0.5
        },
        [OAKLAND_HOUSE_RIGHT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 3
            }
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
