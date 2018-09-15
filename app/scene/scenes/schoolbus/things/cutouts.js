import {
    SCHOOLBUS_INTERIOR,
    SCHOOLBUS_EXTERIOR
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [SCHOOLBUS_INTERIOR]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 5
        }
    },
    [SCHOOLBUS_EXTERIOR]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
