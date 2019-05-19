import {
    CUTOUTS,
    FIXTURES,
    FLATS
} from 'constants/scene'
import {
    MONITOR_SIDE_CROWD,
    WALL_SPEAKER_SIDE_CROWD
} from '../../keys/cutouts'
import { STAGE_MIC_SIDE_CROWD } from '../../keys/fixtures'
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
        [WALL_SPEAKER_SIDE_CROWD]: {
            yIndex: 1,
            arrangement: {
                xFloat: 4.5,
                xWidth: 2,
                zHeight: 2,
                zOffset: 5
            }
        }
    },
    [FIXTURES]: {
        [STAGE_MIC_SIDE_CROWD]: {
            yIndex: 3,
            arrangement: {
                xFloat: 8.5,
                xWidth: 0.5,
                zHeight: 4
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
