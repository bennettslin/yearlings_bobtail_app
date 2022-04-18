import {
    CUTOUT,
    FIXTURE,
} from '../../../../../src/constants/scene/things'
import {
    LOCKER_BANK,
    TRASH_CAN__LOCKERS,
    BUSH_SINGLE__LOCKERS,
    BUSH_DOUBLE__LOCKERS,
} from '../../../../../src/constants/scene/things/cutouts'
import {
    THROWN_FRUIT,
    BALLED_FOIL__LOCKERS,
} from '../../../../../src/constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [LOCKER_BANK]: {
            yIndex: 3,
            xPosition: 3.5,
        },
        [TRASH_CAN__LOCKERS]: {
            yIndex: 1,
            xPosition: 10.5,
        },
        [BUSH_SINGLE__LOCKERS]: {
            yIndex: 1,
            xPosition: 0.5,
            scaleFactor: 0.83,
        },
        [BUSH_DOUBLE__LOCKERS]: {
            yIndex: 1,
            xPosition: 7.5,
        },
    },
    [FIXTURE]: {
        [THROWN_FRUIT]: {
            yIndex: 4,
            xPosition: 5.8,
            zOffset: -0.04,
        },
        [BALLED_FOIL__LOCKERS]: {
            yIndex: 4,
            xPosition: 8.1,
        },
    },
}
