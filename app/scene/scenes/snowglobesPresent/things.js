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
import {
    ROAD_SHARED,
    SNOWGLOBE_SHARED
} from '../../shared'
import {
    PEOPLE_ALL_SHARED,
    PEOPLE_BENNETT_SHARED,
    PEOPLE_LIZ_SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [ROAD_PRESENT]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6,
            sharedStyle: ROAD_SHARED
        }
    },
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__PRESENT]: {
            yIndex: 1,
            xPosition: 2,
            zOffset: 5,
            scaleFactor: 0.7,
            sharedStyle: SNOWGLOBE_SHARED
        },
        [SNOWGLOBE_PRESENT]: {
            yIndex: 1,
            xPosition: 5,
            zOffset: 4,
            scaleFactor: 0.7,
            sharedStyle: [
                SNOWGLOBE_SHARED,
                PEOPLE_BENNETT_SHARED,
                PEOPLE_LIZ_SHARED,
                PEOPLE_ALL_SHARED
            ]
        }
    },
    [PANEL]: {
        [SNOWGLOBE__LIZ_ALONE]: {
            yIndex: 4,
            xPosition: 2.5,
            scaleFactor: 0.3,
            sharedStyle: SNOWGLOBE_SHARED
        },
        [SNOWGLOBE__BENNETT_MIRIAM]: {
            yIndex: 5,
            xPosition: 8,
            scaleFactor: 0.4,
            sharedStyle: SNOWGLOBE_SHARED
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
