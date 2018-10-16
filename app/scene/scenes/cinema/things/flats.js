import {
    CINEMA_STREET_FAR,
    CINEMA_STREET_NEAR
} from '../../../flatKeys'

const ARRANGEMENTS_MAP = {
    [CINEMA_STREET_FAR]: {
        yIndex: 1,
        arrangement: {
            xFloat: 10,
            xWidth: 3,
            zHeight: 3
        }
    },
    [CINEMA_STREET_NEAR]: {
        yIndex: 2,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 4
        }
    }
}

export default ARRANGEMENTS_MAP
