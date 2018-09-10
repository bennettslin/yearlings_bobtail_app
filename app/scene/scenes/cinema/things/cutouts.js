import {
    CINEMA_POSTER_LEFT,
    CINEMA_POSTER_RIGHT
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [CINEMA_POSTER_LEFT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 4.5,
            xWidth: 5,
            zHeight: 1.5
        }
    },
    [CINEMA_POSTER_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8,
            xWidth: 2,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
