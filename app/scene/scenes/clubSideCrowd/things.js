import {
    CUTOUT,
    FIXTURE,
    PANEL
} from '../../../constants/scene/things'
import {
    MONITOR_SIDE__CROWD,
    WALL_SPEAKER_SIDE__CROWD
} from '../../../constants/scene/things/cutouts'
import { STAGE_MIC__CROWD } from '../../../constants/scene/things/fixtures'
import { CROWD_SIDE } from '../../../constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [MONITOR_SIDE__CROWD]: {
            yIndex: 4,
            xPosition: 3,
            scaleFactor: 0.3
        },
        [WALL_SPEAKER_SIDE__CROWD]: {
            yIndex: 1,
            xPosition: 4,
            zOffset: 5,
            scaleFactor: 0.3,
            rotate: 15
        }
    },
    [FIXTURE]: {
        [STAGE_MIC__CROWD]: {
            yIndex: 3,
            xPosition: 3
        }
    },
    [PANEL]: {
        [CROWD_SIDE]: {
            yIndex: 2,
            xPosition: 7,
            scaleFactor: 0.325
        }
    }
}
