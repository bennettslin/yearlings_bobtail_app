import {
    NOHO_HOUSES_BACKDROP,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOL_BACKDROP,
    NOHO_SCHOOLHOUSE
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [NOHO_HOUSES_BACKDROP]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [NOHO_HOUSE_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
            zHeight: 3
        }
    },
    [NOHO_HOUSE_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 9,
            xWidth: 5,
            zHeight: 3
        }
    },
    [NOHO_SCHOOL_BACKDROP]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [NOHO_SCHOOLHOUSE]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
