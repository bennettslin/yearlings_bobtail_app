import {
    CINEMA_POSTER_LEFT,
    CINEMA_POSTER_RIGHT
} from '../../../keys/cutouts'

const ARRANGEMENTS_MAP = {
    [CINEMA_POSTER_LEFT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 1,
            xWidth: 2.5,
            zHeight: 4,
            zOffset: 2
        }
    },
    [CINEMA_POSTER_RIGHT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 10,
            xWidth: 2.5,
            zHeight: 4,
            zOffset: 2
        }
    }
}

export default ARRANGEMENTS_MAP
