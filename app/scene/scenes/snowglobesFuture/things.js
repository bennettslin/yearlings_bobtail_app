import {
    BACKDROP,
    CARDBOARD,
    FIXTURE,
    PANEL
} from '../../../constants/scene/things'
import { ROAD_FUTURE } from '../../../constants/scene/things/backdrops'
import {
    SNOWGLOBE_SMALL__FUTURE,
    SNOWGLOBE_FUTURE_CORD,
    SNOWGLOBE_FUTURE_REATTA
} from '../../../constants/scene/things/cardboards'
import {
    RECORDING_MIC,
    RECORDING_BEERS
} from '../../../constants/scene/things/fixtures'
import {
    SNOWGLOBE__LIZ_KHARI,
    SNOWGLOBE__BENNETT_ALONE
} from '../../../constants/scene/things/panels'
import { HEINEKEN__SHARED } from '../../shared/food'
import { MICROPHONE__SHARED } from '../../shared/instruments'
import {
    ALL_PEOPLE__SHARED,
    BENNETT__SHARED,
    MIRIAM__SHARED
} from '../../shared/people'
import {
    ROAD__SHARED,
    SNOWGLOBE__SHARED
} from '../../shared/props'
import { REATTA__SHARED } from '../../shared/vehicles'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [ROAD_FUTURE]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6,
            sharedStyle: ROAD__SHARED
        }
    },
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__FUTURE]: {
            yIndex: 1,
            xPosition: 1.15,
            zOffset: 7.7,
            scaleFactor: 0.15,
            rotate: -5,
            sharedStyle: SNOWGLOBE__SHARED
        },
        [SNOWGLOBE_FUTURE_CORD]: {
            yIndex: 1,
            xPosition: 3,
            zOffset: 7.7,
            scaleFactor: 0.5,
            rotate: 10,
            sharedStyle: [
                SNOWGLOBE__SHARED,
                BENNETT__SHARED,
                ALL_PEOPLE__SHARED
            ]
        },
        [SNOWGLOBE_FUTURE_REATTA]: {
            yIndex: 1,
            xPosition: 2,
            zOffset: 6.5,
            scaleFactor: 0.7,
            rotate: -10,
            sharedStyle: [
                REATTA__SHARED,
                SNOWGLOBE__SHARED,
                BENNETT__SHARED,
                MIRIAM__SHARED,
                ALL_PEOPLE__SHARED
            ]
        }
    },
    [FIXTURE]: {
        [RECORDING_MIC]: {
            yIndex: 1,
            xPosition: 10,
            sharedStyle: MICROPHONE__SHARED
        },
        [RECORDING_BEERS]: {
            yIndex: 3,
            xPosition: 7,
            sharedStyle: HEINEKEN__SHARED
        }
    },
    [PANEL]: {
        [SNOWGLOBE__LIZ_KHARI]: {
            yIndex: 5,
            xPosition: 3,
            scaleFactor: 0.4,
            sharedStyle: SNOWGLOBE__SHARED
        },
        [SNOWGLOBE__BENNETT_ALONE]: {
            yIndex: 4,
            xPosition: 8.5,
            scaleFactor: 0.3,
            sharedStyle: SNOWGLOBE__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
