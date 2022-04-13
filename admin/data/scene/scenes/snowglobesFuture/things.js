import {
    CARDBOARD,
    FIXTURE,
    PANEL,
    PUPPET,
} from '../../../../../src/constants/scene/things'
import {
    SNOWGLOBE_SMALL_FUTURE,
    SNOWGLOBE_CORD,
    SNOWGLOBE_COWGIRL,
} from '../../../../../src/constants/scene/things/cardboards'
import {
    RECORDING_MIC,
    HEINEKEN_PACK,
    HEINEKEN__BENNETT,
} from '../../../../../src/constants/scene/things/fixtures'
import {
    SNOWGLOBE_FUTURE__LIZ,
    SNOWGLOBE_FUTURE__BENNETT,
    LIZ_COUCH__FUTURE,
} from '../../../../../src/constants/scene/things/panels'
import { OPAL_COUCH__FUTURE } from '../../../../../src/constants/scene/things/puppets'

export default {
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL_FUTURE]: {
            yIndex: 0,
            xPosition: 0.54,
            zOffset: 6.25,
            rotate: -5,
        },
        [SNOWGLOBE_CORD]: {
            yIndex: 0,
            xPosition: 7,
            zOffset: 5.45,
            scaleFactor: 0.6,
            rotate: 8,
        },
        [SNOWGLOBE_COWGIRL]: {
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
        [HEINEKEN__BENNETT]: {
            yIndex: 1,
            xPosition: 6.7,
        },
        [HEINEKEN_PACK]: {
            yIndex: 1,
            xPosition: 7.2,
        },
    },
    [PANEL]: {
        [SNOWGLOBE_FUTURE__LIZ]: {
            yIndex: 5,
            xPosition: 3,
        },
        [SNOWGLOBE_FUTURE__BENNETT]: {
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
