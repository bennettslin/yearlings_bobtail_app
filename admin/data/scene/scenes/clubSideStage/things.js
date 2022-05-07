import {
    CUTOUT,
    FIXTURE,
} from '../../../../../src/constants/scene/things'
import {
    CLUB_CHRISTMAS_LIGHTS__STAGE,
    MONITOR_SIDE__STAGE,
    WALL_SPEAKER_SIDE__STAGE,
} from '../../../../../src/constants/scene/things/cutouts'
import {
    STAGE_MIC__STAGE,
    KICK_DRUM,
    DRUM_THRONE,
    GUITAR_CASE_OPEN,
} from '../../../../../src/constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [CLUB_CHRISTMAS_LIGHTS__STAGE]: {
            yIndex: 0,
            xPosition: 6,
            zOffset: 6,
        },
        [MONITOR_SIDE__STAGE]: {
            yIndex: 1,
            xPosition: 7.6,
        },
        [WALL_SPEAKER_SIDE__STAGE]: {
            yIndex: 1,
            xPosition: 8,
            zOffset: 4.5,
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
            xPosition: 4.5,
            zOffset: -0.1,
            layerYIndex: 2,
        },
        [STAGE_MIC__STAGE]: {
            yIndex: 4,
            xPosition: 7.8,
            flipHorizontal: true,
        },
        [GUITAR_CASE_OPEN]: {
            yIndex: 5,
            xPosition: 9.2,
            zOffset: -0.07,
        },
    },
}
