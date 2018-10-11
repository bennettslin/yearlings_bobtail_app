import {
    TAIWAN_CLOUDS,
    TAIWAN_FOG,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [TAIWAN_CLOUDS]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 3,
            zOffset: 5
        }
    },
    [TAIWAN_FOG]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [TAIWAN_MOUNTAINS_BRIDGED]: {
        yIndex: 3,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 6
        }
    },
    [TAIWAN_MOUNTAIN_LEFT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
            zHeight: 3
        }
    },
    [TAIWAN_MOUNTAIN_RIGHT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 9,
            xWidth: 5,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
