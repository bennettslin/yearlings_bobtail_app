import {
    USHER_WAITING,
    USHER_LOOKING
} from '../../../instanceKeys/howie'

const ARRANGEMENTS_MAP = {
    [USHER_WAITING]: {
        yIndex: 5,
        arrangement: {
            xFloat: 10,
            xWidth: 1,
            zHeight: 5
        }
    },
    [USHER_LOOKING]: {
        yIndex: 5,
        arrangement: {
            xFloat: 1,
            xWidth: 1,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
