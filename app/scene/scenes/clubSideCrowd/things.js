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
import {
    CROWD_NEAR__SIDE,
    CROWD_FAR__SIDE
} from 'constants/scene/things/panels'

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
        [CROWD_FAR__SIDE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 7,
                xWidth: 7,
                zHeight: 4
            }
        },
        [CROWD_NEAR__SIDE]: {
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
