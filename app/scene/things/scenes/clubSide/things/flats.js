import {
    CROWD_NEAR_SIDE,
    CROWD_FAR_SIDE
} from '../../../keys/flats'

const ARRANGEMENTS_MAP = {
    [CROWD_FAR_SIDE]: {
        yIndex: 1,
        arrangement: {
            xFloat: 7,
            xWidth: 7,
            zHeight: 4
        }
    },
    [CROWD_NEAR_SIDE]: {
        yIndex: 2,
        arrangement: {
            xFloat: 7,
            xWidth: 7,
            zHeight: 4
        }
    }
}

export default ARRANGEMENTS_MAP
