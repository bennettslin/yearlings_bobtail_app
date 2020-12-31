import {
    CUTOUT,
    FIXTURE,
} from '../../../../../app/constants/scene/things'
import {
    MONITOR_SIDE__STAGE,
    WALL_SPEAKER_SIDE,
} from '../../../../../app/constants/scene/things/cutouts'
import {
    STAGE_MIC__STAGE,
    KICK_DRUM,
    DRUM_THRONE,
    GUITAR_CASE_OPEN,
} from '../../../../../app/constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [MONITOR_SIDE__STAGE]: {
            yIndex: 4,
            xPosition: 9,
            scaleFactor: 0.3,
        },
        [WALL_SPEAKER_SIDE]: {
            yIndex: 1,
            xPosition: 1.5,
            zOffset: 4.5,
            scaleFactor: 0.3,
            rotate: 15,
        },
    },
    [FIXTURE]: {
        [KICK_DRUM]: {
            yIndex: 2,
            xPosition: 3,
        },
        [DRUM_THRONE]: {
            yIndex: 1,
            xPosition: 5,
            zOffset: -0.1,
            layerYIndex: 2,
        },
        [STAGE_MIC__STAGE]: {
            yIndex: 3,
            xPosition: 8.65,
        },
        [GUITAR_CASE_OPEN]: {
            yIndex: 5,
            xPosition: 9,
            zOffset: -0.07,
        },
    },
}
