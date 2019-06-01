import {
    BENNETT,
    HOWIE,
    MIRIAM
} from '../../../keys'
import { WONDERING_BABY } from '../../../keys/instances/bennett'
import { USHER_WAITING } from '../../../keys/instances/howie'
import { INFANT_NURSING } from '../../../keys/instances/miriam'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [WONDERING_BABY]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [HOWIE]: {
        [USHER_WAITING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 10,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MIRIAM]: {
        [INFANT_NURSING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
