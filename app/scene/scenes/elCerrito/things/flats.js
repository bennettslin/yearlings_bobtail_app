import {
    EL_CERRITO_TREE,
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR
} from '../../../flatKeys'

const ARRANGEMENTS_MAP = {
    [EL_CERRITO_TREE]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 6,
            zHeight: 6
        }
    },
    [EL_CERRITO_FAR]: {
        yIndex: 1,
        arrangement: {
            xFloat: 9.5,
            xWidth: 4,
            zHeight: 2
        }
    },
    [EL_CERRITO_NEAR]: {
        yIndex: 5,
        arrangement: {
            xFloat: 9.5,
            xWidth: 3.5,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
