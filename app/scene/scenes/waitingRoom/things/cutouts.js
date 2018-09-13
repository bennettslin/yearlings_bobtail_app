import {
    CLIPBOARD,
    PAINTING,
    WAITING_ROOM_PLANT
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [CLIPBOARD]: {
        yIndex: 2,
        arrangement: {
            xFloat: 9,
            xWidth: 1,
            zHeight: 2,
            zOffset: 4
        }
    },
    [PAINTING]: {
        yIndex: 2,
        arrangement: {
            xFloat: 4,
            xWidth: 3,
            zHeight: 2,
            zOffset: 3
        }
    },
    [WAITING_ROOM_PLANT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 8,
            xWidth: 1,
            zHeight: 4
        }
    }
}

export default ARRANGEMENTS_MAP
