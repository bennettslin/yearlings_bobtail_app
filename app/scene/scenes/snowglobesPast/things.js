import {
    BACKDROP,
    CARDBOARD,
    PANEL
} from '../../../constants/scene/things'
import { ROAD_PAST } from '../../../constants/scene/things/backdrops'
import {
    SNOWGLOBE_SMALL__PAST,
    SNOWGLOBE_PAST
} from '../../../constants/scene/things/cardboards'
import { SNOWGLOBE__TETHERBALL } from '../../../constants/scene/things/panels'
import { BOOK__SHARED } from '../../shared/paper'
import {
    ROAD__SHARED,
    SNOWGLOBE__SHARED
} from '../../shared/props'
import { BENNETT, CHRISTOPHER } from '../../../constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [ROAD_PAST]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6,
            sharedStyle: [
                BOOK__SHARED,
                ROAD__SHARED
            ]
        }
    },
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__PAST]: {
            yIndex: 1,
            xPosition: 6,
            zOffset: 6.45,
            scaleFactor: 0.15,
            rotate: -5,
            sharedStyle: SNOWGLOBE__SHARED
        },
        [SNOWGLOBE_PAST]: {
            yIndex: 1,
            xPosition: 8.5,
            zOffset: 6,
            scaleFactor: 0.7,
            rotate: 10,
            sharedStyle: [
                SNOWGLOBE__SHARED,
                BENNETT,
                CHRISTOPHER,
                ALL_PEOPLE__SHARED
            ]
        }
    },
    [PANEL]: {
        [SNOWGLOBE__TETHERBALL]: {
            yIndex: 4,
            xPosition: 7,
            scaleFactor: 0.4,
            sharedStyle: SNOWGLOBE__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
