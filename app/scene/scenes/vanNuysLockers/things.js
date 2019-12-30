import {
    CUTOUT,
    FIXTURE
} from '../../../constants/scene/things'
import {
    LOCKER_BANK,
    TRASH_CAN__LOCKERS,
    BUSH_SINGLE__LOCKERS,
    BUSH_DOUBLE__LOCKERS
} from '../../../constants/scene/things/cutouts'
import {
    THROWN_FRUIT,
    BALLED_FOIL__LOCKERS
} from '../../../constants/scene/things/fixtures'

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
        [BUSH_SINGLE__LOCKERS]: {
            yIndex: 1,
            xPosition: 0.5,
            scaleFactor: 0.33
        },
        [BUSH_DOUBLE__LOCKERS]: {
            yIndex: 1,
            xPosition: 8,
            scaleFactor: 0.33
        }
    },
    [FIXTURE]: {
        [THROWN_FRUIT]: {
            yIndex: 4,
            xPosition: 6.5
        },
        [BALLED_FOIL__LOCKERS]: {
            yIndex: 4,
            xPosition: 7.5
        }
    }
}

export default ARRANGEMENTS_THINGS
