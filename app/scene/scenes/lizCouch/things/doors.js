import {
    LIZ_BLINDS,
    ARRANGEMENT_LIZ_BLINDS,
    ARRANGEMENT_LIZ_BLINDS_STREET,
    LIZ_BLINDS_OPEN,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE,
    LIZ_GATE_INSIDE_OPEN
} from '../../../doorKeys'

const ARRANGEMENTS_MAP = {
    [LIZ_BLINDS]: {
        /**
         * This is somewhat fragile, as this arrangement is used by both
         * lizGate and lizCouch, but it is only a coincidence.
         */
        [ARRANGEMENT_LIZ_BLINDS]: {
            yIndex: 1,
            arrangement: {
                xFloat: 6,
                xWidth: 5,
                zHeight: 3.5
            }
        },
        [ARRANGEMENT_LIZ_BLINDS_STREET]: {
            yIndex: 1,
            arrangement: {
                xFloat: 3,
                xWidth: 5,
                zHeight: 3.5
            }
        }
    },
    [LIZ_BLINDS_OPEN]: {
        yIndex: 1,
        arrangement: {
            xFloat: 6,
            xWidth: 5,
            zHeight: 3.5
        }
    },
    [LIZ_DOOR]: {
        yIndex: 4,
        arrangement: {
            xFloat: 10.5,
            xWidth: 1,
            zHeight: 6
        }
    },
    [LIZ_DOOR_OPEN]: {
        yIndex: 4,
        arrangement: {
            xFloat: 10.5,
            xWidth: 1,
            zHeight: 6
        }
    },
    [LIZ_GATE_INSIDE]: {
        yIndex: 0,
        arrangement: {
            xFloat: 6,
            xWidth: 3,
            zHeight: 3
        }
    },
    [LIZ_GATE_INSIDE_OPEN]: {
        yIndex: 0,
        arrangement: {
            xFloat: 6,
            xWidth: 3,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
