import {
    BENNETT_BLINDS_OPEN,
    BENNETT_GATE_SIDE_OPEN,
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN,
    BENNETT_MATTRESS,
    BENNETT_PILLOWS
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [BENNETT_BLINDS_OPEN]: {
        yIndex: 2,
        arrangement: {
            xFloat: 7.5,
            xWidth: 4,
            zHeight: 3.5
        }
    },
    [BENNETT_GATE_SIDE_OPEN]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 2,
            zHeight: 5.5
        }
    },
    [BENNETT_DOOR_INSIDE]: {
        yIndex: 2,
        arrangement: {
            xFloat: 3,
            xWidth: 3,
            zHeight: 6
        }
    },
    [BENNETT_DOOR_INSIDE_OPEN]: {
        yIndex: 2,
        arrangement: {
            xFloat: 3,
            xWidth: 3,
            zHeight: 6
        }
    },
    [BENNETT_MATTRESS]: {
        yIndex: 5,
        arrangement: {
            xFloat: 7,
            xWidth: 5,
            zHeight: 0.5
        }
    },
    [BENNETT_PILLOWS]: {
        yIndex: 5,
        arrangement: {
            xFloat: 9,
            xWidth: 1,
            zHeight: 0.5
        }
    }
}

export default ARRANGEMENTS_MAP
