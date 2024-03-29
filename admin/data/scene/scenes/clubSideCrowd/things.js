import {
    CUTOUT,
    FIXTURE,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    CLUB_CHRISTMAS_LIGHTS__CROWD,
    MONITOR_SIDE__CROWD,
    WALL_SPEAKER_SIDE__CROWD,
} from '../../../../../src/constants/scene/things/cutouts'
import { STAGE_MIC__CROWD } from '../../../../../src/constants/scene/things/fixtures'
import { CROWD_SIDE } from '../../../../../src/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [CLUB_CHRISTMAS_LIGHTS__CROWD]: {
            yIndex: 0,
            xPosition: 5,
            zOffset: 6,
        },
        [MONITOR_SIDE__CROWD]: {
            yIndex: 1,
            xPosition: 2.6,
        },
        [WALL_SPEAKER_SIDE__CROWD]: {
            yIndex: 1,
            xPosition: 3,
            zOffset: 4.5,
            rotate: 15,
        },
    },
    [FIXTURE]: {
        [STAGE_MIC__CROWD]: {
            yIndex: 4,
            xPosition: 2.8,
        },
    },
    [PANEL]: {
        [CROWD_SIDE]: {
            yIndex: 2,
            xPosition: 7,
        },
    },
}
