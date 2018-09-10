import {
    BEDROOM_BLINDS,
    BEDROOM_BLINDS_OPEN,
    CAPTAIN_BED_MATTRESS
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [BEDROOM_BLINDS]: {
        yIndex: 1,
        arrangement: {
            xFloat: 3,
            xWidth: 5,
            zHeight: 3
        }
    },
    [BEDROOM_BLINDS_OPEN]: {
        yIndex: 1,
        arrangement: {
            xFloat: 3,
            xWidth: 5,
            zHeight: 3
        }
    },
    [CAPTAIN_BED_MATTRESS]: {
        yIndex: 4,
        arrangement: {
            xFloat: 8,
            xWidth: 4,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
