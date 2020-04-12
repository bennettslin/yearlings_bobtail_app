import {
    CUTOUT,
    FIXTURE
} from '../../../constants/scene/things'
import {
    MONITOR_SIDE__STAGE,
    WALL_SPEAKER_SIDE
} from '../../../constants/scene/things/cutouts'
import {
    STAGE_MIC__STAGE,
    KICK_DRUM,
    DRUM_THRONE,
    GUITAR_CASE_OPEN
} from '../../../constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [MONITOR_SIDE__STAGE]: {
            yIndex: 4,
            xPosition: 9,
            scaleFactor: 0.3
        },
        [WALL_SPEAKER_SIDE]: {
            yIndex: 1,
            xPosition: 1.5,
            zOffset: 4.5,
            scaleFactor: 0.3,
            rotate: 15
        }
    },
    [FIXTURE]: {
        [STAGE_MIC__STAGE]: {
            yIndex: 3,
            xPosition: 8.65
        },
        [KICK_DRUM]: {
            yIndex: 5,
            xPosition: 5,
            zOffset: -0.1
        },
        [DRUM_THRONE]: {
            yIndex: 5,
            xPosition: 8,
            zOffset: -0.1
        },
        [GUITAR_CASE_OPEN]: {
            yIndex: 4,
            xPosition: 2.5
        }
    }
}
