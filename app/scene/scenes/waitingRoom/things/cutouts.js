import {
    CLIPBOARD,
    PAINTING,
    WAITING_ROOM_PLANT
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [CLIPBOARD]: {
        yIndex: 4,
        arrangement: {
            xFloat: 4.5,
            xWidth: 5,
            zHeight: 1.5
        }
    },
    [PAINTING]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8,
            xWidth: 2,
            zHeight: 3
        }
    },
    [WAITING_ROOM_PLANT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 4,
            xWidth: 2,
            zHeight: 2,
            zOffset: 3
        }
    }
}

export default ARRANGEMENTS_MAP
