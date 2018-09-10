import {
    TRASH_CAN_FRONT,
    VAN_NUYS_PLANTS_FRONT,
    VAN_NUYS_LOGO
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [TRASH_CAN_FRONT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 0.5,
            xWidth: 2,
            zHeight: 3
        }
    },
    [VAN_NUYS_PLANTS_FRONT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 3
        }
    },
    [VAN_NUYS_LOGO]: {
        yIndex: 1,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
