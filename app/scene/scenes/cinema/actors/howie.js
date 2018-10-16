import {
    USHER_WAITING,
    USHER_LOOKING
} from 'scene/instanceKeys/howie'

const ARRANGEMENTS_MAP = {
    [USHER_WAITING]: {
        yIndex: 5,
        arrangement: {
            xFloat: 5.5,
            xWidth: 1,
            zHeight: 5
        }
    },
    [USHER_LOOKING]: {
        yIndex: 5,
        arrangement: {
            xFloat: 5.5,
            xWidth: 1,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
