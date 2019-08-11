import {
    CUTOUT,
    FIXTURE
} from '../../../constants/scene'
import {
    MONITOR_SIDE__STAGE,
    WALL_SPEAKER_SIDE__STAGE
} from '../../../constants/scene/things/cutouts'
import {
    STAGE_MIC_SIDE__STAGE,
    KICK_DRUM,
    DRUM_THRONE,
    GUITAR_CASE_OPEN
} from '../../../constants/scene/things/fixtures'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [MONITOR_SIDE__STAGE]: {
            yIndex: 4,
            xPosition: 9,
            scaleFactor: 0.3
        },
        [WALL_SPEAKER_SIDE__STAGE]: {
            yIndex: 1,
            xPosition: 10,
            zOffset: 5,
            scaleFactor: 0.3,
            rotate: 15
        }
    },
    [FIXTURE]: {
        [STAGE_MIC_SIDE__STAGE]: {
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
