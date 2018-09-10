import {
    SIGNPOST,
    BANCROFT_SHRUB_LEFT,
    BANCROFT_SHRUB_RIGHT,
    UC_BERKELEY_TREE_LEFT,
    UC_BERKELEY_TREE_RIGHT
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [SIGNPOST]: {
        yIndex: 4,
        arrangement: {
            xFloat: 4.5,
            xWidth: 5,
            zHeight: 1.5
        }
    },
    [BANCROFT_SHRUB_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8,
            xWidth: 2,
            zHeight: 3
        }
    },
    [BANCROFT_SHRUB_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 4,
            xWidth: 2,
            zHeight: 2,
            zOffset: 3
        }
    },
    [UC_BERKELEY_TREE_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 4,
            xWidth: 2,
            zHeight: 2,
            zOffset: 3
        }
    },
    [UC_BERKELEY_TREE_RIGHT]: {
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
