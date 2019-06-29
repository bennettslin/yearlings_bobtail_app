import {
    FLAT,
    PANEL
} from 'constants/scene'
import { ROAD_PRESENT } from 'constants/scene/things/flats'
import {
    SNOWGLOBE__LIZ_ALONE,
    SNOWGLOBE__BENNETT_MIRIAM,
    BENNETT_COUCH__BUBBLE,
    BENNETT_LEFT_ARMREST__BUBBLE,
    BENNETT_RIGHT_ARMREST__BUBBLE
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [FLAT]: {
        [ROAD_PRESENT]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [PANEL]: {
        [SNOWGLOBE__LIZ_ALONE]: {
            yIndex: 4,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4.5,
                zHeight: 4
            }
        },
        [SNOWGLOBE__BENNETT_MIRIAM]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [BENNETT_COUCH__BUBBLE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [BENNETT_LEFT_ARMREST__BUBBLE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [BENNETT_RIGHT_ARMREST__BUBBLE]: {
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
