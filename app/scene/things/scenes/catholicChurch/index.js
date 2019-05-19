import {
    BACKDROPS,
    CUTOUTS,
    FLATS
} from 'constants/scene'
import { WEST_BERKELEY_BACKDROP } from '../../keys/backdrops'
import { BERKELEY_LAMPPOST } from '../../keys/cutouts'
import {
    ST_JOSEPHS_ANNEX,
    ST_JOSEPHS_CHURCH
} from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [WEST_BERKELEY_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [BERKELEY_LAMPPOST]: {
            yIndex: 4,
            arrangement: {
                xFloat: 11,
                xWidth: 1,
                zHeight: 7
            }
        }
    },
    [FLATS]: {
        [ST_JOSEPHS_ANNEX]: {
            yIndex: 1,
            arrangement: {
                xFloat: 2.5,
                xWidth: 4.5,
                zHeight: 3
            }
        },
        [ST_JOSEPHS_CHURCH]: {
            yIndex: 1,
            arrangement: {
                xFloat: 8,
                xWidth: 6,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
