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
    ELECTRIC_GUITAR,
    DRUMKIT
} from '../../../constants/scene/things/fixtures'
import { DOLLAR__SHARED } from '../../shared'
import {
    CYMBAL__SHARED,
    DRUMS__SHARED,
    DRUM_STAND__SHARED,
    ELECTRIC_GUITAR__SHARED,
    MONITOR__SHARED
} from '../../shared/instruments'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [MONITOR_FRONT__LEFT]: {
            yIndex: 5,
            xPosition: 2.5,
            scaleFactor: 0.3,
            sharedStyle: MONITOR__SHARED
        },
        [MONITOR_FRONT__RIGHT]: {
            yIndex: 5,
            xPosition: 8.5,
            scaleFactor: 0.3,
            flipHorizontal: true,
            sharedStyle: MONITOR__SHARED
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
        [ELECTRIC_GUITAR]: {
            yIndex: 3,
            xPosition: 1,
            sharedStyle: ELECTRIC_GUITAR__SHARED
        },
        [DRUMKIT]: {
            yIndex: 1,
            xPosition: 5.5,
            zOffset: -0.25,
            sharedStyle: [
                CYMBAL__SHARED,
                DRUMS__SHARED,
                DRUM_STAND__SHARED
            ]
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
