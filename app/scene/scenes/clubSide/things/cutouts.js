import {
    MONITOR_SPEAKER_SIDE,
    ARRANGEMENT_MONITOR_SIDE_CROWD,
    ARRANGEMENT_MONITOR_SIDE_STAGE,
    WALL_SPEAKER_SIDE,
    ARRANGEMENT_WALL_SIDE_CROWD,
    ARRANGEMENT_WALL_SIDE_STAGE,
    CROWD_SIDE_NEAR,
    CROWD_SIDE_FAR
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [MONITOR_SPEAKER_SIDE]: {
        [ARRANGEMENT_MONITOR_SIDE_CROWD]: {
            yIndex: 4,
            arrangement: {
                xFloat: 3,
                xWidth: 1,
                zHeight: 1
            }
        },
        [ARRANGEMENT_MONITOR_SIDE_STAGE]: {
            yIndex: 4,
            arrangement: {
                xFloat: 9,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [WALL_SPEAKER_SIDE]: {
        [ARRANGEMENT_WALL_SIDE_CROWD]: {
            yIndex: 1,
            arrangement: {
                xFloat: 4.5,
                xWidth: 2,
                zHeight: 2,
                zOffset: 5
            }
        },
        [ARRANGEMENT_WALL_SIDE_STAGE]: {
            yIndex: 1,
            arrangement: {
                xFloat: 10.5,
                xWidth: 2,
                zHeight: 2,
                zOffset: 5
            }
        }
    },
    [CROWD_SIDE_FAR]: {
        yIndex: 1,
        arrangement: {
            xFloat: 7,
            xWidth: 7,
            zHeight: 5
        }
    },
    [CROWD_SIDE_NEAR]: {
        yIndex: 2,
        arrangement: {
            xFloat: 7,
            xWidth: 7,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
