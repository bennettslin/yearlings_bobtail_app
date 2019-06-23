import {
    CUTOUT,
    FIXTURE
} from 'constants/scene'
import {
    MONITOR_SPEAKER_LEFT,
    MONITOR_SPEAKER_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT
} from 'constants/scene/things/cutouts'
import {
    CASH_BOX,
    GUITAR,
    DRUMKIT
} from 'constants/scene/things/fixtures'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [MONITOR_SPEAKER_LEFT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 2.5,
                xWidth: 1.5,
                zHeight: 1
            }
        },
        [MONITOR_SPEAKER_RIGHT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 1.5,
                zHeight: 1
            }
        },
        [WALL_SPEAKER_LEFT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 1.5,
                xWidth: 1.5,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WALL_SPEAKER_RIGHT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9.5,
                xWidth: 1.5,
                zHeight: 2,
                zOffset: 4
            }
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
            yIndex: 3,
            arrangement: {
                xPosition: 1,
                xWidth: 1,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
