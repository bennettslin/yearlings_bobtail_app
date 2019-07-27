import {
    CUTOUT,
    FIXTURE
} from 'constants/scene'
import {
    LOCKER_BANK,
    TRASH_CAN__LOCKERS,
    VAN_NUYS_PLANT__LOCKERS
} from 'constants/scene/things/cutouts'
import { THROWN_FRUIT } from 'constants/scene/things/fixtures'

const ARRANGEMENTS_THINGS = {
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
