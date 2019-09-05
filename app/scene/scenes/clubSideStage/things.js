import {
    CUTOUT,
    FIXTURE
} from '../../../constants/scene'
import {
    MONITOR_SIDE__STAGE,
    WALL_SPEAKER_SIDE__STAGE
} from '../../../constants/scene/things/cutouts'
import {
    STAGE_MIC__STAGE,
    KICK_DRUM,
    DRUM_THRONE,
    GUITAR_CASE_OPEN
} from '../../../constants/scene/things/fixtures'
import {
    DRUMS__SHARED,
    DRUM_STAND__SHARED,
    DRUM_THRONE__SHARED,
    GUITAR_CASE__SHARED,
    MICROPHONE__SHARED
} from '../../shared/instruments'

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
        [STAGE_MIC__STAGE]: {
            yIndex: 3,
            xPosition: 8,
            sharedStyle: MICROPHONE__SHARED
        },
        [KICK_DRUM]: {
            yIndex: 5,
            xPosition: 5,
            zOffset: -0.1,
            sharedStyle: [
                DRUMS__SHARED,
                DRUM_STAND__SHARED
            ]
        },
        [DRUM_THRONE]: {
            yIndex: 5,
            xPosition: 8,
            zOffset: -0.1,
            sharedStyle: [
                DRUMS__SHARED,
                DRUM_STAND__SHARED,
                DRUM_THRONE__SHARED
            ]
        },
        [GUITAR_CASE_OPEN]: {
            yIndex: 4,
            xPosition: 2.5,
            sharedStyle: GUITAR_CASE__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
