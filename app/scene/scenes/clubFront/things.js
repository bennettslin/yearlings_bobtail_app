import {
    CUTOUT,
    FIXTURE
} from '../../../constants/scene'
import {
    MONITOR_FRONT__LEFT,
    MONITOR_FRONT__RIGHT,
    WALL_SPEAKER_FRONT__LEFT,
    WALL_SPEAKER_FRONT__RIGHT
} from '../../../constants/scene/things/cutouts'
import {
    CASH_BOX,
    GUITAR,
    DRUMKIT
} from '../../../constants/scene/things/fixtures'
import { DOLLAR__SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [MONITOR_FRONT__LEFT]: {
            yIndex: 5,
            xPosition: 2.5,
            scaleFactor: 0.3
        },
        [MONITOR_FRONT__RIGHT]: {
            yIndex: 5,
            xPosition: 8.5,
            scaleFactor: 0.3,
            flipHorizontal: true
        },
        [WALL_SPEAKER_FRONT__LEFT]: {
            yIndex: 5,
            xPosition: 1.5,
            zOffset: 5,
            scaleFactor: 0.3
        },
        [WALL_SPEAKER_FRONT__RIGHT]: {
            yIndex: 5,
            xPosition: 9.5,
            zOffset: 5,
            scaleFactor: 0.3,
            flipHorizontal: true
        }
    },
    [FIXTURE]: {
        [GUITAR]: {
            yIndex: 3,
            arrangement: {
                xPosition: 1,
                xWidth: 1,
                zHeight: 3
            }
        },
        [DRUMKIT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 4,
                zHeight: 3
            }
        }
    }
}

export const THINGS_CLUB_FRONT_M = {
    [FIXTURE]: {
        [CASH_BOX]: {
            yIndex: 4,
            xPosition: 3,
            zOffset: -0.1,
            sharedStyle: DOLLAR__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
