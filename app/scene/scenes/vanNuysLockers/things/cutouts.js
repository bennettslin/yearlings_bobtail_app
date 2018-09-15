import {
    LOCKER_BANK,
    TRASH_CAN,
    ARRANGEMENT_TRASH_CAN_LOCKERS,
    ARRANGEMENT_TRASH_CAN_QUAD,
    VAN_NUYS_PLANTS,
    ARRANGEMENT_VAN_NUYS_PLANT_LOCKERS,
    ARRANGEMENT_VAN_NUYS_PLANT_QUAD
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
    [TRASH_CAN]: {
        [ARRANGEMENT_TRASH_CAN_LOCKERS]: {
            yIndex: 2,
            arrangement: {
                xFloat: 10.5,
                xWidth: 1.5,
                zHeight: 3
            }
        },
        [ARRANGEMENT_TRASH_CAN_QUAD]: {
            yIndex: 2,
            arrangement: {
                xFloat: 0.5,
                xWidth: 1.5,
                zHeight: 3
            }
        }
    },
    [VAN_NUYS_PLANTS]: {
        [ARRANGEMENT_VAN_NUYS_PLANT_LOCKERS]: {
            yIndex: 1,
            arrangement: {
                xFloat: 8,
                xWidth: 2,
                zHeight: 1.5
            }
        },
        [ARRANGEMENT_VAN_NUYS_PLANT_QUAD]: {
            yIndex: 3,
            arrangement: {
                xFloat: 3,
                xWidth: 2,
                zHeight: 1.5
            }
        }
    }
}

export default ARRANGEMENTS_MAP
