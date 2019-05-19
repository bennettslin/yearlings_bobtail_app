import {
    BENNETT,
    HOWIE
} from '../../keys'
import { MERRILY_DERANGED } from '../../keys/instances/bennett'
import { USHER_LOOKING } from '../../keys/instances/howie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [MERRILY_DERANGED]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [HOWIE]: {
        [USHER_LOOKING]: {
            yIndex: 5,
            arrangement: {
                xFloat: 1,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
