import {
    DEATHBED_THOUGHT_PANEL,
    TENNIS_THOUGHT_PANEL,
    INVERSE_THOUGHT_PANEL
} from '../../../keys/panels'

const ARRANGEMENTS_MAP = {
    [DEATHBED_THOUGHT_PANEL]: {
        yIndex: 0,
        arrangement: {
            xFloat: 4,
            xWidth: 8,
            zHeight: 6
        }
    },
    [TENNIS_THOUGHT_PANEL]: {
        yIndex: 1,
        arrangement: {
            xFloat: 9,
            xWidth: 5,
            zHeight: 4
        }
    },
    [INVERSE_THOUGHT_PANEL]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 8
        }
    }
}

export default ARRANGEMENTS_MAP
