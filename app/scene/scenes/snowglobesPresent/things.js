import {
    BACKDROP,
    PANEL
} from 'constants/scene'
import { ROAD_PRESENT } from 'constants/scene/things/backdrops'
import {
    SNOWGLOBE__LIZ_ALONE,
    SNOWGLOBE__BENNETT_MIRIAM,
    WIDE_COUCH__MIRIAM,
    WIDE_LEFT_ARMREST__MIRIAM,
    WIDE_RIGHT_ARMREST__MIRIAM
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
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
            xPosition: 2.5,
            scaleFactor: 0.3
        },
        [SNOWGLOBE__BENNETT_MIRIAM]: {
            yIndex: 5,
            xPosition: 8,
            scaleFactor: 0.4
        },
        [WIDE_COUCH__MIRIAM]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [WIDE_LEFT_ARMREST__MIRIAM]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [WIDE_RIGHT_ARMREST__MIRIAM]: {
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
