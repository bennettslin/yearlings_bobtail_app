import {
    FLATS,
    FURNITURES,
    PANELS
} from 'constants/scene'
import { ROAD_PRESENT } from '../../keys/flats'
import { MIRIAM_CUSHIONS } from '../../keys/furniture'
import {
    SNOWGLOBE_LIZ_ALONE,
    SNOWGLOBE_BENNETT_MIRIAM,
    MIRIAM_COUCH_PANEL,
    MIRIAM_COUCH_ARMREST_LEFT,
    MIRIAM_COUCH_ARMREST_RIGHT
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [FLATS]: {
        [ROAD_PRESENT]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [FURNITURES]: {
        [MIRIAM_CUSHIONS]: {
            yIndex: 4,
            arrangement: {
                xPosition: 8,
                xWidth: 5,
                zHeight: 0.5
            }
        }
    },
    [PANELS]: {
        [SNOWGLOBE_LIZ_ALONE]: {
            yIndex: 4,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4.5,
                zHeight: 4
            }
        },
        [SNOWGLOBE_BENNETT_MIRIAM]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [MIRIAM_COUCH_PANEL]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [MIRIAM_COUCH_ARMREST_LEFT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [MIRIAM_COUCH_ARMREST_RIGHT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
