import {
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR
} from 'scene/panelKeys'

const ARRANGEMENTS_MAP = {
    [SCHOOLBUS_INTERIOR]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 6
        }
    },
    [SCHOOLBUS_EXTERIOR]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 6
        }
    }
}

export default ARRANGEMENTS_MAP
