import {
    CINEMA_POSTER_LEFT,
    CINEMA_POSTER_RIGHT,
    ARRANGEMENT_CINEMA_POSTER,
    ARRANGEMENT_CINEMA_POSTER_STREET
} from '../../../cutoutKeys'

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
        [ARRANGEMENT_CINEMA_POSTER]: {
            yIndex: 4,
            arrangement: {
                xFloat: 10,
                xWidth: 2.5,
                zHeight: 4,
                zOffset: 2
            }
        },
        [ARRANGEMENT_CINEMA_POSTER_STREET]: {
            yIndex: 4,
            arrangement: {
                xFloat: 1,
                xWidth: 2.5,
                zHeight: 4,
                zOffset: 2
            }
        }
    }
}

export default ARRANGEMENTS_MAP
