import {
    CUTOUT,
    FIXTURE,
    PANEL
} from 'constants/scene'
import {
    MONITOR_SIDE__CROWD,
    WALL_SPEAKER_SIDE__CROWD
} from 'constants/scene/things/cutouts'
import { STAGE_MIC_SIDE__CROWD } from 'constants/scene/things/fixtures'
import { CROWD_SIDE } from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
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
        [STAGE_MIC_SIDE__CROWD]: {
            yIndex: 3,
            arrangement: {
                xPosition: 8.5,
                xWidth: 0.5,
                zHeight: 4
            }
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

export default ARRANGEMENTS_THINGS
