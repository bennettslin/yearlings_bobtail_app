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
    ROAD__SHARED,
    SNOWGLOBE__SHARED
} from '../../shared/props'
import {
    ALL_PEOPLE__SHARED,
    BENNETT__SHARED,
    LIZ__SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [ROAD_PRESENT]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6,
            sharedStyle: ROAD__SHARED
        }
    },
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__PRESENT]: {
            yIndex: 1,
            xPosition: 10.4,
            zOffset: 7.85,
            scaleFactor: 0.15,
            rotate: -10,
            sharedStyle: SNOWGLOBE__SHARED
        },
        [SNOWGLOBE_PRESENT]: {
            yIndex: 1,
            xPosition: 8.15,
            zOffset: 6.25,
            scaleFactor: 0.7,
            rotate: 15,
            sharedStyle: [
                SNOWGLOBE__SHARED,
                BENNETT__SHARED,
                LIZ__SHARED,
                ALL_PEOPLE__SHARED
            ]
        }
    },
    [PANEL]: {
        [SNOWGLOBE__LIZ_ALONE]: {
            yIndex: 4,
            xPosition: 2.5,
            scaleFactor: 0.3,
            sharedStyle: SNOWGLOBE__SHARED
        },
        [SNOWGLOBE__BENNETT_MIRIAM]: {
            yIndex: 5,
            xPosition: 8,
            scaleFactor: 0.4,
            sharedStyle: SNOWGLOBE__SHARED
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
