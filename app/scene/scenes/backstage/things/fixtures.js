import {
    PUSH_BROOM,
    STEPLADDER,
    MANNEQUIN
} from 'scene/fixtureKeys'

const ARRANGEMENTS_MAP = {
    [PUSH_BROOM]: {
        yIndex: 2,
        arrangement: {
            xFloat: 4,
            xWidth: 1,
            zHeight: 3
        }
    },
    [STEPLADDER]: {
        yIndex: 5,
        arrangement: {
            xFloat: 6.5,
            xWidth: 1,
            zHeight: 1
        }
    },
    [MANNEQUIN]: {
        yIndex: 5,
        arrangement: {
            xFloat: 6.5,
            xWidth: 1,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
