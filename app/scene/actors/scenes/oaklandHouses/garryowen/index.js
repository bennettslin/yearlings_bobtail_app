import {
    BENNETT,
    ANA,
    TRISTAN,
    NESTOR
} from '../../../keys'
import { CHUCKLING } from '../../../keys/instances/ana'
import { DROPPING_MEATS } from '../../../keys/instances/bennett'
import { INJURED } from '../../../keys/instances/nestor'
import { PUNCHING } from '../../../keys/instances/tristan'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [DROPPING_MEATS]: {
            yIndex: 5,
            arrangement: {
                xFloat: 2,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [ANA]: {
        [CHUCKLING]: {
            yIndex: 5,
            arrangement: {
                xFloat: 4,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [TRISTAN]: {
        [PUNCHING]: {
            yIndex: 5,
            arrangement: {
                xFloat: 7,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [NESTOR]: {
        [INJURED]: {
            yIndex: 5,
            arrangement: {
                xFloat: 9,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
