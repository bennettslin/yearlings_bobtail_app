import {
    TRASH_CAN_FRONT,
    VAN_NUYS_PLANTS_FRONT,
    VAN_NUYS_LOGO
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [TRASH_CAN_FRONT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 0.5,
            xWidth: 1.5,
            zHeight: 3
        }
    },
    [VAN_NUYS_PLANTS_FRONT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 3.5,
            xWidth: 2,
            zHeight: 1.5
        }
    },
    [VAN_NUYS_LOGO]: {
        yIndex: 2,
        arrangement: {
            xFloat: 7.5,
            xWidth: 3,
            zHeight: 3,
            zOffset: 3
        }
    }
}

export default ARRANGEMENTS_MAP
