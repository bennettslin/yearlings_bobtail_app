import {
    BENNETT_BLINDS,
    BENNETT_DOOR_OUTSIDE,
    BENNETT_GATE_SIDE
} from '../../../doorKeys'

const ARRANGEMENTS_MAP = {
    [BENNETT_BLINDS]: {
        yIndex: 1,
        arrangement: {
            xFloat: 3.5,
            xWidth: 4,
            zHeight: 3.5
        }
    },
    [BENNETT_DOOR_OUTSIDE]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8,
            xWidth: 3,
            zHeight: 6
        }
    },
    [BENNETT_GATE_SIDE]: {
        yIndex: 4,
        arrangement: {
            xFloat: 0,
            xWidth: 1,
            zHeight: 6
        }
    }
}

export default ARRANGEMENTS_MAP
