import {
    NOHO_SCHOOL_BACKDROP,
    NOHO_SCHOOLHOUSE,
    NURSE_OFFICE_BUBBLE
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
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
    },
    [NURSE_OFFICE_BUBBLE]: {
        yIndex: 2,
        arrangement: {
            xFloat: 8,
            xWidth: 5,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
