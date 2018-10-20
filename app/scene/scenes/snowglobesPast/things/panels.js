import {
    SNOWGLOBE,
    ARRANGEMENT_SNOWGLOBE_TETHERBALL,
    ARRANGEMENT_SNOWGLOBE_LIZ_ALONE,
    ARRANGEMENT_SNOWGLOBE_BENNETT_MIRIAM,
    ARRANGEMENT_SNOWGLOBE_LIZ_KHARI,
    ARRANGEMENT_SNOWGLOBE_BENNETT_ALONE
} from '../../../panelKeys'

const ARRANGEMENTS_MAP = {
    [SNOWGLOBE]: {
        [ARRANGEMENT_SNOWGLOBE_TETHERBALL]: {
            yIndex: 4,
            arrangement: {
                xFloat: 7,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [ARRANGEMENT_SNOWGLOBE_LIZ_ALONE]: {
            yIndex: 4,
            arrangement: {
                xFloat: 2.5,
                xWidth: 4.5,
                zHeight: 4
            }
        },
        [ARRANGEMENT_SNOWGLOBE_BENNETT_MIRIAM]: {
            yIndex: 5,
            arrangement: {
                xFloat: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [ARRANGEMENT_SNOWGLOBE_LIZ_KHARI]: {
            yIndex: 5,
            arrangement: {
                xFloat: 3,
                xWidth: 5.5,
                zHeight: 5
            }
        },
        [ARRANGEMENT_SNOWGLOBE_BENNETT_ALONE]: {
            yIndex: 4,
            arrangement: {
                xFloat: 8.5,
                xWidth: 4.5,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_MAP
