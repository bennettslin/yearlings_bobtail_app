import {
    EL_CERRITO_BACKDROP,
    EL_CERRITO_ROAD
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [EL_CERRITO_BACKDROP]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [EL_CERRITO_ROAD]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
