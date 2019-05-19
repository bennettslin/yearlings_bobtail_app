import {
    FLATS,
    FURNITURES,
    PANELS
} from 'constants/scene'
import { ROAD_PRESENT } from '../../keys/flats'
import { MIRIAM_CUSHIONS } from '../../keys/furniture'
import {
    SNOWGLOBE_LIZ_ALONE,
    SNOWGLOBE_BENNETT_MIRIAM
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [FLATS]: {
        [ROAD_PRESENT]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [FURNITURES]: {
        [MIRIAM_CUSHIONS]: {
            yIndex: 4,
            arrangement: {
                xFloat: 8,
                xWidth: 5,
                zHeight: 0.5
            }
        }
    },
    [PANELS]: {
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
        }
    }
}

export default ARRANGEMENTS_THINGS
