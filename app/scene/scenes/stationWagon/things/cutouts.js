import {
    SATURN_INTERIOR,
    SATURN_EXTERIOR
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [SATURN_INTERIOR]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 5
        }
    },
    [SATURN_EXTERIOR]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
