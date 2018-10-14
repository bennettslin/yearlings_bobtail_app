import {
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE,
    ARRANGEMENT_UC_BERKELEY_TREE_LEFT,
    ARRANGEMENT_UC_BERKELEY_TREE_RIGHT
} from '../../../cutoutKeys'

const ARRANGEMENTS_MAP = {
    [SIGNPOST]: {
        yIndex: 5,
        arrangement: {
            xFloat: 10.5,
            xWidth: 1,
            zHeight: 7
        }
    },
    [BANCROFT_SHRUBS]: {
        yIndex: 4,
        arrangement: {
            xFloat: 2.5,
            xWidth: 3,
            zHeight: 3
        }
    },
    [UC_BERKELEY_TREE]: {
        [ARRANGEMENT_UC_BERKELEY_TREE_LEFT]: {
            yIndex: 2,
            arrangement: {
                xFloat: 1,
                xWidth: 2,
                zHeight: 4
            }
        },
        [ARRANGEMENT_UC_BERKELEY_TREE_RIGHT]: {
            yIndex: 2,
            arrangement: {
                xFloat: 9.5,
                xWidth: 2,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_MAP
