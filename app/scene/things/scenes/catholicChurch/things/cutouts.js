import {
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    BERKELEY_LAMPPOST
} from '../../../keys/cutouts'

const ARRANGEMENTS_MAP = {
    [DISPENSER_LEFT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 1,
            xWidth: 2,
            zHeight: 3
        }
    },
    [DISPENSER_RIGHT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 3,
            xWidth: 2,
            zHeight: 3
        }
    },
    [BERKELEY_LAMPPOST]: {
        yIndex: 4,
        arrangement: {
            xFloat: 11,
            xWidth: 1,
            zHeight: 7
        }
    }
}

export default ARRANGEMENTS_MAP
