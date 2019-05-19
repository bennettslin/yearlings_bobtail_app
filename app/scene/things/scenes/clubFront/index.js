import {
    CUTOUTS,
    FIXTURES
} from 'constants/scene'
import {
    MONITOR_SPEAKER_LEFT,
    MONITOR_SPEAKER_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT
} from '../../keys/cutouts'
import {
    CASH_BOX,
    GUITAR,
    DRUMKIT
} from '../../keys/fixtures'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [MONITOR_SPEAKER_LEFT]: {
            yIndex: 5,
            arrangement: {
                xFloat: 2.5,
                xWidth: 1.5,
                zHeight: 1
            }
        },
        [MONITOR_SPEAKER_RIGHT]: {
            yIndex: 5,
            arrangement: {
                xFloat: 8.5,
                xWidth: 1.5,
                zHeight: 1
            }
        },
        [WALL_SPEAKER_LEFT]: {
            yIndex: 1,
            arrangement: {
                xFloat: 1.5,
                xWidth: 1.5,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WALL_SPEAKER_RIGHT]: {
            yIndex: 1,
            arrangement: {
                xFloat: 9.5,
                xWidth: 1.5,
                zHeight: 2,
                zOffset: 4
            }
        }
    },
    [FIXTURES]: {
        [CASH_BOX]: {
            yIndex: 3,
            arrangement: {
                xFloat: 1,
                xWidth: 1,
                zHeight: 3
            }
        },
        [GUITAR]: {
            yIndex: 3,
            arrangement: {
                xFloat: 1,
                xWidth: 1,
                zHeight: 3
            }
        },
        [DRUMKIT]: {
            yIndex: 1,
            arrangement: {
                xFloat: 5.5,
                xWidth: 4,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
