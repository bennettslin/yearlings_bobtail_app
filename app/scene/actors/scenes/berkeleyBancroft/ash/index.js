import {
    BENNETT,
    AMY,
    WADE
} from '../../../keys'
import { SMOKER } from '../../../keys/instances/amy'
import { CATHOLIC_IDEA } from '../../../keys/instances/bennett'
import { CATHOLIC_GUY } from '../../../keys/instances/wade'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [CATHOLIC_IDEA]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [AMY]: {
        [SMOKER]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [WADE]: {
        [CATHOLIC_GUY]: {
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
