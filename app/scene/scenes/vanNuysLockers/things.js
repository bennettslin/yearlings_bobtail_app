import {
    CUTOUT,
    FIXTURE
} from '../../../constants/scene'
import {
    LOCKER_BANK,
    TRASH_CAN__LOCKERS,
    VAN_NUYS_PLANT__LOCKERS
} from '../../../constants/scene/things/cutouts'
import {
    THROWN_FRUIT,
    BALLED_FOIL__LOCKERS
} from '../../../constants/scene/things/fixtures'
import {
    BANANA__SHARED,
    GARBAGE_BAG__SHARED,
    PAPER_BAG__SHARED
} from '../../shared/food'

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
            scaleFactor: 0.35,
            sharedStyle: [
                BANANA__SHARED,
                GARBAGE_BAG__SHARED,
                PAPER_BAG__SHARED
            ]
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
            xPosition: 6.5,
            sharedStyle: BANANA__SHARED
        },
        [BALLED_FOIL__LOCKERS]: {
            yIndex: 4,
            xPosition: 7.5
        }
    }
}

export default ARRANGEMENTS_THINGS
