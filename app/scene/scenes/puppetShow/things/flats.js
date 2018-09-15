import {
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAINS_NEAR,
    TAIWAN_CLOUDS,
    TOGETHER_SKETCHBOOK,
    APART_SKETCHBOOK,
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [TAIWAN_MOUNTAINS_BRIDGED]: {
        yIndex: 3,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 3
        }
    },
    [TAIWAN_MOUNTAINS_NEAR]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 1.5
        }
    },
    [TAIWAN_CLOUDS]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 1.5,
            zOffset: 6
        }
    },
    [TOGETHER_SKETCHBOOK]: {
        yIndex: 5,
        arrangement: {
            xFloat: 8.5,
            xWidth: 4,
            zHeight: 3,
            zOffset: 4.5
        }
    },
    [APART_SKETCHBOOK]: {
        yIndex: 5,
        arrangement: {
            xFloat: 2.5,
            xWidth: 4,
            zHeight: 3,
            zOffset: 4.5
        }
    }
}

export default ARRANGEMENTS_MAP
