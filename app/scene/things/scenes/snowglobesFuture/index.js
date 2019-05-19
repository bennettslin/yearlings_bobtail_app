import {
    FIXTURES,
    FLATS,
    PANELS
} from 'constants/scene'
import {
    RECORDING_MIC,
    RECORDING_CONSOLE,
    RECORDING_BEERS
} from '../../keys/fixtures'
import { ROAD_FUTURE } from '../../keys/flats'
import {
    SNOWGLOBE_LIZ_KHARI,
    SNOWGLOBE_BENNETT_ALONE
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [FIXTURES]: {
        [RECORDING_MIC]: {
            yIndex: 1,
            arrangement: {
                xFloat: 10,
                xWidth: 0.5,
                zHeight: 2
            }
        },
        [RECORDING_CONSOLE]: {
            yIndex: 2,
            arrangement: {
                xFloat: 9,
                xWidth: 2,
                zHeight: 0.5
            }
        },
        [RECORDING_BEERS]: {
            yIndex: 3,
            arrangement: {
                xFloat: 7,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [FLATS]: {
        [ROAD_FUTURE]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [PANELS]: {
        [SNOWGLOBE_LIZ_KHARI]: {
            yIndex: 5,
            arrangement: {
                xFloat: 3,
                xWidth: 5.5,
                zHeight: 5
            }
        },
        [SNOWGLOBE_BENNETT_ALONE]: {
            yIndex: 4,
            arrangement: {
                xFloat: 8.5,
                xWidth: 4.5,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
