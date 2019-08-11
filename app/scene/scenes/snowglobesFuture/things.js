import {
    BACKDROP,
    CARDBOARD,
    FIXTURE,
    PANEL
} from '../../../constants/scene'
import { ROAD_FUTURE } from '../../../constants/scene/things/backdrops'
import {
    SNOWGLOBE_SMALL__FUTURE,
    SNOWGLOBE_FUTURE_CORD,
    SNOWGLOBE_FUTURE_REATTA
} from '../../../constants/scene/things/cardboards'
import {
    RECORDING_MIC,
    RECORDING_CONSOLE,
    RECORDING_BEERS
} from '../../../constants/scene/things/fixtures'
import {
    SNOWGLOBE__LIZ_KHARI,
    SNOWGLOBE__BENNETT_ALONE
} from '../../../constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [ROAD_FUTURE]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__FUTURE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        },
        [SNOWGLOBE_FUTURE_CORD]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        },
        [SNOWGLOBE_FUTURE_REATTA]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [FIXTURE]: {
        [RECORDING_MIC]: {
            yIndex: 1,
            arrangement: {
                xPosition: 10,
                xWidth: 0.5,
                zHeight: 2
            }
        },
        [RECORDING_CONSOLE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 9,
                xWidth: 2,
                zHeight: 0.5
            }
        },
        [RECORDING_BEERS]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7,
                xWidth: 1,
                zHeight: 1
            }
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

export default ARRANGEMENTS_THINGS
