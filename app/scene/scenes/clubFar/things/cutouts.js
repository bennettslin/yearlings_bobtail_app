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
            xFloat: 4.5,
            xWidth: 5,
            zHeight: 1.5
        }
    },
    [MONITOR_SPEAKER_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8,
            xWidth: 2,
            zHeight: 3
        }
    },
    [WALL_SPEAKER_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 4,
            xWidth: 2,
            zHeight: 2,
            zOffset: 3
        }
    },
    [WALL_SPEAKER_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 4,
            xWidth: 2,
            zHeight: 2,
            zOffset: 3
        }
    }
}

export default ARRANGEMENTS_MAP
