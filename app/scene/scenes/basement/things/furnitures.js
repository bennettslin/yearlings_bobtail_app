import {
    BASEMENT_DOOR_OPEN,
    BASEMENT_DOOR
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [BASEMENT_DOOR_OPEN]: {
        yIndex: 1,
        arrangement: {
            xFloat: 1.5,
            xWidth: 2,
            zHeight: 4
        }
    },
    [BASEMENT_DOOR]: {
        yIndex: 1,
        arrangement: {
            xFloat: 1.5,
            xWidth: 2,
            zHeight: 4
        }
    }
}

export default ARRANGEMENTS_MAP
