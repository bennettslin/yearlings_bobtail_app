import {
    SNOWGLOBES_PRESENT,
    SNOWGLOBE_LIZ_ALONE,
    SNOWGLOBE_BENNETT_MIRIAM
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [SNOWGLOBES_PRESENT]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 8
        }
    },
    [SNOWGLOBE_LIZ_ALONE]: {
        yIndex: 5,
        arrangement: {
            xFloat: 2.5,
            xWidth: 4,
            zHeight: 4,
            zOffset: 0.5
        }
    },
    [SNOWGLOBE_BENNETT_MIRIAM]: {
        yIndex: 5,
        arrangement: {
            xFloat: 8,
            xWidth: 5.5,
            zHeight: 5.5
        }
    }
}

export default ARRANGEMENTS_MAP
