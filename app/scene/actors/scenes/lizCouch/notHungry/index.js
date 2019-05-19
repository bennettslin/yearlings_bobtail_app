import {
    LIZ,
    KHARI
} from '../../../keys'
import { CONCERNED } from '../../../keys/instances/khari'
import { NOT_HUNGRY } from '../../../keys/instances/liz'

const ARRANGEMENTS_ACTORS = {
    [LIZ]: {
        [NOT_HUNGRY]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [KHARI]: {
        [CONCERNED]: {
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
