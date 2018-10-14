import {
    CROWD_SIDE_NEAR,
    CROWD_SIDE_FAR
} from '../../../flatKeys'

const ARRANGEMENTS_MAP = {
    [CROWD_SIDE_FAR]: {
        yIndex: 1,
        arrangement: {
            xFloat: 7,
            xWidth: 7,
            zHeight: 4
        }
    },
    [CROWD_SIDE_NEAR]: {
        yIndex: 2,
        arrangement: {
            xFloat: 7,
            xWidth: 7,
            zHeight: 4
        }
    }
}

export default ARRANGEMENTS_MAP
