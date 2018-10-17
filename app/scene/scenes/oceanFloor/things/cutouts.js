import {
    BENNETT_MAT,
    ODIN_MAT,
    BUDDHA_CAVE
} from '../../../cutoutKeys'

const ARRANGEMENTS_MAP = {
    [BENNETT_MAT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 2.5,
            xWidth: 0.5,
            zHeight: 0.5
        }
    },
    [ODIN_MAT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 3,
            xWidth: 0.5,
            zHeight: 0.5
        }
    },
    [BUDDHA_CAVE]: {
        yIndex: 3,
        arrangement: {
            xFloat: 3,
            xWidth: 5,
            zHeight: 2
        }
    }
}

export default ARRANGEMENTS_MAP
