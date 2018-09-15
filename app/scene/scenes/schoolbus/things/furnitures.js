import {
    SCHOOLBUS_SEAT_FRONT,
    SCHOOLBUS_SEAT_REAR
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [SCHOOLBUS_SEAT_REAR]: {
        yIndex: 3,
        arrangement: {
            xFloat: 2.5,
            xWidth: 2,
            zHeight: 0.5
        }
    },
    [SCHOOLBUS_SEAT_FRONT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 5.5,
            xWidth: 2,
            zHeight: 0.5
        }
    }
}

export default ARRANGEMENTS_MAP
