import {
    BACKDROP,
    CARDBOARD,
    PANEL
} from '../../../constants/scene'
import { ROAD_PAST } from '../../../constants/scene/things/backdrops'
import {
    SNOWGLOBE_SMALL__PAST,
    SNOWGLOBE_PAST
} from '../../../constants/scene/things/cardboards'
import { SNOWGLOBE__TETHERBALL } from '../../../constants/scene/things/panels'
import {
    ROAD_SHARED,
    SNOWGLOBE_SHARED
} from '../../shared'
import {
    PEOPLE_ALL_SHARED,
    PEOPLE_BENNETT_SHARED,
    PEOPLE_CHRISTOPHER_SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [ROAD_PAST]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6,
            sharedStyle: ROAD_SHARED
        }
    },
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__PAST]: {
            yIndex: 1,
            xPosition: 2,
            zOffset: 5,
            scaleFactor: 0.7,
            sharedStyle: SNOWGLOBE_SHARED
        },
        [SNOWGLOBE_PAST]: {
            yIndex: 1,
            xPosition: 5,
            zOffset: 4,
            scaleFactor: 0.7,
            sharedStyle: [
                SNOWGLOBE_SHARED,
                PEOPLE_BENNETT_SHARED,
                PEOPLE_CHRISTOPHER_SHARED,
                PEOPLE_ALL_SHARED
            ]
        }
    },
    [PANEL]: {
        [SNOWGLOBE__TETHERBALL]: {
            yIndex: 4,
            xPosition: 7,
            scaleFactor: 0.4
        }
    }
}

export default ARRANGEMENTS_THINGS
