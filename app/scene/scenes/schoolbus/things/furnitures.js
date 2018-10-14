import {
    SCHOOLBUS_SEAT_FRONT,
    SCHOOLBUS_SEAT_REAR
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [SCHOOLBUS_SEAT_REAR]: {
        yIndex: 3,
        arrangement: {
            xFloat: 2,
            xWidth: 2,
            zHeight: 2
        }
    },
    [SCHOOLBUS_SEAT_FRONT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 5,
            xWidth: 2,
            zHeight: 2
        }
    }
}

export default ARRANGEMENTS_MAP
