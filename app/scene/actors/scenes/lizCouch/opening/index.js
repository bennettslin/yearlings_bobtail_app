import {
    LIZ,
    KHARI
} from '../../../keys'
import { ARRIVED } from '../../../keys/instances/khari'
import { OPENING_DOOR } from '../../../keys/instances/liz'

const ARRANGEMENTS_ACTORS = {
    [LIZ]: {
        [OPENING_DOOR]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [KHARI]: {
        [ARRIVED]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
