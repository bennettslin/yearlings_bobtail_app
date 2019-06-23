import {
    CUTOUT,
    FIXTURE
} from 'constants/scene'
import {
    MONITOR_SIDE_STAGE,
    WALL_SPEAKER_SIDE_STAGE
} from '../../keys/cutouts'
import {
    STAGE_MIC_SIDE_STAGE,
    KICK_DRUM,
    DRUM_THRONE,
    GUITAR_CASE_OPEN
} from '../../keys/fixtures'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [MONITOR_SIDE_STAGE]: {
            yIndex: 4,
            arrangement: {
                xPosition: 9,
                xWidth: 1,
                zHeight: 1
            }
        },
        [WALL_SPEAKER_SIDE_STAGE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 10.5,
                xWidth: 2,
                zHeight: 2,
                zOffset: 5
            }
        }
    },
    [FIXTURE]: {
        [STAGE_MIC_SIDE_STAGE]: {
            yIndex: 3,
            arrangement: {
                xPosition: 8.5,
                xWidth: 0.5,
                zHeight: 4
            }
        },
        [KICK_DRUM]: {
            yIndex: 1,
            arrangement: {
                xPosition: 3.5,
                xWidth: 1.5,
                zHeight: 1.5
            }
        },
        [DRUM_THRONE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 3.5,
                xWidth: 1.5,
                zHeight: 1.5
            }
        },
        [GUITAR_CASE_OPEN]: {
            yIndex: 3,
            arrangement: {
                xPosition: 6.5,
                xWidth: 3,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
