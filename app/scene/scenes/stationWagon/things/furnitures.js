import {
    SATURN_SEAT_REAR,
    SATURN_SEAT_FRONT,
    SATURN_DASHBOARD
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [SATURN_SEAT_REAR]: {
        yIndex: 3,
        arrangement: {
            xFloat: 3,
            xWidth: 2,
            zHeight: 2
        }
    },
    [SATURN_SEAT_FRONT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 6,
            xWidth: 2,
            zHeight: 2
        }
    },
    [SATURN_DASHBOARD]: {
        yIndex: 3,
        arrangement: {
            xFloat: 9,
            xWidth: 3,
            zHeight: 2
        }
    }
}

export default ARRANGEMENTS_MAP
