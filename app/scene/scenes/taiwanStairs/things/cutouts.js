import {
    TAIWAN_FRIDGE_SIDE,
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [TAIWAN_FRIDGE_SIDE]: {
        yIndex: 5,
        arrangement: {
            xFloat: 1.5,
            xWidth: 2,
            zHeight: 5
        }
    },
    [BENNETT_TAIWAN_GATE]: {
        yIndex: 1,
        arrangement: {
            xFloat: 6,
            xWidth: 1,
            zHeight: 3
        }
    },
    [ODIN_TAIWAN_GATE]: {
        yIndex: 0,
        arrangement: {
            xFloat: 7,
            xWidth: 1,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
