import {
    BACKDROP,
    CUTOUT,
    FIXTURE,
    FLAT
} from 'constants/scene'
import { VAN_NUYS_SCHOOL_BACKDROP } from '../../keys/backdrops'
import {
    TRASH_CAN_LOCKERS,
    VAN_NUYS_PLANT_LOCKERS
} from '../../keys/cutouts'
import { THROWN_FRUIT } from '../../keys/fixtures'
import { LOCKER_BANK } from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [VAN_NUYS_SCHOOL_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUT]: {
        [TRASH_CAN_LOCKERS]: {
            yIndex: 2,
            arrangement: {
                xPosition: 10.5,
                xWidth: 1.5,
                zHeight: 3
            }
        },
        [VAN_NUYS_PLANT_LOCKERS]: {
            yIndex: 1,
            xPosition: 8
        }
    },
    [FIXTURE]: {
        [THROWN_FRUIT]: {
            yIndex: 4,
            arrangement: {
                xPosition: 6.5,
                xWidth: 1,
                zHeight: 0.5
            }
        }
    },
    [FLAT]: {
        [LOCKER_BANK]: {
            yIndex: 3,
            arrangement: {
                xPosition: 3.5,
                xWidth: 4.5,
                zHeight: 4.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
