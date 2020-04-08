import {
    CARDBOARD,
    FIXTURE,
    PANEL,
    PUPPET
} from '../../../constants/scene/things'
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
    SNOWGLOBE__BENNETT_ALONE,
    LIZ_COUCH__FUTURE
} from '../../../constants/scene/things/panels'
import { OPAL_COUCH__FUTURE } from '../../../constants/scene/things/puppets'
import { ACTOR_DEFAULT_SCALE_FACTOR } from '../../../constants/scene'

export default {
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__FUTURE]: {
            yIndex: 0,
            xPosition: 0.7,
            zOffset: 5.92,
            scaleFactor: 0.15,
            rotate: -5
        },
        [SNOWGLOBE_FUTURE_CORD]: {
            yIndex: 0,
            xPosition: 7.3,
            zOffset: 5.45,
            scaleFactor: 0.5,
            rotate: 8
        },
        [SNOWGLOBE_FUTURE_REATTA]: {
            yIndex: 0,
            xPosition: 2.5,
            zOffset: 5,
            scaleFactor: 0.7,
            rotate: -7
        }
    },
    [FIXTURE]: {
        [RECORDING_MIC]: {
            yIndex: 1,
            xPosition: 9
        },
        [RECORDING_BEERS]: {
            yIndex: 1,
            xPosition: 7.2,
            scaleFactor: ACTOR_DEFAULT_SCALE_FACTOR
        }
    },
    [PANEL]: {
        [SNOWGLOBE__LIZ_KHARI]: {
            yIndex: 5,
            xPosition: 3,
            scaleFactor: 0.44
        },
        [SNOWGLOBE__BENNETT_ALONE]: {
            yIndex: 4,
            xPosition: 8.5,
            scaleFactor: 0.35
        },
        [LIZ_COUCH__FUTURE]: {
            yIndex: 3,
            xPosition: 2.075,
            scaleFactor: 0.23
        }
    },
    [PUPPET]: {
        [OPAL_COUCH__FUTURE]: {
            yIndex: 1,
            xPosition: 1,
            scaleFactor: 0.2
        }
    }
}
