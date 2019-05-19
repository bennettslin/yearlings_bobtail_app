import {
    BENNETT,
    MIRIAM
} from '../../../keys'
import { INFIRM } from '../../../keys/instances/bennett'
import { TENNIS } from '../../../keys/instances/miriam'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [INFIRM]: {
            yIndex: 3,
            arrangement: {
                xFloat: 2.5,
                xWidth: 3,
                zHeight: 3
            }
        }
    },
    [MIRIAM]: {
        [TENNIS]: {
            yIndex: 3,
            arrangement: {
                xFloat: 10,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
