import {
    SCHOOLBUS_BACK,
    SCHOOLBUS_FRONT
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [SCHOOLBUS_BACK]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 5
        }
    },
    [SCHOOLBUS_FRONT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
