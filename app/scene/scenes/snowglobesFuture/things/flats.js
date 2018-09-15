import {
    SNOWGLOBES_FUTURE,
    SNOWGLOBE_LIZ_KHARI,
    SNOWGLOBE_BENNETT_ALONE
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [SNOWGLOBES_FUTURE]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 8
        }
    },
    [SNOWGLOBE_LIZ_KHARI]: {
        yIndex: 5,
        arrangement: {
            xFloat: 3,
            xWidth: 5,
            zHeight: 5
        }
    },
    [SNOWGLOBE_BENNETT_ALONE]: {
        yIndex: 4,
        arrangement: {
            xFloat: 8.5,
            xWidth: 4.5,
            zHeight: 4.5,
            zOffset: 1.5
        }
    }
}

export default ARRANGEMENTS_MAP
