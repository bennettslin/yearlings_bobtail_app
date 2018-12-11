import {
    TRASH_CAN_LOCKERS,
    TRASH_CAN_QUAD,
    VAN_NUYS_PLANT_LOCKERS,
    VAN_NUYS_PLANT_QUAD
} from '../../../cutoutKeys'

const ARRANGEMENTS_MAP = {
    [TRASH_CAN_LOCKERS]: {
        yIndex: 2,
        arrangement: {
            xFloat: 10.5,
            xWidth: 1.5,
            zHeight: 3
        }
    },
    [TRASH_CAN_QUAD]: {
        yIndex: 3,
        arrangement: {
            xFloat: 0.5,
            xWidth: 1.5,
            zHeight: 3
        }
    },
    [VAN_NUYS_PLANT_LOCKERS]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8,
            xWidth: 2,
            zHeight: 1.5
        }
    },
    [VAN_NUYS_PLANT_QUAD]: {
        yIndex: 4,
        arrangement: {
            xFloat: 3,
            xWidth: 2,
            zHeight: 1.5
        }
    }
}

export default ARRANGEMENTS_MAP
