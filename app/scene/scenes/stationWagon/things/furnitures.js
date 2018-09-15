import {
    SATURN_SEAT_REAR,
    SATURN_SEAT_FRONT,
    SATURN_DASHBOARD
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [SATURN_SEAT_REAR]: {
        yIndex: 3,
        arrangement: {
            xFloat: 3.5,
            xWidth: 2,
            zHeight: 0.5
        }
    },
    [SATURN_SEAT_FRONT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 6.5,
            xWidth: 2,
            zHeight: 0.5
        }
    },
    [SATURN_DASHBOARD]: {
        yIndex: 3,
        arrangement: {
            xFloat: 8.5,
            xWidth: 2,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
