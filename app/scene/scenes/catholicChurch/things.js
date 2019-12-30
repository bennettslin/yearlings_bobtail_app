import {
    BACKDROP,
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import { YARD_BACKDROP } from '../../../constants/scene/things/backdrops'
import { BERKELEY_LAMPPOST } from '../../../constants/scene/things/cutouts'
import {
    ST_JOSEPHS_ANNEX,
    ST_JOSEPHS_CHURCH
} from '../../../constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [YARD_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.1
        }
    },
    [CUTOUT]: {
        [BERKELEY_LAMPPOST]: {
            yIndex: 4,
            xPosition: 1,
            scaleFactor: 0.3
        }
    },
    [FLAT]: {
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

export default ARRANGEMENTS_THINGS
