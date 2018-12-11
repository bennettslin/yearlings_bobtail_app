import {
    MONITOR_SIDE_CROWD,
    MONITOR_SIDE_STAGE,
    WALL_SPEAKER_SIDE_CROWD,
    WALL_SPEAKER_SIDE_STAGE
} from '../../../cutoutKeys'

const ARRANGEMENTS_MAP = {
    [MONITOR_SIDE_CROWD]: {
        yIndex: 4,
        arrangement: {
            xFloat: 3,
            xWidth: 1,
            zHeight: 1
        }
    },
    [MONITOR_SIDE_STAGE]: {
        yIndex: 4,
        arrangement: {
            xFloat: 9,
            xWidth: 1,
            zHeight: 1
        }
    },
    [WALL_SPEAKER_SIDE_CROWD]: {
        yIndex: 1,
        arrangement: {
            xFloat: 4.5,
            xWidth: 2,
            zHeight: 2,
            zOffset: 5
        }
    },
    [WALL_SPEAKER_SIDE_STAGE]: {
        yIndex: 1,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 2,
            zOffset: 5
        }
    }
}

export default ARRANGEMENTS_MAP
