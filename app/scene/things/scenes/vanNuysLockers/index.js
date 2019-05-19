import {
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS
} from 'constants/scene'
import { VAN_NUYS_SCHOOL_BACKDROP } from '../../keys/backdrops'
import {
    TRASH_CAN_LOCKERS,
    VAN_NUYS_PLANT_LOCKERS
} from '../../keys/cutouts'
import { THROWN_FRUIT } from '../../keys/fixtures'
import { LOCKER_BANK } from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [VAN_NUYS_SCHOOL_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [TRASH_CAN_LOCKERS]: {
            yIndex: 2,
            arrangement: {
                xFloat: 10.5,
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
        }
    },
    [FIXTURES]: {
        [THROWN_FRUIT]: {
            yIndex: 4,
            arrangement: {
                xFloat: 6.5,
                xWidth: 1,
                zHeight: 0.5
            }
        }
    },
    [FLATS]: {
        [LOCKER_BANK]: {
            yIndex: 3,
            arrangement: {
                xFloat: 3.5,
                xWidth: 4.5,
                zHeight: 4.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
