import {
    SCHOOLBUS_SEAT_FRONT,
    SCHOOLBUS_SEAT_BACK
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [SCHOOLBUS_SEAT_BACK]: {
        yIndex: 3,
        arrangement: {
            xFloat: 3,
            xWidth: 1,
            zHeight: 0.5
        }
    },
    [SCHOOLBUS_SEAT_FRONT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 6,
            xWidth: 1,
            zHeight: 0.5
        }
    }
}

export default ARRANGEMENTS_MAP
