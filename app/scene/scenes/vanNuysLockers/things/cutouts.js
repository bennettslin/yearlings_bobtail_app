import {
    LOCKER_BANK,
    TRASH_CAN_BACK,
    VAN_NUYS_PLANTS_BACK
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [LOCKER_BANK]: {
        yIndex: 4,
        arrangement: {
            xFloat: 3.5,
            xWidth: 4,
            zHeight: 4
        }
    },
    [TRASH_CAN_BACK]: {
        yIndex: 2,
        arrangement: {
            xFloat: 10.5,
            xWidth: 1.5,
            zHeight: 3
        }
    },
    [VAN_NUYS_PLANTS_BACK]: {
        yIndex: 1,
        arrangement: {
            xFloat: 7.5,
            xWidth: 2,
            zHeight: 1.5
        }
    }
}

export default ARRANGEMENTS_MAP
