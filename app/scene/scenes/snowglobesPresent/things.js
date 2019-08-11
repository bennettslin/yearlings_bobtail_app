import {
    BACKDROP,
    CARDBOARD,
    PANEL
} from '../../../constants/scene'
import { ROAD_PRESENT } from '../../../constants/scene/things/backdrops'
import {
    SNOWGLOBE_SMALL__PRESENT,
    SNOWGLOBE_PRESENT
} from '../../../constants/scene/things/cardboards'
import {
    SNOWGLOBE__LIZ_ALONE,
    SNOWGLOBE__BENNETT_MIRIAM,
    WIDE_COUCH__MIRIAM,
    WIDE_ARMREST__MIRIAM_LEFT,
    WIDE_ARMREST__MIRIAM_RIGHT
} from '../../../constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [ROAD_PRESENT]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__PRESENT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        },
        [SNOWGLOBE_PRESENT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [PANEL]: {
        [SNOWGLOBE__LIZ_ALONE]: {
            yIndex: 4,
            xPosition: 2.5,
            scaleFactor: 0.3
        },
        [SNOWGLOBE__BENNETT_MIRIAM]: {
            yIndex: 5,
            xPosition: 8,
            scaleFactor: 0.4
        },
        [WIDE_COUCH__MIRIAM]: {
            yIndex: 5,
            xPosition: 7.5,
            scaleFactor: 0.3
        },
        [WIDE_ARMREST__MIRIAM_LEFT]: {
            yIndex: 5,
            xPosition: 4,
            scaleFactor: 0.3
        },
        [WIDE_ARMREST__MIRIAM_RIGHT]: {
            yIndex: 5,
            xPosition: 11,
            scaleFactor: 0.3,
            flipHorizontal: true
        }
    }
}

export default ARRANGEMENTS_THINGS
