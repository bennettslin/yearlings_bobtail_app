import {
    CUTOUT,
    FLAT
} from '../../../../../app/constants/scene/things'
import { LAMPPOST__CHURCH } from '../../../../../app/constants/scene/things/cutouts'
import {
    DISTANT_HOUSES,
    ST_JOSEPHS_ANNEX,
    ST_JOSEPHS_CHURCH
} from '../../../../../app/constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [LAMPPOST__CHURCH]: {
            yIndex: 4,
            xPosition: 1,
            scaleFactor: 0.3
        }
    },
    [FLAT]: {
        [DISTANT_HOUSES]: {
            yIndex: 0,
            scaleFactor: 0.45
        },
        [ST_JOSEPHS_ANNEX]: {
            yIndex: 1,
            xPosition: 1.5,
            scaleFactor: 0.39
        },
        [ST_JOSEPHS_CHURCH]: {
            yIndex: 1,
            xPosition: 7.5,
            scaleFactor: 0.55
        }
    }
}
