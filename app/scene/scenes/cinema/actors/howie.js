import {
    USHER_WAITING,
    USHER_LOOKING
} from 'scene/instanceKeys/howie'

const ARRANGEMENTS_MAP = {
    [USHER_WAITING]: {
        yIndex: -1,
        arrangement: {
            xFloat: 0,
            xWidth: 0,
            zHeight: 0
        }
    },
    [USHER_LOOKING]: {
        yIndex: -1,
        arrangement: {
            xFloat: 0,
            xWidth: 0,
            zHeight: 0
        }
    }
}

export default ARRANGEMENTS_MAP
