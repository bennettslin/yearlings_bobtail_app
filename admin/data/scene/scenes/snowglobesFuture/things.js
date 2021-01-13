import {
    CARDBOARD,
    FIXTURE,
    PANEL,
    PUPPET,
} from '../../../../../app/constants/scene/things'
import {
    SNOWGLOBE_SMALL__FUTURE,
    SNOWGLOBE_FUTURE_CORD,
    SNOWGLOBE_FUTURE_REATTA,
} from '../../../../../app/constants/scene/things/cardboards'
import {
    RECORDING_MIC,
    RECORDING_BEERS,
} from '../../../../../app/constants/scene/things/fixtures'
import {
    SNOWGLOBE__LIZ_KHARI,
    SNOWGLOBE__BENNETT_ALONE,
    LIZ_COUCH__FUTURE,
} from '../../../../../app/constants/scene/things/panels'
import { OPAL_COUCH__FUTURE } from '../../../../../app/constants/scene/things/puppets'

export default {
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__FUTURE]: {
            yIndex: 0,
            xPosition: 0.54,
            zOffset: 6.25,
            rotate: -5,
        },
        [SNOWGLOBE_FUTURE_CORD]: {
            yIndex: 0,
            xPosition: 7,
            zOffset: 5.45,
            scaleFactor: 0.6,
            rotate: 8,
        },
        [SNOWGLOBE_FUTURE_REATTA]: {
            yIndex: 0,
            xPosition: 2.6,
            zOffset: 5,
            scaleFactor: 0.85,
            rotate: -7,
        },
    },
    [FIXTURE]: {
        [RECORDING_MIC]: {
            yIndex: 1,
            xPosition: 9,
        },
        [RECORDING_BEERS]: {
            yIndex: 1,
            xPosition: 7.2,
        },
    },
    [PANEL]: {
        [SNOWGLOBE__LIZ_KHARI]: {
            yIndex: 5,
            xPosition: 3,
        },
        [SNOWGLOBE__BENNETT_ALONE]: {
            yIndex: 4,
            xPosition: 8.5,
            scaleFactor: 0.8,
        },
        [LIZ_COUCH__FUTURE]: {
            yIndex: 3,
            xPosition: 2.075,
        },
    },
    [PUPPET]: {
        [OPAL_COUCH__FUTURE]: {
            yIndex: 1,
            xPosition: 1,
        },
    },
}
