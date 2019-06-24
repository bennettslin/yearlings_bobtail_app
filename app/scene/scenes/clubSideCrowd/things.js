import {
    CUTOUT,
    FIXTURE,
    FLAT
} from 'constants/scene'
import {
    MONITOR_SIDE_CROWD,
    WALL_SPEAKER_SIDE_CROWD
} from 'constants/scene/things/cutouts'
import { STAGE_MIC_SIDE_CROWD } from 'constants/scene/things/fixtures'
import {
    CROWD_NEAR_SIDE,
    CROWD_FAR_SIDE
} from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [MONITOR_SIDE_CROWD]: {
            yIndex: 4,
            arrangement: {
                xPosition: 3,
                xWidth: 1,
                zHeight: 1
            }
        },
        [WALL_SPEAKER_SIDE_CROWD]: {
            yIndex: 1,
            arrangement: {
                xPosition: 4.5,
                xWidth: 2,
                zHeight: 2,
                zOffset: 5
            }
        }
    },
    [FIXTURE]: {
        [STAGE_MIC_SIDE_CROWD]: {
            yIndex: 3,
            arrangement: {
                xPosition: 8.5,
                xWidth: 0.5,
                zHeight: 4
            }
        }
    },
    [FLAT]: {
        [CROWD_FAR_SIDE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 7,
                xWidth: 7,
                zHeight: 4
            }
        },
        [CROWD_NEAR_SIDE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 7,
                xWidth: 7,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
