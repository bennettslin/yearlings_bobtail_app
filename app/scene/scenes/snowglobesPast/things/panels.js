import {
    SNOWGLOBE_TETHERBALL,
    SNOWGLOBE_LIZ_ALONE,
    SNOWGLOBE_BENNETT_MIRIAM,
    SNOWGLOBE_LIZ_KHARI,
    SNOWGLOBE_BENNETT_ALONE
} from '../../../panelKeys'

const ARRANGEMENTS_MAP = {
    [SNOWGLOBE_TETHERBALL]: {
        yIndex: 4,
        arrangement: {
            xFloat: 7,
            xWidth: 6,
            zHeight: 5.5
        }
    },
    [SNOWGLOBE_LIZ_ALONE]: {
        yIndex: 4,
        arrangement: {
            xFloat: 2.5,
            xWidth: 4.5,
            zHeight: 4
        }
    },
    [SNOWGLOBE_BENNETT_MIRIAM]: {
        yIndex: 5,
        arrangement: {
            xFloat: 8,
            xWidth: 6,
            zHeight: 5.5
        }
    },
    [SNOWGLOBE_LIZ_KHARI]: {
        yIndex: 5,
        arrangement: {
            xFloat: 3,
            xWidth: 5.5,
            zHeight: 5
        }
    },
    [SNOWGLOBE_BENNETT_ALONE]: {
        yIndex: 4,
        arrangement: {
            xFloat: 8.5,
            xWidth: 4.5,
            zHeight: 4
        }
    }
}

export default ARRANGEMENTS_MAP
