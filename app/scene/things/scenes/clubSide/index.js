import {
    CUTOUTS,
    FIXTURES,
    FLATS
} from 'constants/scene'
import {
    MONITOR_SIDE_CROWD,
    MONITOR_SIDE_STAGE,
    WALL_SPEAKER_SIDE_CROWD,
    WALL_SPEAKER_SIDE_STAGE
} from '../../keys/cutouts'
import {
    STAGE_MIC_SIDE,
    KICK_DRUM,
    DRUM_THRONE,
    GUITAR_CASE_OPEN
} from '../../keys/fixtures'
import {
    CROWD_NEAR_SIDE,
    CROWD_FAR_SIDE
} from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [MONITOR_SIDE_CROWD]: {
            yIndex: 4,
            arrangement: {
                xFloat: 3,
                xWidth: 1,
                zHeight: 1
            }
        },
        [MONITOR_SIDE_STAGE]: {
            yIndex: 4,
            arrangement: {
                xFloat: 9,
                xWidth: 1,
                zHeight: 1
            }
        },
        [WALL_SPEAKER_SIDE_CROWD]: {
            yIndex: 1,
            arrangement: {
                xFloat: 4.5,
                xWidth: 2,
                zHeight: 2,
                zOffset: 5
            }
        },
        [WALL_SPEAKER_SIDE_STAGE]: {
            yIndex: 1,
            arrangement: {
                xFloat: 10.5,
                xWidth: 2,
                zHeight: 2,
                zOffset: 5
            }
        }
    },
    [FIXTURES]: {
        [STAGE_MIC_SIDE]: {
            yIndex: 3,
            arrangement: {
                xFloat: 8.5,
                xWidth: 0.5,
                zHeight: 4
            }
        },
        [KICK_DRUM]: {
            yIndex: 1,
            arrangement: {
                xFloat: 3.5,
                xWidth: 1.5,
                zHeight: 1.5
            }
        },
        [DRUM_THRONE]: {
            yIndex: 1,
            arrangement: {
                xFloat: 3.5,
                xWidth: 1.5,
                zHeight: 1.5
            }
        },
        [GUITAR_CASE_OPEN]: {
            yIndex: 3,
            arrangement: {
                xFloat: 6.5,
                xWidth: 3,
                zHeight: 1
            }
        }
    },
    [FLATS]: {
        [CROWD_FAR_SIDE]: {
            yIndex: 1,
            arrangement: {
                xFloat: 7,
                xWidth: 7,
                zHeight: 4
            }
        },
        [CROWD_NEAR_SIDE]: {
            yIndex: 2,
            arrangement: {
                xFloat: 7,
                xWidth: 7,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
