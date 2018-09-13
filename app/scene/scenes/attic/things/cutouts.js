import {
    STORAGE_BOXES,
    STORAGE_CHEST,
    HOWIE_FRIDGE,
    TELEVISION
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [STORAGE_BOXES]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5,
            xWidth: 1,
            zHeight: 2.5
        }
    },
    [STORAGE_CHEST]: {
        yIndex: 4,
        arrangement: {
            xFloat: 1,
            xWidth: 1,
            zHeight: 1.5
        }
    },
    [HOWIE_FRIDGE]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8.5,
            xWidth: 3,
            zHeight: 5
        }
    },
    [TELEVISION]: {
        yIndex: 5,
        arrangement: {
            xFloat: 2.5,
            xWidth: 1.5,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
