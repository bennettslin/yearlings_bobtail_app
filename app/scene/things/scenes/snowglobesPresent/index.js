import {
    FLATS,
    PANELS
} from 'constants/scene'
import { ROAD_PRESENT } from '../../keys/flats'
import {
    SNOWGLOBE_LIZ_ALONE,
    SNOWGLOBE_BENNETT_MIRIAM,
    BENNETT_COUCH_BUBBLE,
    BENNETT_LEFT_ARMREST_BUBBLE,
    BENNETT_RIGHT_ARMREST_BUBBLE
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [FLATS]: {
        [ROAD_PRESENT]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [PANELS]: {
        [SNOWGLOBE_LIZ_ALONE]: {
            yIndex: 4,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4.5,
                zHeight: 4
            }
        },
        [SNOWGLOBE_BENNETT_MIRIAM]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [BENNETT_COUCH_BUBBLE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [BENNETT_LEFT_ARMREST_BUBBLE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [BENNETT_RIGHT_ARMREST_BUBBLE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
