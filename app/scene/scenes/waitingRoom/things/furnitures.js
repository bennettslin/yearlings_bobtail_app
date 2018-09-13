import {
    ARMCHAIR_LEFT,
    ARMCHAIR_RIGHT,
    WAITING_ROOM_DOOR,
    WAITING_ROOM_DOOR_OPEN
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [ARMCHAIR_LEFT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 2.5,
            xWidth: 2,
            zHeight: 0.5
        }
    },
    [ARMCHAIR_RIGHT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5.5,
            xWidth: 2,
            zHeight: 0.5
        }
    },
    [WAITING_ROOM_DOOR]: {
        yIndex: 4,
        arrangement: {
            xFloat: 11,
            xWidth: 1,
            zHeight: 6
        }
    },
    [WAITING_ROOM_DOOR_OPEN]: {
        yIndex: 4,
        arrangement: {
            xFloat: 11,
            xWidth: 1,
            zHeight: 6
        }
    }
}

export default ARRANGEMENTS_MAP
