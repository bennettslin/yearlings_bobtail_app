import {
    BACKDROP,
    FLAT,
    PANEL
} from 'constants/scene'
import { OAKLAND_SIDE_BACKDROP } from '../../keys/backdrops'
import {
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT
} from '../../keys/flats'
import { VOLKSWAGEN } from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OAKLAND_SIDE_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [FLAT]: {
        [OAKLAND_HOUSE_LEFT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 2,
                xWidth: 5,
                zHeight: 3
            }
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
            arrangement: {
                xPosition: 6.5,
                xWidth: 8,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
