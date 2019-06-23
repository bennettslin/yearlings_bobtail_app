import {
    BACKDROP,
    CUTOUT,
    FLAT
} from 'constants/scene'
import { WEST_BERKELEY_BACKDROP } from '../../keys/backdrops'
import { BERKELEY_LAMPPOST } from '../../keys/cutouts'
import {
    ST_JOSEPHS_ANNEX,
    ST_JOSEPHS_CHURCH
} from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [WEST_BERKELEY_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUT]: {
        [BERKELEY_LAMPPOST]: {
            yIndex: 4,
            arrangement: {
                xPosition: 11,
                xWidth: 1,
                zHeight: 7
            }
        }
    },
    [FLAT]: {
        [ST_JOSEPHS_ANNEX]: {
            yIndex: 1,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4.5,
                zHeight: 3
            }
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
