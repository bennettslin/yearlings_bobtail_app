import {
    TAIWAN_MOUNTAINS_FAR,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAINS_NEAR,
    TAIWAN_CLOUDS
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [TAIWAN_MOUNTAINS_FAR]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [TAIWAN_MOUNTAINS_BRIDGED]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
            zHeight: 3
        }
    },
    [TAIWAN_MOUNTAINS_NEAR]: {
        yIndex: 2,
        arrangement: {
            xFloat: 8,
            xWidth: 5,
            zHeight: 5
        }
    },
    [TAIWAN_CLOUDS]: {
        yIndex: 2,
        arrangement: {
            xFloat: 8,
            xWidth: 5,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
