import {
    CUTOUT,
    FIXTURE
} from '../../../constants/scene/things'
import {
    MONITOR_FRONT__LEFT,
    MONITOR_FRONT__RIGHT,
    WALL_SPEAKER_FRONT__LEFT,
    WALL_SPEAKER_FRONT__RIGHT
} from '../../../constants/scene/things/cutouts'
import {
    CASH_BOX,
    ELECTRIC_GUITAR,
    DRUMKIT
} from '../../../constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [MONITOR_FRONT__LEFT]: {
            yIndex: 4,
            xPosition: 2.5,
            scaleFactor: 0.3
        },
        [MONITOR_FRONT__RIGHT]: {
            yIndex: 4,
            xPosition: 8.5,
            scaleFactor: 0.3,
            flipHorizontal: true
        },
        [WALL_SPEAKER_FRONT__LEFT]: {
            yIndex: 1,
            xPosition: 1.5,
            zOffset: 4.5,
            scaleFactor: 0.3
        },
        [WALL_SPEAKER_FRONT__RIGHT]: {
            yIndex: 1,
            xPosition: 9.5,
            zOffset: 4.5,
            scaleFactor: 0.3,
            flipHorizontal: true
        }
    },
    [FIXTURE]: {
        [ELECTRIC_GUITAR]: {
            yIndex: 3,
            xPosition: 1
        },
        [DRUMKIT]: {
            yIndex: 1,
            xPosition: 5.5,
            zOffset: -0.1
        }
    }
}

export const THINGS_CLUB_FRONT_M = {
    [FIXTURE]: {
        [CASH_BOX]: {
            yIndex: 5,
            xPosition: 3,
            zOffset: -0.1
        }
    }
}
