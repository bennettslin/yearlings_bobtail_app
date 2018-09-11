import {
    MONITOR_SPEAKER_SIDE,
    WALL_SPEAKER_SIDE
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [MONITOR_SPEAKER_SIDE]: {
        yIndex: 4,
        arrangement: {
            xFloat: 4.5,
            xWidth: 5,
            zHeight: 1.5
        }
    },
    [WALL_SPEAKER_SIDE]: {
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
