import {
    BACKDROP,
    CUTOUT,
    FIXTURE
} from 'constants/scene'
import { VAN_NUYS_SCHOOL_BACKDROP } from 'constants/scene/things/backdrops'
import {
    LOCKER_BANK,
    TRASH_CAN__LOCKERS,
    VAN_NUYS_PLANT__LOCKERS
} from 'constants/scene/things/cutouts'
import { THROWN_FRUIT } from 'constants/scene/things/fixtures'

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
        [LOCKER_BANK]: {
            yIndex: 3,
            xPosition: 3.5,
            scaleFactor: 0.35
        },
        [TRASH_CAN__LOCKERS]: {
            yIndex: 2,
            xPosition: 10.5,
            scaleFactor: 0.35
        },
        [VAN_NUYS_PLANT__LOCKERS]: {
            yIndex: 1,
            xPosition: 8,
            scaleFactor: 0.33
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
    }
}

export default ARRANGEMENTS_THINGS
