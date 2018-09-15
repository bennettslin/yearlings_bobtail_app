import {
    HOSPITAL_THOUGHT,
    TENNIS_THOUGHT,
    INVERSE_THOUGHT_BACKDROP
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [HOSPITAL_THOUGHT]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [TENNIS_THOUGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
            zHeight: 3
        }
    },
    [INVERSE_THOUGHT_BACKDROP]: {
        yIndex: 1,
        arrangement: {
            xFloat: 9,
            xWidth: 5,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
