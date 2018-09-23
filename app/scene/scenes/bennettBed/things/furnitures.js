import {
    LIGHT_SWITCH,
    BENNETT_MATTRESS,
    BENNETT_PILLOWS
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [LIGHT_SWITCH]: {
        yIndex: 3,
        arrangement: {
            xFloat: 5,
            xWidth: 0.5,
            zHeight: 0.5,
            zOffset: 2
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
