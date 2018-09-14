import {
    MONITOR_SPEAKER_LEFT,
    MONITOR_SPEAKER_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [MONITOR_SPEAKER_LEFT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 2.5,
            xWidth: 1.5,
            zHeight: 1
        }
    },
    [MONITOR_SPEAKER_RIGHT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 8.5,
            xWidth: 1.5,
            zHeight: 1
        }
    },
    [WALL_SPEAKER_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 1.5,
            xWidth: 1.5,
            zHeight: 2,
            zOffset: 4
        }
    },
    [WALL_SPEAKER_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 9.5,
            xWidth: 1.5,
            zHeight: 2,
            zOffset: 4
        }
    }
}

export default ARRANGEMENTS_MAP
