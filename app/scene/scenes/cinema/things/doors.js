import {
    CINEMA_DOOR_LEFT,
    CINEMA_DOOR_RIGHT
} from '../../../doorKeys'

const ARRANGEMENTS_MAP = {
    [CINEMA_DOOR_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 4,
            xWidth: 3,
            zHeight: 6.5
        }
    },
    [CINEMA_DOOR_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 7,
            xWidth: 3,
            zHeight: 6.5
        }
    }
}

export default ARRANGEMENTS_MAP
