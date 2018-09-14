import {
    SIGNPOST,
    BANCROFT_SHRUB_LEFT,
    BANCROFT_SHRUB_RIGHT,
    UC_BERKELEY_TREE_LEFT,
    UC_BERKELEY_TREE_RIGHT
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [SIGNPOST]: {
        yIndex: 5,
        arrangement: {
            xFloat: 10.5,
            xWidth: 1,
            zHeight: 7
        }
    },
    [BANCROFT_SHRUB_LEFT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 3.5,
            xWidth: 3,
            zHeight: 3
        }
    },
    [BANCROFT_SHRUB_RIGHT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 2.5,
            xWidth: 3,
            zHeight: 3
        }
    },
    [UC_BERKELEY_TREE_LEFT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 0.5,
            xWidth: 2,
            zHeight: 4
        }
    },
    [UC_BERKELEY_TREE_RIGHT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 9.5,
            xWidth: 2,
            zHeight: 4
        }
    }
}

export default ARRANGEMENTS_MAP
