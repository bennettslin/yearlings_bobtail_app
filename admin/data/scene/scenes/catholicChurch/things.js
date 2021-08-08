import {
    CUTOUT,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { LAMPPOST__CHURCH } from '../../../../../src/constants/scene/things/cutouts'
import {
    DISTANT_HOUSES,
    ST_JOSEPHS_ANNEX,
    ST_JOSEPHS_CHURCH,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [LAMPPOST__CHURCH]: {
            yIndex: 4,
            xPosition: 1,
        },
    },
    [FLAT]: {
        [DISTANT_HOUSES]: {
            yIndex: 0,
        },
        [ST_JOSEPHS_ANNEX]: {
            yIndex: 1,
            xPosition: 1.5,
        },
        [ST_JOSEPHS_CHURCH]: {
            yIndex: 1,
            xPosition: 7.5,
        },
    },
}
