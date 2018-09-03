import {
    BATHTUB,
    MIRRORED_SINK,
    TOWEL_RACK
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [BATHTUB]: {
        yIndex: 4,
        arrangement: {
            xFloat: 4.5,
            xWidth: 5,
            zHeight: 1.5
        }
    },
    [MIRRORED_SINK]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8,
            xWidth: 2,
            zHeight: 3
        }
    },
    [TOWEL_RACK]: {
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
