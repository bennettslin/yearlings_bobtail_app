import {
    BACKDROP,
    CUTOUT,
    FLAT
} from 'constants/scene'
import { FOLIAGE_BACKDROP } from 'constants/scene/things/backdrops'
import { BERKELEY_LAMPPOST } from 'constants/scene/things/cutouts'
import {
    ST_JOSEPHS_ANNEX,
    ST_JOSEPHS_CHURCH
} from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [FOLIAGE_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.7
        }
    },
    [CUTOUT]: {
        [BERKELEY_LAMPPOST]: {
            yIndex: 4,
            xPosition: 10.5,
            scaleFactor: 0.3
        }
    },
    [FLAT]: {
        [ST_JOSEPHS_ANNEX]: {
            yIndex: 1,
            xPosition: 2.5,
            scaleFactor: 0.6
        },
        [ST_JOSEPHS_CHURCH]: {
            yIndex: 1,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
