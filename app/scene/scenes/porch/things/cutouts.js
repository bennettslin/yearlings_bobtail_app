import {
    PORCH_PLANTS_LEFT,
    PORCH_PLANTS_RIGHT
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [PORCH_PLANTS_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 0.5,
            xWidth: 2,
            zHeight: 3
        }
    },
    [PORCH_PLANTS_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
