import {
    CLIFF_TREE,
    CLIFF_GRAVES_FAR,
    CLIFF_GRAVES_NEAR
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [CLIFF_TREE]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 6,
            zHeight: 6
        }
    },
    [CLIFF_GRAVES_FAR]: {
        yIndex: 1,
        arrangement: {
            xFloat: 9,
            xWidth: 5,
            zHeight: 2
        }
    },
    [CLIFF_GRAVES_NEAR]: {
        yIndex: 5,
        arrangement: {
            xFloat: 9,
            xWidth: 5,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
