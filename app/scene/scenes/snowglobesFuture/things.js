import {
    CARDBOARD,
    FIXTURE,
    PANEL
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
    SNOWGLOBE__BENNETT_ALONE
} from '../../../constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__FUTURE]: {
            yIndex: 1,
            xPosition: 0.7,
            zOffset: 7.2,
            scaleFactor: 0.15,
            rotate: -10
        },
        [SNOWGLOBE_FUTURE_CORD]: {
            yIndex: 1,
            xPosition: 6.3,
            zOffset: 6.9,
            scaleFactor: 0.5,
            rotate: 8
        },
        [SNOWGLOBE_FUTURE_REATTA]: {
            yIndex: 1,
            xPosition: 1.9,
            zOffset: 6.25,
            scaleFactor: 0.7,
            rotate: -7
        }
    },
    [FIXTURE]: {
        [RECORDING_MIC]: {
            yIndex: 1,
            xPosition: 10
        },
        [RECORDING_BEERS]: {
            yIndex: 3,
            xPosition: 7
        }
    },
    [PANEL]: {
        [SNOWGLOBE__LIZ_KHARI]: {
            yIndex: 5,
            xPosition: 3,
            scaleFactor: 0.4
        },
        [SNOWGLOBE__BENNETT_ALONE]: {
            yIndex: 4,
            xPosition: 8.5,
            scaleFactor: 0.3
        }
    }
}
